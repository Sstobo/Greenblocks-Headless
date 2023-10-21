import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { MenuEdge } from "./types";
import {fetchMenus} from "./fetch";



export default async function Footer({ target }: { target: string }) {
  const headerMenu = await fetchMenus();
  return (
    <div className="flex flex-row items-center justify-between gap-4 p-4">
      <div className="flex-basis-2 flex-row flex gap-4">
        <Image src="/next.svg" alt="logo" width={100} height={100} />
        <Image src="/wordpress-white.png" alt="logo" width={70} height={70} />
      </div>

      <div>
        <Link href="/" className="text-base flex justify-center text-green-50 py-3 px-7 border border-green-100 hover:text-green-950 hover:bg-green-50 transition-colors duration-200 ease-in-out">
          Home
        </Link>
      </div>

      {headerMenu.map((item: any) =>
        item.slug === target ? (
          <div key={item.id}>
            <div className="flex gap-3">
              {item.menuItems &&
                item.menuItems.nodes.map((subItem: any) => (
                  <div key={subItem.id}>
                    <Link href={`${subItem.uri}`} className="ext-base flex justify-center text-green-50 py-3 px-7 border border-green-100 hover:text-green-950 hover:bg-green-50 transition-colors duration-200 ease-in-out">
                      {subItem.label}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}