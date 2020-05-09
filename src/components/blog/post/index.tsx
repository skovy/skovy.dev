import React from "react";
import { Link, graphql } from "gatsby";
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

const Content = styled.div`
  padding: ${rhythm(1)};
`;

const Title = styled.h3`
  margin: 0;
  color: ${colors.text};
  text-align: left;
  ${scale(1 / 6)}
`;

const Subtext = styled.p`
  margin: 0 0 ${rhythm(1 / 4)};
  padding: 0;
  color: ${colors.muted};
  ${scale(-1 / 4)}
`;

interface Props {
  post: MarkdownRemark;
  subtext?: React.ReactNode;
}

export const BlogPost = ({ post, subtext }: Props) => {
  const { frontmatter, fields } = post;

  return (
    <AnimatedCard>
      <Container to={fields.slug}>
        <Image
          fluid={frontmatter.featuredImage.childImageSharp.fluid as FluidObject}
        />
        <Content>
          {subtext && <Subtext>{subtext}</Subtext>}
          <Title>{frontmatter.title}</Title>
        </Content>
      </Container>
    </AnimatedCard>
  );
};

export const query = graphql`
  fragment BlogPostData on MarkdownRemark {
    excerpt
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      description
      tags
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
