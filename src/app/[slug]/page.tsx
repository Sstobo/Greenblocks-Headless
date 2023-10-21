import  fetchPageData  from "./fetch"
import { PageProps } from "./types";


export default async function Page({ params }: PageProps) {
  const page = await fetchPageData(params.slug);  
  return (
  
  <div className="page-entry">
    {page?.title && <h1 className="text-3xl text-green-50">{page.title}</h1>  }
    <div className="p-6 text-green-50">
          {page?.content && <div dangerouslySetInnerHTML={{ __html: page.content }} />}
    </div>
  </div>
  )
}

