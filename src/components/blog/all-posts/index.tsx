import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { MarkdownRemarkEdge } from "../../../generated/graphql";
import { BlogInlinePost } from "../inline-post";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { rhythm } from "../../../utils/typography";
import { colors } from "../../../config/colors";

interface Props {
  posts: MarkdownRemarkEdge[];
}

const Divider = styled.hr`
  background: ${colors.lightGray};
  height: 2px;
  margin: ${rhythm(3)} 0 0;
`;

export class BlogAllPosts extends React.Component<Props> {
  render() {
    const { posts } = this.props;

    return (
      <ContentContainer>
        {posts.map(({ node: post }) => (
          <BlogInlinePost post={post} key={post.fields.slug} />
        ))}
        <Divider />
      </ContentContainer>
    );
  }
}
