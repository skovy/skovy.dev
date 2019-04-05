import React from "react";
import { PageRendererProps } from "gatsby";
import { createGlobalStyle } from "styled-components";

import { colors } from "../../config/colors";
import { Footer } from "../footer";
import { Header } from "../header";

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
    const { title, children } = this.props;

    return (
      <>
        <GlobalStyle />
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
