import React from "react";
import { Link, graphql, PageRendererProps } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import { Query } from "../generated/graphql";
import { ContentContainer } from "../components/content-container";
import { colors } from "../config/colors";

const Title = styled.h1`
  margin-bottom: ${rhythm(1 / 2)};
`;

const Date = styled.p`
  font-style: italic;
  ${scale(-1 / 5)}
  display: block;
  margin-bottom: ${rhythm(1)};
`;

const FeaturedImage = styled(Image)`
  display: block;
  margin-bottom: ${rhythm(1 / 5)};
  border-radius: ${rhythm(1 / 5)};
`;

const FeaturedImageCredit = styled.p`
  text-align: center;
  font-style: italic;
  color: ${colors.muted};
  ${scale(-1 / 5)}
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const PostLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
`;

const Content = styled.div`
  a {
    color: ${colors.primary};
    text-decoration: underline;
    transition: color 200ms ease;

    &:hover,
    &:focus {
      color: ${colors.secondary};
    }
  }

  blockquote {
    margin-left: 0;
    padding: ${rhythm(1 / 2)} 0 ${rhythm(1 / 2)} ${rhythm(1)};
    border-left: 4px solid ${colors.primary};
  }

  // Override the inline code styles
  & *:not(pre) > code[class*="language-"] {
    background: ${colors.code.inlineBackground};
    color: ${colors.code.inlineColor};
  }

  // Custom class for displaying image captions
  .image-caption {
    display: block;
    text-align: center;
    font-style: italic;
    color: ${colors.muted};
    margin-top: -${rhythm(1)};
    margin-bottom: ${rhythm(1)};
    ${scale(-1 / 5)};
  }

  .gatsby-highlight {
    margin-bottom: ${rhythm(1.2)};
  }
`;

interface Props extends PageRendererProps {
  data: Query;
  pageContext: {
    previous: any;
    next: any;
  };
}

class BlogPostTemplate extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark;
    const {
      title,
      description,
      date,
      featuredImageCredit,
      featuredImage,
      tags,
    } = post.frontmatter;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
          keywords={tags}
          image={featuredImage.childImageSharp.fixed.src}
        />
        <ContentContainer>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <FeaturedImage
            fluid={featuredImage.childImageSharp.fluid as FluidObject}
            alt={title}
          />
          {!!featuredImageCredit && (
            <FeaturedImageCredit>{featuredImageCredit}</FeaturedImageCredit>
          )}
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          <Divider />
          <Bio />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <PostLink to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </PostLink>
              )}
            </li>
            <li>
              {next && (
                <PostLink to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </PostLink>
              )}
            </li>
          </ul>
        </ContentContainer>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImageCredit
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 400) {
              src
            }
          }
        }
      }
    }
  }
`;
