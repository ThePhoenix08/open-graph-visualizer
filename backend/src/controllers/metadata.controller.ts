import type { NextFunction, Request, Response } from "express";
import MetadataService from "../services/metadata.service.js";

class MetadataController {
  async extractMetaData(
    req: Request & {
      body: {
        url: string;
      };
    },
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { url } = req.body;
      if (!url)
        return res.status(400).json({
          error: "URL is required",
        });

      const metadata = await MetadataService.extractMetaData(url);
      res.status(200).json(metadata);
    } catch (error: any) {
      error.message = "Failed to extract metadata";
      next(error);
    }
  }
  async getMetaData(
    req: Request & {
      query: {
        url?: string;
      };
    },
    res: Response,
    next: NextFunction
  ) {
    try {
      const { url } = req.query;
      if (!url || typeof url !== "string") {
        return res.status(400).json({ message: "No or invalid URL provided" });
      }

      const metadata = await MetadataService.getMetadataByUrl(url);
      if (!metadata)
        return res.status(404).json({ error: "No metadata found for the URL" });
      res.status(200).json(metadata);
    } catch (error: any) {
      error.message = "Failed to get metadata";
      next(error);
    }
  }
}

export default new MetadataController();
