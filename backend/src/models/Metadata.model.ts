import mongoose, { Schema, model } from "mongoose";
import type { SocialMetadata } from "../types/metadata.js";

type MetaDataDoc = {
  url: string;
  metadata: Omit<SocialMetadata, "url">;
  createdAt: Date;
};

const metadataSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  metadata: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "30d",
  },
});

export const MetaDataModel = mongoose.model<MetaDataDoc>(
  "MetaData",
  metadataSchema
);
