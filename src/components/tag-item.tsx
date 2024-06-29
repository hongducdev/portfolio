import { Tag } from "@prisma/client";
import Link from "next/link";

interface TagItemProps {
  tag: Tag;
  isActive?: boolean;
}

const TagItem = ({ tag, isActive }: TagItemProps) => {
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
