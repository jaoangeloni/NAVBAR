"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { NAV_BAR_ITEMS } from "@/config/header/navbar.items";
import { ListItem } from "./dropdownItems";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavItems() {
  const path = usePathname();
  const pathArray = path?.split("/");
  const currentPath = `/${pathArray[pathArray.length - 1]}`;

  const isActive = (itemPath: string, isDropdown: boolean) => {
    return cn(
      "focus:bg-transparent focus:text-primary-500 hover:bg-transparent hover:text-primary-500",
      isDropdown
        ? path.includes(itemPath)
          ? "bg-transparent text-primary-500"
          : ""
        : currentPath === itemPath
        ? "bg-transparent text-primary-500"
        : ""
    );
  };

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAV_BAR_ITEMS?.map((item) =>
          item?.items !== undefined ? (
            <NavigationMenuItem key={item?.tag}>
              <NavigationMenuTrigger
                className={`
                data-[active]:bg-bg-transparent data-[state=open]:bg-transparent
                data-[active]:text-primary-500 data-[state=open]:text-primary-500
                ${isActive(item?.path, true)}
              `}
              >
                {item?.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-2 md:w-[250px] md:grid-cols-1 lg:w-[300px] bg-white">
                  {item?.items?.map((items) => (
                    <ListItem
                      key={items.tag}
                      title={items?.label}
                      href={item?.path + items?.path}
                      className={`hover:text-primary-500 focus:text-primary-500 
                        ${
                          currentPath === items?.path ? "text-primary-500" : ""
                        }`}
                    >
                      {items?.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item?.tag}>
              <Link href={item?.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`
                    ${navigationMenuTriggerStyle()}
                    ${isActive(item?.path, false)}
                  `}
                >
                  {item?.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
