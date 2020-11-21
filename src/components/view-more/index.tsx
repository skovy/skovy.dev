import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { rhythm } from "../../utils/typography";
import { colors } from "../../config/colors";
import { fonts } from "../../config/fonts";

const styles = css<{ color: string }>`
  ${fonts.primary}
  ${fonts.weights.bold}
  display: block;
  margin-top: ${rhythm(1)};
  color: ${props => colors[props.color || "text"]};
  text-decoration: none;

  .arrow {
    transition: transform 200ms ease;
  }

  &:hover .arrow {
    transform: translateX(8px);
  }
`;

const ViewMoreLink = styled(Link)`
  ${styles}
`;
const ViewMoreAnchor = styled.a`
  ${styles}
`;

interface Props {
  children: React.ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  color?: "white";
}

export const ViewMore: React.FC<Props> = ({
  children,
  to,
  href,
  target,
  rel,
  color
}) => {
  const content = (
    <>
      {children} <FontAwesomeIcon icon={faArrowRight} className="arrow" />
    </>
  );

  return to ? (
    <ViewMoreLink to={to} color={color}>
      {content}
    </ViewMoreLink>
  ) : (
    <ViewMoreAnchor href={href} target={target} rel={rel} color={color}>
      {content}
    </ViewMoreAnchor>
  );
};
