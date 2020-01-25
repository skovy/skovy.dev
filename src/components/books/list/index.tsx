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
const BOOKS_PER_ROW = 8;
const INITIAL_OFFSET = 50;

const Content = styled.div`
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${SHELF_MARGIN}px;

  @media screen and (max-width: ${rhythm(24)}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${rhythm(16)}) {
    grid-template-columns: repeat(3, 1fr);
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
`;

const ShelfCap = styled.div`
  position: absolute;
  height: 8px;
  background-color: #584d3d;
  top: ${SHELF_HEIGHT}px;
  right: 0;
  left: 0;
  transform: perspective(0) rotateX(-86deg);
  transform-origin: top;
  z-index: 2;
`;

interface Props {
  data: Query;
}

export const BookList: React.FC<Props> = ({ data }) => {
  const readShelf = getReviewsByShelf(data, "read");

  if (!readShelf) return null;

  const sortedReviews = sortReviewsByReadAtDesc(readShelf);

  return (
    <ContentContainer>
      <Content>
        <Grid>
          {sortedReviews.map((review, index) => {
            const element = <Review review={review} key={review.id} />;

            if (index % BOOKS_PER_ROW === 0) {
              const shelfNumber = index / BOOKS_PER_ROW;

              return (
                <>
                  <Shelf
                    style={{
                      top: INITIAL_OFFSET + shelfNumber * SHELF_SPACING
                    }}
                  >
                    <ShelfCap />
                  </Shelf>
                  {element}
                </>
              );
            }

            return element;
          })}
        </Grid>
      </Content>
    </ContentContainer>
  );
};
