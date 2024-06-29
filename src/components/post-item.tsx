import { Post } from "@prisma/client";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexand = Lexend({ subsets: ["latin"] });

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className={lexand.className}>
      <div className="flex items-center gap-2 text-xl">
        <span>{post.icon}</span>
        <Link
          href={`/blogs/${post.slug}`}
          className="font-semibold hover:underline line-clamp-1"
        >
          {post.title}
        </Link>
      </div>
      <p className="text-zinc-500">{post.shortDesc}</p>
    </div>
  );
};

export default PostItem;
