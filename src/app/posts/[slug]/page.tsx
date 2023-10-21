import Image from "next/image";
import fetchPostData  from "./fetch";

// SINGLE BLOG POST

 export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPostData(params.slug);
  return (
     <div>
       <h1 className="text-3xl text-green-50 pb-6">{post.title}</h1>
       <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.title}
          width={500}
          height={300}
          className="mb-8"
       />
       <div className="p-3 text-green-50">
         {post?.content && (
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
         )}
       </div>
     </div>
  );
}