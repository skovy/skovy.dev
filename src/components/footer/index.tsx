import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faGoodreadsG,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import { ContentContainer } from "../content-container";
import { Newsletter } from "../newsletter";
import { rhythm } from "../../utils/typography";
import { colors } from "../../config/colors";

const Container = styled.footer`
  padding: ${rhythm(3)} 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${rhythm(24)}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  @media screen and (max-width: ${rhythm(24)}) {
    margin-top: ${rhythm(1)};
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${colors.primary};
  transition: color 200ms ease;

  & + & {
    margin-left: ${rhythm(1 / 2)};
  }

  &:hover,
  &:focus {
    color: ${colors.secondary};
  }
`;

export const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={data => (
      <Container>
        <ContentContainer>
          <Content>
            <Newsletter />
            <SocialLinks>
              <SocialLink
                href={`https://github.com/${
                  data.site.siteMetadata.social.github
                }`}
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </SocialLink>
              <SocialLink
                href={`https://twitter.com/${
                  data.site.siteMetadata.social.twitter
                }`}
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </SocialLink>
              <SocialLink
                href={`https://www.goodreads.com/user/show/${
                  data.site.siteMetadata.social.goodreads
                }`}
                aria-label="Goodreads"
              >
                <FontAwesomeIcon icon={faGoodreadsG} size="lg" />
              </SocialLink>
              <SocialLink
                href={`https://www.linkedin.com/in/${
                  data.site.siteMetadata.social.linkedin
                }`}
                aria-label="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </SocialLink>
            </SocialLinks>
          </Content>
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
          goodreads
          linkedin
        }
      }
    }
  }
`;
