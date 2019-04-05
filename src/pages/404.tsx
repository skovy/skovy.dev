import React from "react";
import { graphql, PageRendererProps } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ContentContainer } from "../components/content-container";
import { rhythm } from "../utils/typography";
import { Query } from "../generated/graphql";

const Container = styled.div`
  margin-top: ${rhythm(3)};
`;

const Description = styled.p`
  margin: 0;
`;

interface Props extends PageRendererProps {
  data: Query;
}

class NotFoundPage extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Container>
          <ContentContainer>
            <h3>Not Found 😭😭😭</h3>
            <Description>
              You just hit a route that doesn&#39;t exist... the sadness.
            </Description>
          </ContentContainer>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
