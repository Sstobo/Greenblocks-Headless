import React from "react";
import { Menu } from "@/types/navigation";
import getMenu from "@/lib/getMenu";
import Link from "next/link";
import Image from "next/image";

export default async function Header({ target }: { target: string }) {
  const headerMenu = await getMenu();
  console.log(headerMenu)
  return (
    <div className="flex flex-row items-center justify-between  gap-4 p-4">   

      <div className="flex-basis-2 flex-row flex gap-4">

        <Image 
          src="/next.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <Image 
          src="/wordpress-white.png"
          alt="logo"
          width={70}
          height={70}
        />


      </div>
    
        {headerMenu?.map(
          (item: Menu) =>
            item.slug === target && (
              <div key={item.id}>
                <div className="flex gap-3">
                {item.menuItems &&
                  item.menuItems?.nodes?.map((subItem: any) => (
                    <div key={subItem.id}>
                      {subItem.id && (
                          <Link className="text-base flex justify-center text-green-50 py-3 px-7 border border-green-100 hover:text-green-950 hover:bg-green-50 transition-colors duration-200 ease-in-out"  href={`${subItem.uri}`}>{subItem.label}</Link>
                      )}
                    </div>
                  ))}
                  </div>
              </div>
            )
        )}
  
    </div>
  );
}
