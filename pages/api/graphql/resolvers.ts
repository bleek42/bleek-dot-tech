import { ApolloError } from 'apollo-server-micro';
import { IResolvers } from '@graphql-tools/utils';
import { DateResolver, ObjectIDResolver, URLResolver } from 'graphql-scalars';

export const resolvers: IResolvers = {
  ObjectID: ObjectIDResolver,
  Date: DateResolver,
  URL: URLResolver,

  Query: {
    async projects(_parent, _args, _ctx): Promise<IProject[]> {
      const projects = Project.find({});
      return await projects;
    },
  },

  Mutation: {
    async createProject(
      _parent: any,
      {
        title,
        description,
        link,
        frontend,
        backend,
        database,
        tools,
        sourceCode,
        screenShots,
      }: ProjectModel,
      ctx: Connection
    ): Promise<IProject> {
      const project = new Project();
      try {
        await project.create({
          _id: new Types.ObjectId(),
          title,
          description,
          link,
          frontend,
          backend,
          database,
          tools,
          sourceCode,
          screenShots,
        });
        return project;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
