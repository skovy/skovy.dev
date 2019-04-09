import React from "react";
import { Link } from "gatsby";
import Image, { FluidObject } from "gatsby-image";
import styled from "styled-components";

import { rhythm, scale } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import { MarkdownRemark } from "../../../generated/graphql";

const Container = styled(Link)`
  display: flex;
  align-items: flex-start;
  padding: 0;
  text-decoration: none;
  color: ${colors.text};
  transition: color 200ms ease;

  &:hover,
  &:focus {
    color: ${colors.secondary};
  }

  & + & {
    margin-top: ${rhythm(3)};
  }

  @media screen and (max-width: ${rhythm(24)}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const PostImage = styled(Image)`
  flex-grow: 0;
  flex-shrink: 0;
  display: block;
  width: 200px;
  border-radius: ${rhythm(1 / 4)};
`;

const Content = styled.div`
  padding-left: ${rhythm(1)};

  @media screen and (max-width: ${rhythm(24)}) {
    padding: 0;
    max-width: ${rhythm(16)};
  }
`;

const Title = styled.h3`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0 ${rhythm(1 / 2)};
  padding: 0;
  ${scale(1 / 6)}

  @media screen and (max-width: ${rhythm(24)}) {
    margin-top: ${rhythm(1 / 2)};
  }
`;

const Excerpt = styled.p`
  margin: 0;
  ${scale(-1 / 4)}
`;

interface Props {
  post: MarkdownRemark;
}

export const BlogInlinePost = (props: Props) => {
  const { frontmatter, excerpt, fields } = props.post;

  return (
    <Container to={fields.slug}>
      <PostImage
        fluid={frontmatter.featuredImage.childImageSharp.fluid as FluidObject}
        alt={frontmatter.title}
      />
      <Content>
        <Title>{frontmatter.title}</Title>
        <Excerpt>{frontmatter.description || excerpt}</Excerpt>
      </Content>
    </Container>
  );
};
