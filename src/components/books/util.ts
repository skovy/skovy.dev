import {
  Query,
  GoodreadsShelf,
  GoodreadsReview
} from "../../generated/graphql";

export const getReviewsByShelf = (query: Query, shelfName: string) => {
  const edge = query.allGoodreadsShelf.edges.find(
    shelf => shelf.node.name === shelfName
  );

  // Handle any unexpected data.
  if (!edge) {
    return null;
  }

  // Handle more unexpected data.
  const readShelf = edge.node;
  if (!readShelf || !readShelf.reviews || !readShelf.reviews.length) {
    return null;
  }

  return readShelf;
};

export const sortReviewsByReadAtDesc = (shelf: GoodreadsShelf) =>
  shelf.reviews.sort((a, b) => {
    // For some reason, `read_at` is sometimes "" in the Goodreads API so
    // default to 0 for those (will get sorted to the end).
    const readAtOne = Date.parse(a.read_at) || 0;
    const readAtTwo = Date.parse(b.read_at) || 0;

    if (readAtOne < readAtTwo) {
      return 1;
    } else if (readAtOne > readAtTwo) {
      return -1;
    } else {
      return 0;
    }
  });

export const filterOutReviewsWithNoBookPhoto = (reviews: GoodreadsReview[]) =>
  reviews.filter(review => {
    // For some reason, some books don't have photos (even though they
    // do in the UI).
    return review.book.image_url.indexOf("/nophoto/") === -1;
  });
