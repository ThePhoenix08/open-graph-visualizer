export interface SocialMetadata {
  url: string;
  title: string;
  description: string;
  image: string;
  siteName?: string;
  type?: "website" | "article" | "profile";

  // Platform-specific metadata
  facebook?: {
    appId?: string;
    admins?: string[];
  };
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player";
    site?: string;
    creator?: string;
  };
}
