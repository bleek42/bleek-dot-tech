import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import type { NextApiHandler } from 'next';

import clientPromise from './config/client.config';

const schema = async () => {
  return await buildSchema({
    resolvers: [],
  });
};

const server = new ApolloServer({
  schema,
  context: async () => {
    const db = await clientPromise;
    return { db };
  },
  plugins: [
    ...(process.env.NODE_ENV === 'development'
      ? [ApolloServerPluginLandingPageGraphQLPlayground]
      : []),
  ],
});

let graphqlHandler: NextApiHandler | undefined;

const apiHandler: NextApiHandler = async (req, res) => {
  if (!graphqlHandler) {
    await server.start();
    graphqlHandler = server.createHandler({ path: '/api/graphql' });
  }
  return graphqlHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiHandler;
