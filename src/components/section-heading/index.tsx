import styled from "styled-components";

import { colors } from "../../config/colors";
import { rhythm, scale } from "../../utils/typography";

interface Props {
  variant?: "light";
}

export const SectionHeading = styled.h2<Props>`
  color: ${props => (props.variant === "light" ? colors.white : colors.text)};
  margin-bottom: ${rhythm(1)};
  ${scale(1)};
`;
