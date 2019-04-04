import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../../../utils/typography";
import { GitHubRepository } from "../repository";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";

const Container = styled.div`
  padding-top: ${rhythm(3)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
`;

export class GitHubProjects extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <Container>
            <ContentContainer>
              <SectionHeading>Projects & Packages</SectionHeading>
              <Grid>
                {data.github.viewer.pinnedRepositories.nodes.map(
                  (repository, index) => (
                    <GitHubRepository
                      repository={repository}
                      key={repository.id}
                      index={index}
                    />
                  )
                )}
              </Grid>
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
        pinnedRepositories(
          privacy: PUBLIC
          orderBy: { field: STARGAZERS, direction: DESC }
          ownerAffiliations: OWNER
          first: 4
        ) {
          nodes {
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
`;
