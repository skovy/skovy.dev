import React from "react";
import { graphql, PageRendererProps } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Query } from "../generated/graphql";
import { ContentContainer } from "../components/content-container";
import { BookList } from "../components/books/list";

interface Props extends PageRendererProps {
  data: Query;
}

class RecentlyRead extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Recently Read Books" keywords={[`recent`, `books`]} />
        <ContentContainer>
          <Bio />
        </ContentContainer>
        <BookList data={data} />
      </Layout>
    );
  }
}

export default RecentlyRead;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
              small_image_url
              large_image_url
              link
              isbn
            }
          }
        }
      }
    }
  }
`;
