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
import { NAV_BAR_ITEMS } from "@/config/header/nav-bar";
import { ListItem } from "./dropdownItems";

export function NavItems() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAV_BAR_ITEMS?.map((item) =>
          item?.items !== undefined ? (
            <NavigationMenuItem key={item?.tag}>
              <NavigationMenuTrigger>{item?.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                  {item?.items?.map((items) => (
                    <ListItem
                      key={items.tag}
                      title={items?.label}
                      href={items?.path}
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
