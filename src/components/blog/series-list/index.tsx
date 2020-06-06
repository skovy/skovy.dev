import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import { rhythm, scale } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import { ordinalize } from "../../../utils/strings";
import { Link } from "gatsby";

const Container = styled(Link)`
  margin: 0 0 ${rhythm(1 / 4)};
  color: ${colors.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  ${scale(-1 / 6)}

  &:hover, &:focus {
    text-decoration: underline;
  }

  .icon {
    margin-right: ${rhythm(1 / 3)};
  }
`;

interface Props {
  name?: string;
  seriesSlug?: string;
  order?: number;
}

export const BlogSeriesList: React.FC<Props> = ({
  name,
  order,
  seriesSlug
}) => (
  <Container to={seriesSlug}>
    <FontAwesomeIcon icon={faBookmark} className="icon" size="lg" />
    {ordinalize(order)} post in "{name}" series
  </Container>
);
