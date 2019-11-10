import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { TalksVideo } from "./video";
import { rhythm } from "../../utils/typography";
import { ContentContainer } from "../content-container";
import { SectionHeading } from "../section-heading";
import { Query } from "../../generated/graphql";

const Container = styled.div`
  padding: ${rhythm(3)} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${rhythm(1)};
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
                <SectionHeading>Recent Talks</SectionHeading>
                <Grid>
                  {talks.map(talk => (
                    <TalksVideo talk={talk} key={talk.id} />
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
          title
          description
        }
      }
    }
  }
`;
