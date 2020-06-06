import React from "react";
import { graphql, PageRendererProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ContentContainer } from "../components/content-container";
import { BlogInlinePost } from "../components/blog/inline-post";
import { SectionHeading } from "../components/section-heading";
import { Query } from "../generated/graphql";

interface PageQuery extends Query {
  posts: Query["allMarkdownRemark"];
}

interface Props extends PageRendererProps {
  data: PageQuery;
}

const SeriesTemplate: React.FC<Props> = props => {
  const { posts, site } = props.data;
  const siteTitle = site.siteMetadata.title;
  let title;

  // Unique list of tags for SEO keywords
  const tags = [];
  const postsList = posts.edges.map(({ node: post }, index) => {
    if (index === 0) {
      title = `Series: "${post.frontmatter.series.name}"`;
    }

    post.frontmatter.tags.forEach(tag => !tags.includes(tag) && tags.push(tag));
    return <BlogInlinePost post={post} key={post.fields.slug} />;
  });

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={title} description={title} keywords={tags} />
      <ContentContainer>
        <SectionHeading as="h1">{title}</SectionHeading>
        {postsList}
      </ContentContainer>
    </Layout>
  );
};

export default SeriesTemplate;

export const pageQuery = graphql`
  query SeriesBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { seriesSlug: { eq: $slug } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            series {
              name
              order
            }
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
