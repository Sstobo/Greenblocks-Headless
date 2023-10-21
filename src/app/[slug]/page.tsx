import  getCurrentPage  from "@/lib/getCurrentPage"

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const pages = await getCurrentPage(params.slug);  
  return (
  
  <div>
    {pages?.title && <h1 className="text-3xl text-green-50">{pages.title}</h1>  }
    <div className="p-3 text-green-50">
          {pages?.content && <div dangerouslySetInnerHTML={{ __html: pages.content }} />}
    </div>
  </div>
  )
}

