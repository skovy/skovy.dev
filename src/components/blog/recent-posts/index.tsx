import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MarkdownRemarkEdge } from "../../../generated/graphql";
import { BlogPost } from "../post";
import { ContentContainer } from "../../content-container";
import { SectionHeading } from "../../section-heading";
import { rhythm } from "../../../utils/typography";
import { colors } from "../../../config/colors";

const Container = styled.div`
  background-image: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
  box-shadow: inset 0px 16px 8px -10px rgba(0, 0, 0, 0.2),
    inset 0px -16px 8px -10px rgba(0, 0, 0, 0.2);
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

const AllPosts = styled(Link)`
  display: block;
  text-align: right;
  margin-top: ${rhythm(1)};
  color: ${colors.text};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
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
          <AllPosts to="/posts">
            See all posts <FontAwesomeIcon icon={faArrowRight} />
          </AllPosts>
        </ContentContainer>
      </Container>
    );
  }
}
