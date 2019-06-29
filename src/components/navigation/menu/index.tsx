import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { colors } from "../../../config/colors";
import { rhythm, scale } from "../../../utils/typography";

const Container = styled.nav``;

const NavLink = styled(Link)`
  font-family: 'Raleway';
  font-weight: 700;
  color: ${colors.primary};
  text-decoration: none;
  transition: color 200ms ease;

  & + & {
    margin-left: ${rhythm(1)};
  }

  &:hover,
  &:focus {
    color: ${colors.secondary};
  }
`;

export const NavigationMenu = () => {
  return (
    <Container>
      <NavLink to="/blog">blog</NavLink>
      <NavLink to="/#projects-and-packages">projects</NavLink>
      <NavLink to="/#recent-podcasts">podcasts</NavLink>
    </Container>
  );
};
