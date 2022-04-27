import * as mongoose from 'mongoose';
import { Field, InputType, InputType, ObjectType } from 'type-graphql';
import { GraphQLObjectID, GraphQLURL } from 'graphql-scalars';

@ObjectType()
export class Project {
  @Field((_type) => GraphQLObjectID)
  readonly _id!: mongoose.Types.ObjectId;

  @Field((_type) => String)
  public title!: string;

  @Field((_type) => String)
  public description!: string;

  @Field((_type) => GraphQLURL)
  public link!: URL;

  @Field((_type) => [String])
  public frontEnd?: mongoose.Types.Array<string>;

  @Field((_type) => [String])
  public backEnd?: mongoose.Types.Array<string>;

  @Field((_type) => [String])
  public dataBase?: mongoose.Types.Array<string>;

  @Field((_type) => [String])
  public tools?: mongoose.Types.Array<string>;

  @Field((_type) => [URL])
  public sourceCode!: mongoose.Types.Array<URL>;

  @Field((_type) => [String])
  public screenShots?: mongoose.Types.Array<string>;
}

@InputType()
export class ProjectInput implements Partial<Project> {
  @Field()
  title!: string;

  @Field()
  public description!: string;

  @Field()
  public link!: URL;

  @Field((_returns) => [String])
  public frontEnd!: mongoose.Types.Array<string>;

  @Field((_returns) => [String])
  public backEnd?: mongoose.Types.Array<string>;

  @Field((_returns) => [String])
  public dataBase?: mongoose.Types.Array<string>;

  @Field((_returns) => [String])
  public tools?: mongoose.Types.Array<string>;

  @Field((_returns) => [URL])
  public sourceCode?: mongoose.Types.Array<URL>;

  @Field((_returns) => [String])
  public screenShots?: mongoose.Types.Array<string>;
}
