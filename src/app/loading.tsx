import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading...",
  description: "Please wait while we load the page.",
};

const Loading = () => {
  return (
    <div className="h-[calc(100vh-260px)] w-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zinc-900"></div>
    </div>
  );
};

export default Loading;
