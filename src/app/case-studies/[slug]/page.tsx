import Image from "next/image";
// SINGLE BLOG POST

async function getCurrentPosts(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/case-studies/getCurrent/${slug}`
  );
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
        <div className="text-green-50">
          <h1 className="text-3xl  mb-6">{post.title}</h1>
          {post?.CaseStudyCPT?.externalLink && (
            <a href={post?.CaseStudyCPT?.externalLink}>
              <p className="text-xl mb-6">{post?.CaseStudyCPT?.externalLink}</p>
            </a>
          )}

          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            width={500}
            height={300}
            className="mb-3 rounded border border-green-50 "
          />

          {post?.content && (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}

          {post?.CaseStudyCPT?.primaryContent && (
            <div
              dangerouslySetInnerHTML={{
                __html: post.CaseStudyCPT.primaryContent,
              }}
            />
          )}

          {post?.CaseStudyCPT?.imageOne?.sourceUrl && (
            <Image
              src={post.CaseStudyCPT.imageOne.sourceUrl}
              alt={
                post.CaseStudyCPT?.imageOne?.altText ||
                "An image of the project"
              }
              width={500}
              height={300}
              className="mb-3 mt-6 rounded border border-green-50"
            />
          )}

          {post?.CaseStudyCPT?.secondaryContent && (
            <div
              dangerouslySetInnerHTML={{
                __html: post.CaseStudyCPT.secondaryContent,
              }}
            />
          )}

          {post?.CaseStudyCPT?.imageTwo?.sourceUrl && (
            <Image
              src={post.CaseStudyCPT.imageTwo.sourceUrl}
              alt={
                post.CaseStudyCPT?.imageTwo?.altText ||
                "An image of the project"
              }
              width={500}
              height={300}
              className="mb-3 mt-6 rounded border border-green-50"
            />
          )}

          {post?.CaseStudyCPT?.imageThree?.sourceUrl && (
            <Image
              src={post.CaseStudyCPT.imageThree.sourceUrl}
              alt={
                post.CaseStudyCPT?.imageThree?.altText ||
                "An image of the project"
              }
              width={500}
              height={300}
              className="mb-3 mt-6 rounded border border-green-50"
            />
          )}
        </div>
      )}
    </div>
  );
}
