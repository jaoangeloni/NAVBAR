import { Grip } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppList } from "./items";

export function AppsDropdownMenu() {
  return (
    <div className="hidden md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-xl w-9 h-9">
            <Grip />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[350px] h-[420px] absolute -right-4 p-0">
          <AppList />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
