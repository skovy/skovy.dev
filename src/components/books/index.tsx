import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { ContentContainer } from "../content-container";
import { SectionHeading } from "../section-heading";
import { ViewMore } from "../view-more"
import { Query } from "../../generated/graphql";
import { Review } from "./review";
import { getReviewsByShelf, sortReviewsByReadAtDesc, filterOutReviewsWithNoBookPhoto } from "./util";

const Container = styled.div`
  background-image: linear-gradient(135deg, #08aeea 0%, #2af598 100%);
  padding: ${rhythm(3)} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${rhythm(1)};

  @media screen and (max-width: ${rhythm(24)}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${rhythm(16)}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export class Books extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={(data: Query) => {
          const readShelf = getReviewsByShelf(data, "read");

          if (!readShelf) return null;

          const sortedReviews = sortReviewsByReadAtDesc(readShelf);
          const filteredReviews = filterOutReviewsWithNoBookPhoto(
            sortedReviews
          );

          return (
            <Container id="books">
              <ContentContainer>
                <SectionHeading>Recently Read</SectionHeading>
                <Grid>
                  {filteredReviews.slice(0, 12).map(review => (
                    <Review review={review} key={review.id} />
                  ))}
                </Grid>
                <ViewMore to="/recently-read">
                  See all reads 
                </ViewMore>
              </ContentContainer>
            </Container>
          );
        }}
      />
    );
  }
}

const query = graphql`
  query {
    allGoodreadsShelf {
      edges {
        node {
          id
          name
          reviews {
            id
            read_at
            book {
              id
              title
              image_url
              link
            }
          }
        }
      }
    }
  }
`;
