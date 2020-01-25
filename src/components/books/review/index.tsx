import React from "react";
import styled from "styled-components";

import { GoodreadsReview } from "../../../generated/graphql";
import { AnimatedCard } from "../../animated-card";

const Container = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 98px; // The max image size the Goodreads API returns :(
  max-height: 80px;
  object-fit: contain;
  margin: 0 auto;
`;

interface Props {
  review: GoodreadsReview;
}

export const Review: React.FC<Props> = ({ review }) => {
  const {
    book: { title, image_url, link }
  } = review;

  return (
    <AnimatedCard scale={1.2}>
      <Container href={link} target="_blank" aria-label={title}>
        <Img src={image_url} alt={title} title={title} />
      </Container>
    </AnimatedCard>
  );
};
