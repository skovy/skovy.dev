import React from "react";
import styled from "styled-components";

import { rhythm, scale } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import {
  FeedRubberDucking,
  SiteSiteMetadataOtherPodcasts
} from "../../../generated/graphql";
import { AnimatedCard } from "../../animated-card";

const Container = styled.a`
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
  color: ${colors.text};
  text-align: left;
  ${scale(1 / 6)}
`;

const Image = styled.img`
  margin: 0;
`;

// Simplecast seems to have stopped sending (or setting) the image for each
// individual item.
const FALLBACK_IMAGE =
  "https://cdn.simplecast.com/images/47f7d3/47f7d3c6-b36d-49cf-b4e0-876d09a827e6/c5b394b9-eb7e-4483-a0f8-2a7e8a6b0b4a/1400x1400/1552160508artwork.jpg?aid=rss_feed";

interface Props {
  episode: FeedRubberDucking | SiteSiteMetadataOtherPodcasts;
}

export class PodcastsEpisode extends React.Component<Props> {
  render() {
    const { episode } = this.props;

    return (
      <AnimatedCard>
        <Container href={episode.link} target="_blank">
          <Image src={episode.itunes.image || FALLBACK_IMAGE} alt="podcast logo"/>
          <Title>{episode.title}</Title>
        </Container>
      </AnimatedCard>
    );
  }
}
