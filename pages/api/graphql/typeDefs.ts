import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  scalar Date
  scalar ObjectID
  scalar URL

  type Project {
    _id: ObjectID!
    title: String!
    description: String!
    link: URL!
    frontend: [String!]!
    backend: [String!]!
    database: [String!]!
    tools: [String!]!
    sourceCode: [URL]!
    screenShots: [URL]!
    createdAt: Date!
    updatedAt: Date
  }

  type Query {
    projects: [Project]!
    project(_id: ObjectID!): Project!
  }

  input CreateProjectItem {
    _id: ObjectID
    title: String!
    description: String!
    link: URL!
    frontend: [String!]!
    backend: [String]!
    database: [String]!
    tools: [String!]!
    sourceCode: [URL]!
    screenShots: [URL]!
    createdAt: Date!
  }

  input UpdateProjectItem {
    title: String
    description: String!
    link: URL
    frontend: [String]!
    backend: [String]!
    database: [String]!
    tools: [String]!
    sourceCode: [URL]!
    screenShots: [URL]!
    updatedAt: Date!
  }

  input DeleteProjectItem {
    _id: ObjectID
  }

  type Mutation {
    createProject(input: CreateProjectItem!): Project
    updateProject(input: UpdateProjectItem!): Project
    deleteProject(_id: ObjectID!): Project
  }
`;
