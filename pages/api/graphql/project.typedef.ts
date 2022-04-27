import * as mongoose from 'mongoose';
import { Field, ObjectType } from 'type-graphql';
import { GraphQLObjectID, GraphQLURL } from 'graphql-scalars';

@ObjectType()
export class Project {
  @Field(() => GraphQLObjectID)
  readonly _id!: mongoose.Types.ObjectId;

  @Field(() => String)
  public title!: string;

  @Field(() => String)
  public description!: string;

  @Field(() => GraphQLURL)
  public link!: URL;

  @Field((type) => [String])
  public frontEnd?: mongoose.Types.Array<string>;

  @Field((type) => [String])
  public backEnd?: mongoose.Types.Array<string>;

  @Field((type) => [String])
  public dataBase?: mongoose.Types.Array<string>;

  @Field((type) => [String])
  public tools?: mongoose.Types.Array<string>;

  @Field((type) => [String])
  public sourceCode?: mongoose.Types.Array<string>;

  @Field((type) => [String])
  public screenShots?: mongoose.Types.Array<string>;
}

export class ProjectInput {
  @Field()
  
}