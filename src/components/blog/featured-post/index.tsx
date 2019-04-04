import React from "react";
import { Link } from "gatsby";
import Image, { FluidObject } from "gatsby-image";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { rhythm } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import { MarkdownRemark } from "../../../generated/graphql";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";

const calc = (x: number, y: number): [number, number, number] => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1,
];

const trans = ([x, y, s]: [number, number, number]) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Container = styled(Link)`
  display: block;
  width: 100%;
  padding: 0;
  text-decoration: none;
  margin-bottom: ${rhythm(2)};
  border-radius: ${rhythm(1 / 2)}};
  overflow: hidden;
  box-shadow: 0px ${rhythm(1 / 2)} ${rhythm(1)} -${rhythm(1 / 4)} rgba(0, 0, 0, 0.3);
  transition: box-shadow 1s ease;

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

export const BlogFeaturedPost = (props: Props) => {
  const { frontmatter, fields } = props.post;

  const [animateProps, set] = useSpring(() => ({
    xys: [0, 0, 1] as [number, number, number],
    config: { mass: 5, tension: 350, friction: 80 },
  }));

  return (
    <ContentContainer>
      <SectionHeading>Latest Post</SectionHeading>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: animateProps.xys.interpolate(trans) }}
      >
        <Container to={fields.slug}>
          <Image
            fluid={
              frontmatter.featuredImage.childImageSharp.fluid as FluidObject
            }
            alt={frontmatter.title}
          />
          <Title>{frontmatter.title}</Title>
          <Description>{frontmatter.description}</Description>
        </Container>
      </animated.div>
    </ContentContainer>
  );
};
