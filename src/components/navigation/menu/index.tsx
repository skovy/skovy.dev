import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { colors } from "../../../config/colors";
import { rhythm } from "../../../utils/typography";

const Container = styled.nav``;

const NavLink = styled(Link)`
  font-family: "Raleway";
  font-weight: 700;
  color: ${colors.primary};
  text-decoration: none;
  transition: color 200ms ease;

  & + & {
    margin-left: ${rhythm(2 / 3)};
  }

  &:hover,
  &:focus {
    color: ${colors.secondary};
  }

  @media screen and (max-width: ${rhythm(18)}) {
    display: block;
    margin-top: ${rhythm(1/2)};

    & + & {
      margin-left: 0;      
    }
  }
`;

export const NavigationMenu = () => {
  return (
    <Container>
      <NavLink to="/blog">blog</NavLink>
      <NavLink to="/#projects-and-packages">projects</NavLink>
      <NavLink to="/#recent-podcasts">podcasts</NavLink>
      <NavLink to="/#newsletter">newsletter</NavLink>
      <NavLink to="/#books">books</NavLink>
    </Container>
  );
};
