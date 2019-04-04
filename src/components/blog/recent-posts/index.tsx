import React from "react";
import styled from "styled-components";

import { MarkdownRemarkEdge } from "../../../generated/graphql";
import { BlogPost } from "../post";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { rhythm } from "../../../utils/typography";

const Container = styled.div`
  background-image: linear-gradient(135deg, #e2b0ff 10%, #9f44d3 100%);
  padding: ${rhythm(3)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
`;

interface Props {
  posts: MarkdownRemarkEdge[];
}

export class BlogRecentPosts extends React.Component<Props> {
  render() {
    const { posts } = this.props;

    return (
      <Container>
        <ContentContainer>
          <SectionHeading>Recent Posts</SectionHeading>
          <Grid>
            {posts.map(({ node: post }) => (
              <BlogPost post={post} key={post.fields.slug} />
            ))}
          </Grid>
        </ContentContainer>
      </Container>
    );
  }
}
