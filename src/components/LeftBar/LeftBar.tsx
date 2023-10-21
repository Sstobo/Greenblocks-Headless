import React from "react";

import getAllPosts from "@/lib/getAllPosts";

export default async function LeftBar() {
  const allPosts = await getAllPosts();

  return (
    <div className="flex flex-col p-3">
      <h2 className="text-lg text-green-50 ">Recent Posts:</h2>
      {allPosts &&
        allPosts?.map((post: any) => (
          <div key={post.slug} className="text-lg">
            <a
              href={`/posts/${post.slug}`}
              className="group text-xs text-green-50 transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-50 to-green-50 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                {post.title}
              </span>
            </a>
          </div>
        ))}
    </div>
  );
}
