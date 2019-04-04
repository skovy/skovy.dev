import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { PodcastsEpisode } from "./episode";
import { rhythm } from "../../utils/typography";
import { ContentContainer } from "../content-container";
import { SectionHeading } from "../section-heading";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
`;

export class Podcasts extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <ContentContainer>
            <SectionHeading>Recent Podcasts</SectionHeading>
            <Grid>
              {data.allFeedRubberDucking.edges
                .slice(0, 4)
                .map(({ node: episode }) => (
                  <PodcastsEpisode episode={episode} key={episode.guid} />
                ))}
            </Grid>
          </ContentContainer>
        )}
      />
    );
  }
}

const query = graphql`
  query {
    allFeedRubberDucking {
      edges {
        node {
          guid
          title
          link
          description
          itunes {
            image
          }
        }
      }
    }
  }
`;
