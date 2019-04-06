import React from "react";
import { Link } from "gatsby";
import Image, { FluidObject } from "gatsby-image";
import styled from "styled-components";

import { rhythm, scale } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import { MarkdownRemark } from "../../../generated/graphql";
import { AnimatedCard } from "../../animated-card";

const Container = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  text-decoration: none;
  border-radius: ${rhythm(1 / 2)}};
  overflow: hidden;
  box-shadow: 0px ${rhythm(1 / 2)} ${rhythm(1)} -${rhythm(1 / 4)} rgba(0, 0, 0, 0.3);
  transition: box-shadow 300ms ease;
  background-color: ${colors.white};

  &:hover {
    box-shadow: 0px ${rhythm(1)} ${rhythm(2)} -${rhythm(1 / 2)} rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

const Title = styled.h3`
  margin: 0;
  padding: ${rhythm(1)};
  padding-bottom: 0;
  color: ${colors.text};
  text-align: left;
  ${scale(1 / 6)}
`;

const Description = styled.p`
  padding: ${rhythm(1)};
  padding-top: ${rhythm(1 / 2)};
  margin: 0;
  color: ${colors.text};
`;

interface Props {
  post: MarkdownRemark;
}

export const BlogPost = (props: Props) => {
  const { frontmatter, fields } = props.post;

  return (
    <AnimatedCard>
      <Container to={fields.slug}>
        <Image
          fluid={frontmatter.featuredImage.childImageSharp.fluid as FluidObject}
          alt={frontmatter.title}
        />
        <Title>{frontmatter.title}</Title>
        <Description>{frontmatter.description}</Description>
      </Container>
    </AnimatedCard>
  );
};
