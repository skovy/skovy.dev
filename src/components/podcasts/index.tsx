import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { PodcastsEpisode } from "./episode";
import { rhythm } from "../../utils/typography";
import { ContentContainer } from "../content-container";
import { SectionHeading } from "../section-heading";
import { ViewMore } from "../view-more";
import { Query } from "../../generated/graphql";

const TOTAL_EPISODES = 4;

const Container = styled.div`
  background-image: linear-gradient(135deg, #3b2667 10%, #bc78ec 100%);
  padding: ${rhythm(3)} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${rhythm(1)};

  @media screen and (max-width: ${rhythm(24)}) {
    grid-template-columns: 1fr;
  }
`;

export class Podcasts extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={(data: Query) => {
          const otherEpisodes = data.site.siteMetadata.otherPodcasts;
          const rubberDuckingEpisodes = data.allFeedRubberDucking.edges
            .slice(0, TOTAL_EPISODES - otherEpisodes.length)
            .map(({ node }) => node);
          const episodes = [...rubberDuckingEpisodes, ...otherEpisodes];

          return (
            <Container id="recent-podcasts">
              <ContentContainer>
                <SectionHeading variant="light">Recent Podcasts</SectionHeading>
                <Grid>
                  {episodes.map(episode => (
                    <PodcastsEpisode episode={episode} key={episode.guid} />
                  ))}
                </Grid>
                <ViewMore
                  href="http://www.rubberducking.fm"
                  target="_blank"
                  rel="noopener"
                  color="white"
                >
                  See all episodes
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
    site {
      siteMetadata {
        otherPodcasts {
          guid
          title
          link
          itunes {
            image
          }
        }
      }
    }
    allFeedRubberDucking {
      edges {
        node {
          guid
          title
          link
        }
      }
    }
  }
`;
