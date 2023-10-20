import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function getPosts() {
  const query = `
  {
    posts(first: 5) {
      nodes {
        title
        content
        uri
      }
    }
  }
    `;

  const res = await fetch(
    `${process.env.GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await res.json();

  return data.posts.nodes;
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post: any) => (
        <div key={post.uri} className="card">
          <Suspense fallback={<Loading />}>
            <Link href={`/post/${post.uri}`}>
              <h3>{post.title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.content.slice(0, 200) + "...",
                }}
              />
            </Link>
          </Suspense>
        </div>
      ))}
    </>
  );
}