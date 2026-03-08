import type { MetadataRoute } from "next";

const BASE_URL = "https://www.theeliteaccess.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/success", "/tools/*/passwords/success"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
