
import React from "react";

import getAllPosts from "@/lib/getAllPosts";


export default async function LeftBar() {
  const allPosts = await getAllPosts();

  return (
    <div className="flex flex-col p-3">
        <h2 className="text-lg text-green-50 ">Recent Posts:</h2>
        {allPosts && allPosts?.map((post: any) => (
            <div key={post.slug} className="text-lg">
                <a className="text-xs text-green-50 underline"   href={`/posts/${post.slug}`}>{post.title}</a>
            </div>
        ))}
    </div>
  );
}
