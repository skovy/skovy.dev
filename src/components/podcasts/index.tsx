import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { PodcastsEpisode } from "./episode";
import { rhythm } from "../../utils/typography";
import { ContentContainer } from "../content-container";
import { SectionHeading } from "../section-heading";
import { colors } from "../../config/colors";

const Container = styled.div`
  background-image: linear-gradient(135deg, #3b2667 10%, #bc78ec 100%);
  box-shadow: inset 0px 16px 8px -10px rgba(0, 0, 0, 0.2),
    inset 0px -16px 8px -10px rgba(0, 0, 0, 0.2);
  padding: ${rhythm(3)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${rhythm(1)};
`;

const AllPodcasts = styled.a`
  display: block;
  text-align: right;
  margin-top: ${rhythm(1)};
  color: ${colors.white};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export class Podcasts extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <Container>
            <ContentContainer>
              <SectionHeading variant="light">Recent Podcasts</SectionHeading>
              <Grid>
                {data.allFeedRubberDucking.edges
                  .slice(0, 4)
                  .map(({ node: episode }) => (
                    <PodcastsEpisode episode={episode} key={episode.guid} />
                  ))}
              </Grid>
              <AllPodcasts href="http://www.rubberducking.fm" target="_blank">
                See all podcasts <FontAwesomeIcon icon={faArrowRight} />
              </AllPodcasts>
            </ContentContainer>
          </Container>
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
