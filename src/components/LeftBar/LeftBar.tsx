
import React from "react";

import getAllPosts from "@/lib/getAllPosts";


export default async function LeftBar() {
  const allPosts = await getAllPosts();

  return (
    <div className="flex flex-row items-center justify-between p-3">
        {allPosts && allPosts?.map((post: any) => (
            <div key={post.slug} className="text-lg">
              
                <a href={`/posts/${post.slug}`}>{post.title}</a>
            </div>
        ))}

        {/* {allPagesList && allPagesList?.map((page: allPages) => (
            <div key={page.uri} className="text-lg">
                <Link href={`${page.uri}`}>
                    <a>{page.title}</a>
                </Link>
            </div>
        ))} */}
    </div>
  );
}
