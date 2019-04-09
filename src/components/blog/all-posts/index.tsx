import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MarkdownRemarkEdge } from "../../../generated/graphql";
import { BlogInlinePost } from "../inline-post";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { rhythm } from "../../../utils/typography";
import { colors } from "../../../config/colors";

interface Props {
  posts: MarkdownRemarkEdge[];
}

export class BlogAllPosts extends React.Component<Props> {
  render() {
    const { posts } = this.props;

    return (
        <ContentContainer>
          {posts.map(({ node: post }) => (
            <BlogInlinePost post={post} key={post.fields.slug} />
          ))}
        </ContentContainer>
    );
  }
}
