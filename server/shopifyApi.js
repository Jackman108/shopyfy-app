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
  const query = gql`
    query {
      products(first: 10) {
        edges {
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

  try {
    const data = await graphQLClient.request(query);
    return data.products.edges.map(edge => edge.node);
  } catch (error) {
    console.error('Error fetching products from Shopify:', error);
    throw error;
  }
};