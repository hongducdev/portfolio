import { Loader } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading...",
  description: "Please wait while we load the page.",
};

const Loading = () => {
  return (
    <div className="h-[calc(100vh-260px)] w-full flex items-center justify-center">
      <Loader className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default Loading;
