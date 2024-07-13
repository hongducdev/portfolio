"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import slugify from "slugify";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import UploadImage from "@/components/upload-image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IconPicker from "@/components/icon-picker";
import { Check, ChevronsUpDown, Smile } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Post, Tag } from "@prisma/client";

const formSchema = z.object({
  thumbnail: z.string().url({ message: "Thumbnail must be a valid URL." }),
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  slug: z.string().min(5, { message: "Slug must be at least 5 characters." }),
  icon: z.string().min(1, { message: "Icon must be at least 1 character." }),
  shortDesc: z
    .string()
    .min(10, { message: "Short description must be at least 10 characters." }),
  tag: z.string().nullable(),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters." }),
});

interface EditFormProps {
  params: {
    slug: string;
  };
}

const EditForm = ({ params }: EditFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [post, setPost] = useState<Post | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const getAllTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const data = await response.json();
        setTags(data || []);
      } catch (error) {
        console.error("Failed to fetch tags:", error);
      }
    };
    getAllTags();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.slug}`);
        const data = await response.json();
        const fetchedPost = data;
        setPost(fetchedPost);
        form.reset({
          thumbnail: fetchedPost.thumbnail,
          title: fetchedPost.title,
          slug: fetchedPost.slug,
          icon: fetchedPost.icon,
          shortDesc: fetchedPost.shortDesc,
          tag: fetchedPost.tagName,
          content: fetchedPost.content,
        });
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };
    getPost();
  }, [params, form]);

  const generateSlug = (title: string) => {
    return slugify(title, {
      replacement: "-",
      locale: "vi",
      lower: true,
      strict: false,
      trim: true,
    });
  };

  const title = useWatch({
    control: form.control,
    name: "title",
  });

  useEffect(() => {
    if (title) {
      form.setValue("slug", generateSlug(title));
    }
  }, [title, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/post-admin/${post?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thumbnail: values.thumbnail,
          title: values.title,
          slug: values.slug,
          icon: values.icon,
          tag: values.tag,
          content: values.content,
          shortDesc: values.shortDesc,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to update post.");
      }

      setPost(data);

      toast({
        title: "Success!",
        description: "Your post has been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while updating the post.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-2 py-10 flex gap-2 max-w-7xl mx-auto">
      <div className="w-[70%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <IconPicker value={field.value} onChange={field.onChange}>
                        <div className="flex items-center gap-2 cursor-pointer">
                          {field.value ? (
                            <span className="text-2xl">{field.value}</span>
                          ) : (
                            <Smile className="w-6 h-6" />
                          )}
                        </div>
                      </IconPicker>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="Slug" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tag"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Tag</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? tags.find((tag) => tag.tagName === field.value)
                                ?.tagName
                            : "Select tag"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command className="w-full">
                        <CommandInput placeholder="Search tag..." />
                        <CommandList>
                          <CommandEmpty>No tag found.</CommandEmpty>
                          <CommandGroup>
                            {tags.map((tag) => (
                              <CommandItem
                                value={tag.tagName}
                                key={tag.id}
                                onSelect={() => {
                                  form.setValue("tag", tag.tagName);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    tag.tagName === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {tag.tagName}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shortDesc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short description</FormLabel>
                  <FormControl>
                    <Input placeholder="Short description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <MDEditor
                      height={200}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-[30%]">
        <UploadImage />
      </div>
    </div>
  );
};

export default EditForm;
