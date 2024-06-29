import { Tag } from "@prisma/client";
import Link from "next/link";

const TagItem = ({ tag, isActive }: { tag: Tag; isActive: boolean }) => {
  return (
    <Link
      href={`/blogs/tags/${tag.tagName}`}
      className={`${
        isActive
          ? "bg-zinc-600 text-zinc-100 hover:bg-zinc-700"
          : "text-zinc-700 hover:text-zinc-600 bg-zinc-300 hover:bg-zinc-400"
      } px-2 rounded-full font-medium`}
    >
      # {tag.tagName}
    </Link>
  );
};

export default TagItem;
