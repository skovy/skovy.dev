import React from "react";
import { Link, graphql, PageRendererProps } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import { Query } from "../generated/graphql";
import { ContentContainer } from "../components/content-container";
import { colors } from "../config/colors";

const GITHUB_USERNAME = "skovy";
const GITHUB_REPO_NAME = "skovy.dev";

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

const PostFooter = styled.div`
  border-top: 2px solid ${colors.lightGray};
  border-bottom: 2px solid ${colors.lightGray};
  padding: ${rhythm(3)} 0;
  margin: ${rhythm(3)} 0 0;
`;

const OtherPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const OtherPost = styled.li`
  margin: 0;

  & + & {
    margin-top: ${rhythm(1 / 2)};
  }
`;

const PostLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  transition: color 200ms ease;

  &:hover,
  &:focus {
    color: ${colors.secondary};
  }
`;

const ActionLinks = styled.div`
  margin-bottom: ${rhythm(2)};
`;

const ActionLink = styled.a`
  display: inline-block;
  color: ${colors.primary};
  text-decoration: none;
  transition: color 200ms ease;

  &:hover,
  &:focus {
    color: ${colors.secondary};
  }
`;

const Content = styled.div`
  line-height: 1.75em;

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
    padding: 2px 6px;
  }

  .gatsby-highlight-code-line {
    background-color: ${colors.code.highlightedBackground};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${colors.secondary};
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
    
    pre {
      border-radius: ${rhythm(1/4)};
    }
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
    const { slug } = post.fields;

    const githubUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog${slug}index.md`;
    const twitterUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://skovy.dev${slug}`
    )}`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
          keywords={tags}
          image={`https://skovy.dev${featuredImage.childImageSharp.fixed.src}`}
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
          <PostFooter>
            <ActionLinks>
              <ActionLink href={twitterUrl} target="_blank">
                <FontAwesomeIcon icon={faTwitter} /> Discuss on Twitter
              </ActionLink>{" "}
              &mdash;{" "}
              <ActionLink href={githubUrl} target="_blank">
                <FontAwesomeIcon icon={faGithub} /> Edit on GitHub
              </ActionLink>
            </ActionLinks>
            <Bio />
            <OtherPosts>
              <OtherPost>
                {previous && (
                  <PostLink to={previous.fields.slug} rel="prev">
                    <FontAwesomeIcon icon={faArrowLeft} />{" "}
                    {previous.frontmatter.title}
                  </PostLink>
                )}
              </OtherPost>
              <OtherPost>
                {next && (
                  <PostLink to={next.fields.slug} rel="next">
                    {next.frontmatter.title}{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </PostLink>
                )}
              </OtherPost>
            </OtherPosts>
          </PostFooter>
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
      fields {
        slug
      }
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
            fixed(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`;
