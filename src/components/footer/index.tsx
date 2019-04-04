import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { ContentContainer } from "../content-container";
import { rhythm } from "../../utils/typography";
import { colors } from "../../config/colors";

const Container = styled.footer`
  padding: ${rhythm(3)};
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${colors.primary};

  & + & {
    margin-left: ${rhythm(1 / 2)};
  }
`;

export const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={data => (
      <Container>
        <ContentContainer>
          <SocialLink
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </SocialLink>
          <SocialLink
            href={`https://twitter.com/${
              data.site.siteMetadata.social.twitter
            }`}
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </SocialLink>
        </ContentContainer>
      </Container>
    )}
  />
);

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
        }
      }
    }
  }
`;
