import { getPublishedPosts, getSingleBlogPost } from "@/apis";
import { Post } from "@prisma/client";
import { CalendarClock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Lexend } from "next/font/google";
import NavPageDetail from "@/components/nav-page-detail";
import Link from "next/link";
import MarkdownRender from "@/components/markdown-render";
import CommentInput from "@/components/comment/comment-input";

const lexand = Lexend({ subsets: ["latin"] });

export const revalidate = 60;

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  try {
    const posts: Post[] = await getPublishedPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  try {
    const postPage = await getSingleBlogPost(params.slug);
    return {
      title: postPage.title,
      description: postPage.shortDesc,
      openGraph: {
        title: postPage.title,
        description: postPage.shortDesc,
        type: "book",
        url: `${process.env.BASE_URL}/blogs/${postPage.slug}`,
        releaseDate: new Date(postPage.createdAt).toISOString(),
        tags: postPage.tagName ? [postPage.tagName] : [],
        images: [
          {
            url: postPage.thumbnail,
            alt: postPage.title,
          },
        ],
      },
      alternates: {
        canonical: `${process.env.BASE_URL}/blogs/${postPage.slug}`,
      },
      robots: "index, follow",
    };
  } catch (error) {
    return {
      title: "Post not found",
      description: "The post you are looking for does not exist.",
    };
  }
};

const PostDetailPage = async ({ params }: BlogPageProps) => {
  try {
    const postPage = await getSingleBlogPost(params.slug);

    return (
      <div className={lexand.className}>
        <div className="flex flex-col">
          <div className="relative h-[25vh] w-full">
            <Image
              src={postPage.thumbnail}
              alt={postPage.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="my-4">
            <NavPageDetail
              title={postPage.title}
              link={`${process.env.BASE_URL}/blog/${postPage.slug}`}
            />
          </div>

          <div className="w-full mx-auto">
            <h1 className="text-lg lg:text-3xl font-bold">{postPage.title}</h1>
            <p className="text-sm lg:text-base mt-2">{postPage.shortDesc}</p>
            <div className="flex items-center gap-2 text-base mt-2">
              <CalendarClock className="w-5 h-5" />
              <span>
                Last updated:{" "}
                {new Date(postPage.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="mt-4">
              <Link
                href={`/tags/${postPage.tagName}`}
                className="bg-zinc-600 text-zinc-100 px-2 rounded-full hover:bg-zinc-700"
              >
                # {postPage.tagName}
              </Link>
            </div>
          </div>
          <section className="max-w-2xl w-full mx-auto my-5">
            <article className="prose dark:prose-invert max-w-7xl w-full mx-auto text-black dark:text-white">
              <MarkdownRender mdString={postPage.content} />
            </article>
          </section>

          <div className="w-full mx-auto px-2 xl:px-0">
            <h3 className="text-xl font-semibold">Comments</h3>
            <div className="w-full h-[1px] bg-input"></div>
            <div className="mt-4">
              <CommentInput postId={postPage.id} slug={params.slug} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default PostDetailPage;
