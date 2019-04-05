import styled from "styled-components";

import { rhythm } from "../../utils/typography";

export const ContentContainer = styled.div`
  max-width: ${rhythm(24)};
  margin: 0 auto;

  @media screen and (max-width: ${rhythm(24)}) {
    padding: 0 ${rhythm(1)};
  }
`;
