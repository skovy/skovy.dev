import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import { rhythm, scale } from "../../../utils/typography";
import { colors } from "../../../config/colors";
import { ordinalize } from "../../../utils/strings";

const Container = styled.div`
  margin: 0 0 ${rhythm(1 / 4)};
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  ${scale(-1 / 6)}

  .icon {
    margin-right: ${rhythm(1 / 3)};
  }
`;

interface Props {
  name?: string;
  order?: number;
}

export const BlogSeriesList: React.FC<Props> = ({ name, order }) => (
  <Container>
    <FontAwesomeIcon icon={faBookmark} className="icon" size="lg" />
    {ordinalize(order)} post in "{name}" series
  </Container>
);
