import React from "react";
import { Link, PageRendererProps } from "gatsby";
import { createGlobalStyle } from "styled-components";

import { rhythm, scale } from "../../utils/typography";
import { colors } from "../../config/colors";
import { ContentContainer } from "../content-container";
import { Footer } from "../footer";

declare const __PATH_PREFIX__: string;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    padding: 0;
    margin: 0;
  }
`;

interface Props extends PageRendererProps {
  title: string;
}

class Layout extends React.Component<Props> {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <ContentContainer>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </ContentContainer>
      );
    } else {
      header = (
        <ContentContainer>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </ContentContainer>
      );
    }

    return (
      <>
        <GlobalStyle />
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
