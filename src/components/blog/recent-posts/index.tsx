import React from "react";
import styled from "styled-components";

import { MarkdownRemarkEdge } from "../../../generated/graphql";
import { BlogPost } from "../post";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { ViewMore } from "../../view-more";
import { rhythm } from "../../../utils/typography";

const Container = styled.div`
  background-image: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
  padding: ${rhythm(3)} 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${rhythm(1)};
  grid-row-gap: ${rhythm(1)};

  @media screen and (max-width: ${rhythm(24)}) {
    grid-template-columns: 1fr;
  }
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
          <ViewMore to="/blog">
            See all posts
          </ViewMore>
        </ContentContainer>
      </Container>
    );
  }
}
