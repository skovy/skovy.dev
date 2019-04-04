import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { rhythm } from "../../../utils/typography";
import { GitHubRepository } from "../repository";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { colors } from "../../../config/colors";

const Container = styled.div`
  padding: ${rhythm(3)} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${rhythm(1)};
`;

const AllProjects = styled.a`
  display: block;
  text-align: right;
  margin-top: ${rhythm(1)};
  color: ${colors.text};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
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
              <AllProjects href="https://github.com/skovy" target="_blank">
                See all projects <FontAwesomeIcon icon={faArrowRight} />
              </AllProjects>
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
