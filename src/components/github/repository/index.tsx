import React from "react";
import { Link, StaticQuery } from "gatsby";
import styled from "styled-components";
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { rhythm } from "../../../utils/typography";
import { colors } from "../../../config/colors";

const gradients = [
  [`6441A5`, `2a0845`],
  [`333333`, `dd1818`],
  [`fe8c00`, `c21500`],
  [`000000`, `0f9b0f`],
];

const gradient = (seed: number) => {
  const [leftHex, rightHex] = gradients[seed % gradients.length];
  return `linear-gradient(135deg, #${leftHex} 10%, #${rightHex} 100%) `;
};

const Container = styled.div<{ index: number }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: ${rhythm(1)};
  border-radius: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
  color: ${colors.white};
  background-image: ${({ index }) => gradient(index)};
`;

const Name = styled.h3`
  font-weight: bold;
  font-size: ${rhythm(4 / 5)};
`;

const RepositoryLink = styled.a`
  text-decoration: none;
  color: ${colors.white};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin-bottom: ${rhythm(1 / 2)};
`;

const Stars = styled.span`
  margin-right: ${rhythm(1 / 2)};
`;

const Forks = styled.span``;

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

export class GitHubRepository extends React.Component<Props> {
  render() {
    const { repository, index } = this.props;

    return (
      <Container index={index}>
        <Name>
          <RepositoryLink href={repository.homepageUrl} target="_blank">
            {repository.name}
          </RepositoryLink>
        </Name>
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
    );
  }
}
