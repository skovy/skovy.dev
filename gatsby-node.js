const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paramCase } = require(`change-case`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const seriesTemplate = path.resolve(`./src/templates/series.tsx`);

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              frontmatter {
                tags
              }
              fields {
                slug
                seriesSlug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    const series = new Set();

    posts.forEach((post, index) => {
      if (post.node.fields.seriesSlug) {
        series.add(post.node.fields.seriesSlug);
      }

      const mostRecentPost = index === 0;
      const oldedPost = index === posts.length - 1;

      let previous;
      let next;
      if (mostRecentPost) {
        // If it's the newest post there are no next posts so go with the previous two
        previous = posts[index + 1].node;
        next = posts[index + 2].node;
      } else if (oldedPost) {
        // If it's the oldest there is no previous so go with the next two
        previous = posts[index - 1].node;
        next = posts[index - 2].node;
      } else {
        // If it's somewhere in between, this post actually has a previous and next
        previous = posts[index + 1].node;
        next = posts[index - 1].node;
      }

      const { tags } = post.node.frontmatter;

      const relatedPostIds = posts
        .filter(p => {
          // The same post shouldn't be considered related to itself.
          if (p.node.id === post.node.id) return false;

          // Consider it a match if at least one tag is common.
          return tags.find(tag => p.node.frontmatter.tags.includes(tag));
        })
        .map(p => p.node.id);

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previousId: previous.id,
          nextId: next.id,
          relatedPostIds,
          mostRecentPost
        }
      });
    });

    series.forEach(singleSeries => {
      createPage({
        path: singleSeries,
        component: seriesTemplate,
        context: {
          slug: singleSeries
        }
      });
    });

    return null;
  });
};

const seriesSlug = ({ name }) => `/series/${paramCase(name.toLowerCase())}`;

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const { series } = node.frontmatter;

    createNodeField({
      name: `seriesSlug`,
      node,
      value: series && seriesSlug(series)
    });

    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
