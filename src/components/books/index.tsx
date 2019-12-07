import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { ContentContainer } from "../content-container";
import { SectionHeading } from "../section-heading";
import { Query } from "../../generated/graphql";
import { Review } from "./review";

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
          const edge = data.allGoodreadsShelf.edges.find(
            shelf => shelf.node.name === "read"
          );

          // Handle any unexpected data.
          if (!edge) {
            return null;
          }

          // Handle more unexpected data.
          const readShelf = edge.node;
          if (!readShelf || !readShelf.reviews || !readShelf.reviews.length) {
            return null;
          }

          const sortedReviews = readShelf.reviews.sort((a, b) => {
            // For some reason, `read_at` is some times "" in the Goodreads API.
            const readAtOne = Date.parse(a.read_at) || 0;
            const readAtTwo = Date.parse(b.read_at) || 0;

            if (readAtOne < readAtTwo) {
              return 1;
            } else if (readAtOne > readAtTwo) {
              return -1;
            } else {
              return 0;
            }
          });

          const filteredReviews = sortedReviews.filter(review => {
            // For some reason, some books don't have photos (even though they
            // do in the UI).
            return review.book.image_url.indexOf("/nophoto/") === -1;
          });

          return (
            <Container id="books">
              <ContentContainer>
                <SectionHeading>Recently Read</SectionHeading>
                <Grid>
                  {filteredReviews.slice(0, 12).map(review => (
                    <Review review={review} key={review.id} />
                  ))}
                </Grid>
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
