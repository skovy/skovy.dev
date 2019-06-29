import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { ContentContainer } from "../content-container";
import { NavigationMenu } from "../navigation/menu";
import { colors } from "../../config/colors";
import { rhythm, scale } from "../../utils/typography";

const Container = styled.header``;

const Title = styled.h3`
  margin: 0;
  ${scale(1)}
`;

const TitleLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  transition: color 200ms ease;

  &:hover {
    color: ${colors.secondary};
  }
`;

const TopBar = styled.div`
  margin: ${rhythm(1)} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${rhythm(24)}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

interface Props {
  title: string;
}

export const Header = (props: Props) => {
  const { title } = props;

  return (
    <Container>
      <ContentContainer>
        <TopBar>
          <Title>
            <TitleLink to={`/`}>{title}</TitleLink>
          </Title>
          <NavigationMenu />
        </TopBar>
      </ContentContainer>
    </Container>
  );
};
