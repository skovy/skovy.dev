import React from "react";
import styled from "styled-components";

import { rhythm, scale } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import {
  FeedRubberDucking,
  SiteSiteMetadataOtherPodcasts,
} from "../../../generated/graphql";

const Container = styled.a`
  display: block;
  width: 100%;
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
  color: ${colors.text};
  text-align: left;
  ${scale(1 / 6)}
`;

const Image = styled.img`
  margin: 0;
`;

interface Props {
  episode: FeedRubberDucking | SiteSiteMetadataOtherPodcasts;
}

export class PodcastsEpisode extends React.Component<Props> {
  render() {
    const { episode } = this.props;

    return (
      <Container href={episode.link} target="_blank">
        <Image src={episode.itunes.image} alt={episode.title} />
        <Title>{episode.title}</Title>
      </Container>
    );
  }
}
