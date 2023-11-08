import Image from "next/image";

// SINGLE BLOG POST

async function getCurrentPosts(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/getCurrent/${slug}`);
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getCurrentPosts(slug);

  return (
    <div>
      {post && (
        <div>
          <h1 className="text-3xl text-green-50 pb-6">{post.title}</h1>
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            className="mb-8"
          />
          <div className="p-3 text-green-50">
            {post?.content && (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
