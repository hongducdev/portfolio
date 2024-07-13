import { MetadataRoute } from "next";
// import { getPublishedPosts, getTags } from "@/apis";
// import { Post, Tag } from "@prisma/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const posts = await getPublishedPosts();
  // const tags = await getTags();

  // const postsEntries = posts.map((post: Post) => ({
  //   url: `${process.env.BASE_URL}/blogs/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: "weekly",
  //   priority: 0.8,
  // }));

  // const tagsEntries = tags.map((tag: Tag) => ({
  //   url: `${process.env.BASE_URL}/blogs/tags/${tag.tagName}`,
  //   lastModified: new Date(),
  //   changeFrequency: "weekly",
  //   priority: 0.5,
  // }));

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${process.env.BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ...postsEntries,
    // ...tagsEntries,
  ];
}
