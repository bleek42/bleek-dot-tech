import { Query, Arg, Resolver, Mutation } from 'type-graphql';

import type { ProjectModelType } from '../database/project.model';
import { ProjectModel } from '../database/project.model';
import { Project, ProjectInput } from './project.typedef';

@Resolver((_of) => Project)
export class ProjectResolvers {
  @Query((_returns) => [Project])
  async projects(): Promise<Project[]> {
    return await ProjectModel.find({});
  }

  @Mutation((_of) => Project)
  async createProject(@Arg('projectInput') input: ProjectInput): Promise<any> {
    const project = new ProjectModel(input);
    return await project.save();
  }
}
