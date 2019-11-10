import React from "react";
import { graphql, PageRendererProps } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ContentContainer } from "../components/content-container";
import { BlogFeaturedPost } from "../components/blog/featured-post";
import { GitHubProjects } from "../components/github/projects";
import { Podcasts } from "../components/podcasts";
import { Query } from "../generated/graphql";
import { BlogRecentPosts } from "../components/blog/recent-posts";
import { Talks } from "../components/talks";

interface Props extends PageRendererProps {
  data: Query;
}

class BlogIndex extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <ContentContainer>
          <Bio />
        </ContentContainer>
        <BlogFeaturedPost post={posts[0].node} />
        <BlogRecentPosts posts={posts.slice(1, 5)} />
        <GitHubProjects />
        <Podcasts />
        <Talks />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          ...BlogPostData
        }
      }
    }
  }
`;
