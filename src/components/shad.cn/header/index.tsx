import { HeaderBrand } from "./brand";
import { AppsDropdownMenu } from "./dropdown";
import { NavItems } from "./navbar";

export function Header() {
  return (
    <nav
      className="flex items-center justify-center
      w-full 
      px-4 md:px-8 py-2
      border-b-1 border-foreground-200 
      bg-background"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center min-h-12">
          <HeaderBrand />
          <NavItems />
        </div>
        <div className="flex gap-4">
          <AppsDropdownMenu />
          {/* <UserAction /> */}
        </div>
      </div>
    </nav>
  );
}
