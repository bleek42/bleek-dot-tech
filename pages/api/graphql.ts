import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import type { NextApiHandler } from 'next';

import dbConnection from './config/db.config';
import type { ProjectResolvers } from './graphql/project.resolvers';

const apiHandler: NextApiHandler = async (req, res) => {
  let graphqlHandler: NextApiHandler | undefined;

  const schema = await buildSchema({ resolvers: [ProjectResolvers] });
  const server = new ApolloServer({
    schema,
    context: {},
    plugins: [
      ...(process.env.NODE_ENV === 'development'
        ? [ApolloServerPluginLandingPageGraphQLPlayground]
        : []),
    ],
  });

  if (!graphqlHandler) {
    await server.start();
    await dbConnection();
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
