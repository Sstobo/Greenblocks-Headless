import React from "react";
import Link from "next/link";
import { get } from "http";


async function getAllPosts() {
  const res = await fetch('http://localhost:3000/api/posts/getAll', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
};

async function getAllCaseStudies() {
  const res = await fetch('http://localhost:3000/api/case-studies/getAll', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
};


export default async function LeftBar() {
  const allCases = await getAllCaseStudies();
  const allPosts = await getAllPosts();

  return (
    <div className="flex flex-col p-3">
   
      <h2 className="text-lg text-green-50 ">Recent Posts:</h2>
      {allPosts &&
        allPosts?.map((post: any) => (
          <div key={post.slug} className="pt-4">
            <Link
              href={`/posts/${post.slug}`}
              className="group text-xs text-green-50 transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-50 to-green-50 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out ">
                {post.title}
              </span>
            </Link>
            <div className="text-xs text-green-50 opacity-70 pt-2">
              Written on: {post.date}
            </div>
          </div>
        ))}


<h2 className="text-lg mt-7 text-green-50 ">Recent Case Studies:</h2>
      {allCases &&
        allCases?.map((post: any) => (
          <div key={post.slug} className="pt-4">
            <Link
              href={`/case-studies/${post.slug}`}
              className="group text-xs text-green-50 transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-50 to-green-50 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out ">
                {post.title}
              </span>
            </Link>
            <div className="text-xs text-green-50 opacity-70 pt-2">
              Written on: {post.date}
            </div>
          </div>
        ))}


    </div>
  );
}
