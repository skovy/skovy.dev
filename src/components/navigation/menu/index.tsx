import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { colors } from "../../../config/colors";
import { rhythm } from "../../../utils/typography";
import { fonts } from "../../../config/fonts";

const BREAKPOINT = rhythm(24);

const Container = styled.nav<{ open: boolean }>`
  display: block;

  @media screen and (max-width: ${BREAKPOINT}) {
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

const NavLink = styled(Link)`
  font-family: ${fonts.primary};
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

  @media screen and (max-width: ${BREAKPOINT}) {
    display: block;
    margin-top: ${rhythm(1 / 2)};

    & + & {
      margin-left: 0;
    }
  }
`;

export const NavigationMenu = ({ open }) => {
  return (
    <Container open={open}>
      <NavLink to="/blog">blog</NavLink>
      <NavLink to="/#projects-and-packages">projects</NavLink>
      <NavLink to="/#recent-podcasts">podcasts</NavLink>
      <NavLink to="/recently-read">reads</NavLink>
      <NavLink to="/#newsletter">newsletter</NavLink>
    </Container>
  );
};
