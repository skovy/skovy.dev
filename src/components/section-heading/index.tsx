import styled from "styled-components";

import { colors } from "../../config/colors";
import { rhythm, scale } from "../../utils/typography";

export const SectionHeading = styled.h2`
  color: ${colors.text};
  margin-bottom: ${rhythm(1)};
  ${scale(1)};
`;