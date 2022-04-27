import { Query, Arg, Resolver, Mutation } from 'type-graphql';
import { Model } from 'mongoose';
import { ProjectModel } from '../database/project.model';
import { Project } from './project.typedef';

@Resolver()
export class ProjectsResolver {
  @Query(() => [Project])
  async projects(): Promise<Project[]> {
    return await ProjectModel.find({});
  }

  @Mutation(() => Project)
  async createProject(@Arg('projectInput') input): Promise<IProject> {
    const project = new ProjectModel({});
  }
}
