const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error("BASE_URL is not defined");
}

export const getPublishedPosts = async () => {
  const response = await fetch(`${baseURL}/api/posts`);
  return response.json();
};

export const getSingleBlogPost = async (slug: string) => {
  const response = await fetch(`${baseURL}/api/posts/${slug}`);
  return response.json();
};

export const getTags = async () => {
  const response = await fetch(`${baseURL}/api/tags`);
  return response.json();
};

export const getPostsByTag = async (tagName: string) => {
  const response = await fetch(`${baseURL}/api/tags/${tagName}`);
  const data = await response.json();
  return data?.posts;
};
