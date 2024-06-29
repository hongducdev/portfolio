import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Sorry, the page you are looking for does not exist.",
};

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-260px)] flex flex-col items-start justify-center text-zinc-600">
      <div className="border-l-4 border-zinc-300 px-10">
        <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
