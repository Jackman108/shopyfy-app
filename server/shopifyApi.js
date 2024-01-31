// shopifyApi.js
import { GraphQLClient, gql } from 'graphql-request';
import 'dotenv/config';

const shopifyAccessToken = process.env.SHOPIFY_ACCESS_TOKEN;

const graphQLClient = new GraphQLClient('https://cpb-new-developer.myshopify.com/admin/api/2023-10/graphql.json', {
  headers: {
    'X-Shopify-Access-Token':shopifyAccessToken,
  },
});

export const fetchShopifyProducts = async () => {
  const products = [];

  let hasNextPage = true;
  let cursor = null;

  while (hasNextPage) {
    const query = gql`
      query($cursor: String) {
        products(first: 10, after: $cursor) {
          pageInfo {
            hasNextPage
          }
          edges {
            cursor
            node {
              bodyHtml
              images(first: 5) {
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `;

    const variables = { cursor };

    try {
      const data = await graphQLClient.request(query, variables);

      const pageProducts = data.products.edges.map((edge) => edge.node);
      products.push(...pageProducts);

      hasNextPage = data.products.pageInfo.hasNextPage;
      cursor = data.products.edges[data.products.edges.length - 1].cursor;
    } catch (error) {
      console.error('Error fetching products from Shopify:', error);
      throw error;
    }
  }
  return products;
};