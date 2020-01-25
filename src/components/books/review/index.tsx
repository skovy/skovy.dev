import React from "react";
import styled from "styled-components";

import { GoodreadsReview } from "../../../generated/graphql";
import { AnimatedCard } from "../../animated-card";

// ISBNs that don't have an image from Goodreads or Open Library
const MISSING_ISBNS = ["1119157854"];

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
  const { title, image_url, link, isbn } = review.book;

  // When possible, use the image provided by Goodreads. Sometimes, they don't
  // return an image even when they show one in product. When this is the case,
  // try to fallback to the open library API. However, Goodreads sometimes
  // doesn't even return an ISBN so fallback to a generic background.
  const calculatedImageUrl =
    image_url.indexOf(`/nophoto/`) !== -1 &&
    isbn &&
    MISSING_ISBNS.indexOf(isbn) === -1
      ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
      : image_url;

  return (
    <AnimatedCard scale={1.1}>
      <Container href={link} target="_blank" aria-label={title} rel="noopener">
        <Img src={calculatedImageUrl} alt={title} title={title} />
      </Container>
    </AnimatedCard>
  );
};
