
import React from "react";
import getAllPages from "@/lib/getAllPages";
import Link from "next/link";
import { allPages } from '@/types/navigation';

export default async function LeftBar() {
   const allPagesList: allPages = await getAllPages();
   console.log("allPagesList");
    console.log(allPagesList);
  return (
    <div className="flex flex-row items-center justify-between p-3">
        
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
