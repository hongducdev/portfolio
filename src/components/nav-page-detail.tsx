"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ellipsis, Link2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import WebShareWrapper from "./web-share-wrapper";

interface NavPageDetailProps {
  title: string;
  link: string;
}

const NavPageDetail = ({ title, link }: NavPageDetailProps) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    toast({
      title: "Sao chép thành công",
      description: "Đường dẫn đã được sao chép vào bộ nhớ tạm",
    });
  };

  const handleShare = (platform: string) => {
    let shareUrl = "";
    const encodedLink = encodeURIComponent(link);
    const encodedTitle = encodeURIComponent(title);

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedLink}&text=${encodedTitle}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedLink}&title=${encodedTitle}`;
        break;
      case "reddit":
        shareUrl = `https://www.reddit.com/submit?url=${encodedLink}&title=${encodedTitle}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={handleCopyLink}
            className="flex items-center space-x-10"
          >
            <span>
              Copy link
            </span>
            <Link2 className="w-4 h-4" />
          </DropdownMenuItem>
          <div className="hidden lg:flex flex-col">
            <DropdownMenuItem onClick={() => handleShare("twitter")}>
              Twitter
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("facebook")}>
              Facebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("linkedin")}>
              LinkedIn
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("reddit")}>
              Reddit
            </DropdownMenuItem>
          </div>
          <WebShareWrapper title={title} url={link} text="Share blog" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavPageDetail;
