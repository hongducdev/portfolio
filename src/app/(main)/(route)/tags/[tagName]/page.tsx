import { getPostsByTag, getTags } from "@/apis";
import { Post, Tag } from "@prisma/client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TagItem from "@/components/tag-item";
import PostItem from "@/components/post-item";

interface TagPageProps {
  params: {
    tagName: string;
  };
}

export const generateStaticParams = async () => {
  try {
    const tags: Tag[] = await getTags();
    return tags.map((tag) => ({
      tagName: tag.tagName,
    }));
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};

export const generateMetadata = async ({
  params,
}: TagPageProps): Promise<Metadata> => {
  const tags: Tag[] = await getTags();
  const tag = tags.find((tag) => tag.tagName === params.tagName);

  if (!tag) {
    return {
      title: "Tag not found",
      description: "The tag you are looking for does not exist.",
      alternates: {
        canonical: `${process.env.BASE_URL}/tags/${params.tagName}`,
      },
      robots: "index, follow",
    };
  }

  return {
    title: `Posts tagged #${params.tagName}`,
    description: `Posts tagged #${params.tagName}`,
  };
};

const fetchTags = async () => {
  try {
    const response = await getTags();
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const TagPage = async ({ params }: TagPageProps) => {
  try {
    const tags = await fetchTags();
    if (!tags || tags.length === 0) {
      return <div>No tags found.</div>;
    }

    const posts: Post[] = await getPostsByTag(params.tagName);

    return (
      <div>
        <div className="flex items-center gap-5">
          {tags.map((tag: Tag) => (
            <TagItem
              key={tag.id}
              tag={tag}
              isActive={tag.tagName === params.tagName}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 mt-8">
          {posts.length > 0 ? (
            posts.map((post: Post) => <PostItem key={post.id} post={post} />)
          ) : (
            <div>No posts found for this tag.</div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post page:", error);
    return (
      <div>
        An error occurred while fetching the page. Please try again later.
      </div>
    );
  }
};

export default TagPage;
