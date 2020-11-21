import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../../../utils/typography";
import { GitHubRepository } from "../repository";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { ViewMore } from "../../view-more";

const Container = styled.div`
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

export class GitHubProjects extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <Container id="projects-and-packages">
            <ContentContainer>
              <SectionHeading>Projects & Packages</SectionHeading>
              <Grid>
                {data.github.viewer.pinnedItems.nodes.map(
                  (repository, index) => (
                    <GitHubRepository
                      repository={repository}
                      key={repository.id}
                      index={index}
                    />
                  )
                )}
              </Grid>
              <ViewMore
                href="https://github.com/skovy"
                target="_blank"
                rel="noopener"
              >
                See all projects
              </ViewMore>
            </ContentContainer>
          </Container>
        )}
      />
    );
  }
}

const query = graphql`
  query {
    github {
      viewer {
        pinnedItems(types: REPOSITORY, first: 6) {
          nodes {
            ... on GitHub_Repository {
              id
              name
              description
              homepageUrl
              forkCount
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
