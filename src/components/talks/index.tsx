import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { TalksVideo } from "./video";
import { rhythm } from "../../utils/typography";
import { ContentContainer } from "../content-container";
import { SectionHeading } from "../section-heading";
import { colors } from "../../config/colors";
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

export class Talks extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={(data: Query) => {
          const { talks } = data.site.siteMetadata;

          return (
            <Container id="recent-talks">
              <ContentContainer>
                <SectionHeading variant="light">Recent Talks</SectionHeading>
                <Grid>
                  {talks.map(({ id }) => (
                    <TalksVideo id={id} key={id} />
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
    site {
      siteMetadata {
        talks {
          id
        }
      }
    }
  }
`;
