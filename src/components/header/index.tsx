import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { ContentContainer } from "../content-container";
import { colors } from "../../config/colors";
import { rhythm, scale } from "../../utils/typography";

const Container = styled.header``;

const Title = styled.h3`
  margin-top: ${rhythm(1)};
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

interface Props {
  title: string;
}

export const Header = (props: Props) => {
  const { title } = props;

  return (
    <Container>
      <ContentContainer>
        <Title>
          <TitleLink to={`/`}>{title}</TitleLink>
        </Title>
      </ContentContainer>
    </Container>
  );
};
