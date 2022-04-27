import mongoose, { Schema, Model } from 'mongoose';

export interface IProject {
  readonly _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  link: URL;
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  sourceCode: URL[];
  screenShots: URL[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  techStack: [String],
  sourceCode: [String],
  screenShots: [String],
  createdAt: Date,
  updatedAt: Date,
});

export const ProjectModel: Model<IProject> =
  mongoose.models.project || mongoose.model('project', ProjectSchema);
