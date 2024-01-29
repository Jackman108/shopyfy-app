import express from 'express';
import { createHandler } from 'graphql-http';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const app = express();

// Construct a GraphQL schema and define the necessary resolvers.
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            products: {
                type: GraphQLString,
                resolve: () => 'world',
            },
        },
    }),
});

// Create the GraphQL over HTTP request handler
const handler = createHandler({ schema });

// Create an Express app using the handler on `/graphql`
app.use('/graphql', (req, res) => {
    handler(req, res);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
