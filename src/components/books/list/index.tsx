import React from "react";
import styled from "styled-components";

import { ContentContainer } from "../../content-container";
import { Query } from "../../../generated/graphql";
import { getReviewsByShelf, sortReviewsByReadAtDesc } from "../util";
import { Review } from "../review";
import { rhythm } from "../../../utils/typography";

import wood from "./wood-pattern.png";

const SHELF_HEIGHT = 500;
const BOOK_HEIGHT = 80;
const SHELF_MARGIN = 48;
const SHELF_SPACING = BOOK_HEIGHT + SHELF_MARGIN;
const INITIAL_OFFSET = 50;
const BREAKPOINTS = {
  SMALL: rhythm(16),
  MEDIUM: rhythm(26),
  LARGE: rhythm(32)
};
const BOOKS_PER_ROW = {
  SMALL: 3,
  MEDIUM: 4,
  LARGE: 6
};

const convertRemToPixels = rem =>
  parseFloat(rem.replace("rem", "")) *
  parseFloat(getComputedStyle(document.documentElement).fontSize);

const Content = styled.div`
  margin: ${rhythm(4)} ${rhythm(1)} 0;
  position: relative;

  @media screen and (max-width: ${BREAKPOINTS.SMALL}) {
    margin: ${rhythm(2)} 0 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${BOOKS_PER_ROW.LARGE}, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${SHELF_MARGIN}px;
  align-items: end;

  @media screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    grid-template-columns: repeat(${BOOKS_PER_ROW.MEDIUM}, 1fr);
  }

  @media screen and (max-width: ${BREAKPOINTS.SMALL}) {
    grid-template-columns: repeat(${BOOKS_PER_ROW.SMALL}, 1fr);
  }
`;

const Shelf = styled.div`
  position: absolute;
  background-color: #584d3d;
  background-image: url(${wood});
  width: 100%;
  height: ${SHELF_HEIGHT}px;
  transform: perspective(7000px) rotateX(86deg);
  transform-origin: top;
  transform-style: preserve-3d;
  z-index: -1;
  box-sizing: content-box;

  @media screen and (min-width: ${BREAKPOINTS.LARGE}) {
    padding: 0 ${rhythm(2)};
    left: -${rhythm(2)};
  }

  &::after {
    content: "";
    position: absolute;
    height: 8px;
    background-color: #584d3d;
    top: ${SHELF_HEIGHT}px;
    right: 0;
    left: 0;
    transform: perspective(0) rotateX(-86deg);
    transform-origin: top;
  }
`;

function useWindowSize() {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

interface Props {
  data: Query;
}

export const BookList: React.FC<Props> = ({ data }) => {
  const [width] = useWindowSize();

  let booksPerRow: number;
  if (width < convertRemToPixels(BREAKPOINTS.SMALL)) {
    booksPerRow = BOOKS_PER_ROW.SMALL;
  } else if (width < convertRemToPixels(BREAKPOINTS.MEDIUM)) {
    booksPerRow = BOOKS_PER_ROW.MEDIUM;
  } else {
    booksPerRow = BOOKS_PER_ROW.LARGE;
  }

  const readShelf = getReviewsByShelf(data, "read");

  if (!readShelf) return null;

  const sortedReviews = sortReviewsByReadAtDesc(readShelf);

  return (
    <ContentContainer>
      <Content>
        <Grid>
          {sortedReviews.map((review, index) => {
            const element = <Review review={review} key={review.id} />;

            if (index % booksPerRow === 0) {
              const shelfNumber = index / booksPerRow;

              return (
                <React.Fragment key={review.id}>
                  <Shelf
                    style={{
                      top: INITIAL_OFFSET + shelfNumber * SHELF_SPACING
                    }}
                  />
                  {element}
                </React.Fragment>
              );
            }

            return element;
          })}
        </Grid>
      </Content>
    </ContentContainer>
  );
};
