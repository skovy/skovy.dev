import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { ContentContainer } from "../content-container";
import { NavigationMenu } from "../navigation/menu";
import { colors } from "../../config/colors";
import { rhythm, scale } from "../../utils/typography";

const BREAKPOINT = rhythm(24);

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

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Toggle = styled.button`
  display: none;
  border: 0;
  background: transparent;
  padding: ${rhythm(1 / 4)};
  cursor: pointer;
  color: ${colors.primary};

  @media screen and (max-width: ${BREAKPOINT}) {
    display: block;
  }
`;

interface Props {
  title: string;
}

export const Header = (props: Props) => {
  const { title } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <ContentContainer>
        <TopBar>
          <MenuBar>
            <Title>
              <TitleLink to={`/`}>{title}</TitleLink>
            </Title>
            <Toggle aria-label="toggle menu" onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </Toggle>
          </MenuBar>
          <NavigationMenu open={open} />
        </TopBar>
      </ContentContainer>
    </Container>
  );
};
