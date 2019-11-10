import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { rhythm } from "../../utils/typography";
import { colors } from "../../config/colors";

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(2)};
`;

const Explanation = styled.p`
  margin-bottom: 0;
`;

const Twitter = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  transition: color 200ms ease;

  &:hover {
    color: ${colors.secondary};
  }
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <Content>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`,
                marginBottom: 0
              }}
            />
            <Explanation>
              Ramblings on React, TypeScript, Design Systems, frontend things,
              and occasionally other stuff by{" "}
              <Twitter href={`https://twitter.com/${social.twitter}`}>
                {author}
              </Twitter>
              .
            </Explanation>
          </Content>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
