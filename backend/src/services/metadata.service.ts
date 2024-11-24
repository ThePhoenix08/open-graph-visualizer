import axios from "axios";
import { MetaDataModel } from "../models/Metadata.model.js";
import type { SocialMetadata } from "../types/metadata.js";
import * as cheerio from "cheerio";
import validateURL from "../utils/validateURLs.js";

class MetadataService {
  async extractMetaData(url: string): Promise<SocialMetadata> {
    try {
      if (!validateURL(url)) throw new Error("Invalid URL");
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);

      const metadata: SocialMetadata = {
        url,
        title:
          $(ogPropertyMetaSelector("title")).attr("content") ||
          $("title").text() ||
          "No Title",
        description:
          $(ogPropertyMetaSelector("description")).attr("content") ||
          $(ogNameMetaSelector("descripton")).attr("content") ||
          "No Description",
        image:
          $(ogPropertyMetaSelector("image")).attr("content") ||
          this.findFirstValidImage(html, url),
        type:
          ($(ogPropertyMetaSelector("type")).attr("content") as any) ||
          "website",
        siteName: $(ogPropertyMetaSelector("site_name")).attr("content") || "",

        twitter: {
          card:
            ($(twitterNameMetaSelector("card")).attr("content") as any) ||
            "summary",
          site: $(twitterNameMetaSelector("site")).attr("content") || "",
          creator: $(twitterNameMetaSelector("creator")).attr("content") || "",
        },
      };

      await this.saveMetadata(url, metadata);
      return metadata;
    } catch (error) {
      console.error("Error while extracting metadata", error);
      throw new Error("Error while extracting metadata");
    }
  }

  private findFirstValidImage(html: string, baseUrl: string): string {
    const $ = cheerio.load(html);
    const images = $("img");

    for (let i = 0; i < images.length; i++) {
      let src = $(images[i]).attr("src");
      if (src) {
        return this.toAbsoluteUrl(src, baseUrl);
      }
    }
    return "";
  }

  private toAbsoluteUrl(url: string, baseUrl: string): string {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    if (url.startsWith("/")) {
      const parsedBase = new URL(baseUrl);
      return `${parsedBase.origin}${url}`;
    }
    const parsedBase = new URL(baseUrl);
    return `${parsedBase.origin}/${url}`;
  }

  async saveMetadata(url: string, metadata: SocialMetadata): Promise<void> {
    try {
      await MetaDataModel.findOneAndUpdate(
        { url },
        { metadata, createdAt: new Date() },
        { upsert: true, new: true }
      );
    } catch (error) {
      console.error("Error while saving metadata", error);
    }
  }

  async getMetadataByUrl(url: string): Promise<SocialMetadata | null> {
    const doc = await MetaDataModel.findOne({ url });
    if (!doc) return null;
    return {
      url: doc.url,
      ...doc.metadata,
    };
  }
}

export default new MetadataService();
// export an instance of the MetadataService class

const ogPropertyMetaSelector = (prop: string): string =>
  `meta[property="og:${prop}"]`;
const ogNameMetaSelector = (prop: string): string => `meta[name="og:${prop}"]`;
const twitterNameMetaSelector = (prop: string): string =>
  `meta[name="twitter:${prop}"]`;
