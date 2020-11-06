import React from "react";
import { graphql, PageRendererProps } from "gatsby";
import Image, { FluidObject } from "gatsby-image";
import styled from "styled-components";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import { Query, MarkdownRemark } from "../generated/graphql";
import { ContentContainer } from "../components/content-container";
import { colors } from "../config/colors";
import { fonts } from "../config/fonts";
import { BlogPost } from "../components/blog/post";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { BlogSeriesList } from "../components/blog/series-list";

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
  padding: ${rhythm(3)} 0 ${rhythm(1)};
  margin: ${rhythm(3)} 0 0;
`;

const OtherPostsTitle = styled.h3``;

const OtherPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};

  @media screen and (max-width: ${rhythm(24)}) {
    grid-template-columns: 1fr;
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
    margin-bottom: ${rhythm(1)};
    ${scale(-1 / 5)};
  }

  // The default "green" is not accessible
  .token.inserted {
    color: #7ec699;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .gatsby-highlight {
    margin-bottom: ${rhythm(1.2)};

    pre {
      border-radius: ${rhythm(1 / 4)};
    }
  }

  // Custom styles for an "alert" or "notice"
  .notice {
    ${fonts.primary}
    ${fonts.weights.bold}
    position: relative;
    overflow: hidden;
    margin-bottom: ${rhythm(1)};
    padding: ${rhythm(1)};
    padding-left: ${rhythm(3 / 2)};
    border-radius: ${rhythm(1 / 2)};
    color: ${colors.text};
    box-shadow: 0px ${rhythm(1 / 4)} ${rhythm(1)} -${rhythm(1 / 4)} rgba(0, 0, 0, 0.3);
    background-color: ${colors.white};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: ${rhythm(1 / 2)};
      background-image: linear-gradient(135deg, #ff96f9 10%, #c32bac 100%);
    }
  }

  // Custom styles for the design system principles blog post
  &.post-design-system-principles {
    ol {
      list-style: none;
      counter-reset: principle;
      margin-left: ${rhythm(3 / 2)};
    }

    ol ol {
      counter-reset: sub-principle;
    }

    li {
      position: relative;
      counter-increment: principle;

      strong {
        ${fonts.primary}
      }

      &:before {
        content: counter(principle) ".";
        left: -${rhythm(3 / 2)};
        top: 0;
        position: absolute;
        color: ${colors.red};
        font-size: 2rem;
        line-height: 2rem;
      }
    }

    li + li {
      margin-top: ${rhythm(2)};
    }

    li li {
      counter-increment: sub-principle;
      margin-top: ${rhythm(1)};

      &:before {
        content: counter(principle) counter(sub-principle, lower-alpha) ".";
        ${scale(1 / 3)}
      }
    }
  }
`;

function getRandomElementAndRemove<T>(arr: T[]): T {
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
}

interface PageQuery extends Query {
  previous: Query["markdownRemark"];
  next: Query["markdownRemark"];
  relatedPosts: Query["allMarkdownRemark"];
}

interface Props extends PageRendererProps {
  data: PageQuery;
  pageContext: {
    previous: any;
    next: any;
    relatedPosts: any;
    mostRecentPost: boolean;
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
      lastUpdated,
      featuredImage,
      tags,
      series
    } = post.frontmatter;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next, relatedPosts } = this.props.data;
    const { slug, readingTime, seriesSlug } = post.fields;
    const { mostRecentPost } = this.props.pageContext;

    const githubUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog${slug}index.md`;
    const twitterUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://skovy.dev${slug}`
    )}`;

    const findMatchingTagsToString = (relatedPost: MarkdownRemark): string => {
      const matchingTags = relatedPost.frontmatter.tags.filter(tag =>
        tags.includes(tag)
      );

      if (matchingTags.length > 1) {
        const rest = [...matchingTags.sort()];
        const last = rest.pop();

        return `${rest.join(", ")} and ${last}`;
      } else {
        return matchingTags[0];
      }
    };

    const relatedPostsCopy = [...relatedPosts.edges];
    const relatedPostOne = getRandomElementAndRemove(relatedPostsCopy)?.node;
    const relatedPostTwo = getRandomElementAndRemove(relatedPostsCopy)?.node;

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
          {series && <BlogSeriesList {...series} seriesSlug={seriesSlug} />}
          <Date>
            {date} &bull; {readingTime.text}
            {lastUpdated && <span> &bull; Last updated on {lastUpdated}</span>}
          </Date>
          <FeaturedImage
            fluid={featuredImage.childImageSharp.fluid as FluidObject}
            alt={title}
          />
          {!!featuredImageCredit && (
            <FeaturedImageCredit>{featuredImageCredit}</FeaturedImageCredit>
          )}
          <Content
            className={`post-${slug.replace(/\//g, "")}`}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <PostFooter>
            <ActionLinks>
              <ActionLink href={twitterUrl} target="_blank" rel="noopener">
                <FontAwesomeIcon icon={faTwitter} /> Discuss on Twitter
              </ActionLink>{" "}
              &mdash;{" "}
              <ActionLink href={githubUrl} target="_blank" rel="noopener">
                <FontAwesomeIcon icon={faGithub} /> Edit on GitHub
              </ActionLink>
            </ActionLinks>
            <Bio />
            {(relatedPostOne || relatedPostTwo) && (
              <>
                <OtherPostsTitle>Related Posts</OtherPostsTitle>
                <OtherPosts>
                  {relatedPostOne && (
                    <BlogPost
                      key={relatedPostOne.fields.slug}
                      post={relatedPostOne}
                      subtext={
                        <>
                          <FontAwesomeIcon icon={faTag} /> Also related to{" "}
                          {findMatchingTagsToString(relatedPostOne)}
                        </>
                      }
                    />
                  )}
                  {relatedPostTwo && (
                    <BlogPost
                      key={relatedPostTwo.fields.slug}
                      post={relatedPostTwo}
                      subtext={
                        <>
                          <FontAwesomeIcon icon={faTag} /> Also related to{" "}
                          {findMatchingTagsToString(relatedPostTwo)}
                        </>
                      }
                    />
                  )}
                </OtherPosts>
              </>
            )}
            <OtherPostsTitle>Other Posts</OtherPostsTitle>
            <OtherPosts>
              <BlogPost
                post={previous}
                subtext={
                  <>
                    <FontAwesomeIcon icon={faClock} /> Previous post
                  </>
                }
              />
              <BlogPost
                post={next}
                subtext={
                  <>
                    <FontAwesomeIcon icon={faClock} />{" "}
                    {/* When it's the most recent post, the two previous posts are shown */}
                    {mostRecentPost ? "Previous Post" : "Next post"}
                  </>
                }
              />
            </OtherPosts>
          </PostFooter>
        </ContentContainer>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $nextId: String!
    $previousId: String!
    $relatedPostIds: [String!]!
  ) {
    site {
      siteMetadata {
        title
        author
      }
    }
    previous: markdownRemark(id: { eq: $previousId }) {
      ...BlogPostData
    }
    next: markdownRemark(id: { eq: $nextId }) {
      ...BlogPostData
    }
    relatedPosts: allMarkdownRemark(filter: { id: { in: $relatedPostIds } }) {
      edges {
        node {
          ...BlogPostData
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        seriesSlug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        lastUpdated(formatString: "MMMM DD, YYYY")
        description
        featuredImageCredit
        tags
        series {
          name
          order
        }
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
