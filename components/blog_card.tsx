"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GetAllPosts } from "@/data";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function BlogCard({ post }: { post: Post }) {
  let getDate = dayjs(post.date).format("DD MMM, YYYY");
  let slug = post.title?.toLowerCase().replaceAll(" ", "-");
  return (
    <Card className="mx-auto max-w-xl rounded-sm bg-background p-6 shadow-md">
      <CardContent className="space-y-4">
        <div className="my-4 flex items-center justify-between">
          <span className="rounded-full text-sm"> {post.category} </span>
          <time className="text-sm text-muted-foreground" title={post.date}>
            {getDate}
          </time>
        </div>
        <Link href={`/read/${slug}`}>
          <CardTitle className="text-2xl leading-tight font-semibold tracking-tight">
            {post.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground">
          {post.description}
        </CardDescription>
        <div className="flex items-center gap-3 pt-4">
          <Avatar className="h-8 w-8 border outline">
            <AvatarImage src="/images/user.png" alt={post.author} />
            <AvatarFallback>{post.author} </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">
            {" "}
            {post.author}{" "}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
