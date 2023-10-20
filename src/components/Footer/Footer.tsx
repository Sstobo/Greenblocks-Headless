

import React from "react";
import { Menu, NavProps } from "@/types/navigation";
import getMenu from "@/lib/getMenu";
import Link from "next/link";

export default async function Footer ({ target }: { target: string }) {
  const footerMenu = await getMenu();
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row gap-4 p-4">
        {footerMenu?.map((item: Menu) => (
          item.slug === target && (
          <div key={item.id}>
            <div className="text-xl text-green-50">
            {item.name}
            </div>
      
            {item.menuItems && item.menuItems?.nodes?.map((subItem: any) => (
              <div className="text-base text-green-50" key={subItem.id}>
                {/* hyphenate title */}
                {subItem.label &&
                <Link href={subItem.label}>
                  {subItem.label}
                </Link>
                }
              </div>
            ))}
          </div>
          )
        ))}
      </div>
    </div>
  );
};