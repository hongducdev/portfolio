import { Tag } from "@prisma/client";
import Link from "next/link";

const TagItem = ({ tag }: { tag: Tag }) => {
  return (
    <Link
      href={`/blogs/tags/${tag.tagName}`}
      className="bg-zinc-600 text-zinc-100 px-2 rounded-full hover:bg-zinc-700"
    >
      # {tag.tagName}
    </Link>
  );
};

export default TagItem;
