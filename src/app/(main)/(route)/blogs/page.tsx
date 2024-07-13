// import { getPublishedPosts, getTags } from "@/apis";
// import PostItem from "@/components/post-item";
// import TagItem from "@/components/tag-item";
// import { Post, Tag } from "@prisma/client";
// import type { Metadata } from "next";

// export const revalidate = 60;

// export const metadata: Metadata = {
//   title: "Blogs",
//   description: "I write about web development, programming, and tech.",
// };

// const fetchPosts = async () => {
//   try {
//     const response = await getPublishedPosts();
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const fetchTags = async () => {
//   try {
//     const response = await getTags();
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const BlogsPage = async () => {
//   const posts = await fetchPosts();
//   const tags = await fetchTags();

//   return (
//     <div>
//       <div className="flex items-center gap-5">
//         {tags.map((tag: Tag) => (
//           <TagItem key={tag.id} tag={tag} />
//         ))}
//       </div>
//       <div className="flex flex-col gap-5 mt-8">
//         {posts.map((post: Post) => (
//           <PostItem key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;
import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page