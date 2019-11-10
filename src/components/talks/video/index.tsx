import React from "react";
import styled from "styled-components";

import { rhythm, scale } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import { AnimatedCard } from "../../animated-card";
import { SiteSiteMetadataTalks } from "../../../generated/graphql";

const Container = styled.a`
  display: flex;
  align-items: center;
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

  @media screen and (max-width: ${rhythm(24)}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  padding: ${rhythm(1)};
`;

const Description = styled.p`
  margin: 0;
  color: ${colors.muted};
`;

const Title = styled.h3`
  margin: 0 0 ${rhythm(1 / 2)};
  color: ${colors.text};
  text-align: left;
  ${scale(1 / 6)}
`;

const Image = styled.img`
  margin: 0;
  max-width: 50%;

  @media screen and (max-width: ${rhythm(24)}) {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;

interface Props {
  talk: SiteSiteMetadataTalks;
}

export class TalksVideo extends React.Component<Props> {
  render() {
    const { id, title, description } = this.props.talk;

    return (
      <AnimatedCard>
        <Container href={`https://youtu.be/${id}`} target="_blank">
          <Image
            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
            alt={`YouTube Screenshot for ${title}`}
          />
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Content>
        </Container>
      </AnimatedCard>
    );
  }
}
