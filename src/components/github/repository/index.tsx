import React from "react";
import styled from "styled-components";
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { rhythm } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import { AnimatedCard } from "../../animated-card";

const gradients = [
  [`FFF720`, `3CD500`],
  [`FCCF31`, `F55555`],
  [`FF96F9`, `C32BAC`],
  [`ABDCFF`, `0396FF`]
];

const gradient = (seed: number) => {
  const [leftHex, rightHex] = gradients[seed % gradients.length];
  return `linear-gradient(135deg, #${leftHex} 10%, #${rightHex} 100%) `;
};

const Container = styled.a<{ index: number }>`
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: ${rhythm(1)};
  border-radius: ${rhythm(1 / 2)};
  color: ${colors.text};
  box-shadow: 0px ${rhythm(1 / 2)} ${rhythm(1)} -${rhythm(1 / 4)} rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: box-shadow 300ms ease;
  background-color: ${colors.white};

  &:hover,
  &:focus {
    box-shadow: 0px ${rhythm(1)} ${rhythm(2)} -${rhythm(1 / 2)} rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background-image: ${({ index }) => gradient(index)};
  }
`;

const Name = styled.h3`
  font-weight: bold;
  font-size: ${rhythm(4 / 5)};
`;

const Description = styled.p`
  margin-bottom: ${rhythm(1 / 2)};
`;

const Stars = styled.span`
  margin-right: ${rhythm(1 / 2)};
  font-weight: bold;
`;

const Forks = styled.span`
  font-weight: bold;
`;

interface Repository {
  id: string;
  name: string;
  description: string;
  homepageUrl: string;
  forkCount: number;
  stargazers: {
    totalCount: number;
  };
}

interface Props {
  repository: Repository;
  index: number;
}

export const GitHubRepository: React.FC<Props> = ({ repository, index }) => {
  return (
    <AnimatedCard>
      <Container
        index={index}
        href={repository.homepageUrl}
        target="_blank"
        rel="noopener"
      >
        <Name>{repository.name}</Name>
        <div>
          <Description>{repository.description}</Description>
          <Stars>
            <FontAwesomeIcon icon={faStar} /> {repository.stargazers.totalCount}
          </Stars>
          <Forks>
            <FontAwesomeIcon icon={faCodeBranch} /> {repository.forkCount}
          </Forks>
        </div>
      </Container>
    </AnimatedCard>
  );
};
