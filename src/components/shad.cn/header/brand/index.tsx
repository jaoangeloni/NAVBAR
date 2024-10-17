import { APP_LOGO } from "@/config/header/logo";
import Link from "next/link";
import Image from "next/image";

export function HeaderBrand() {
  return (
    <Link href="/inicio" className="mr-8 hover:bg-accent rounded-md py-2 px-4">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={APP_LOGO?.logo}
          alt="Logo"
          style={{ objectFit: "contain" }}
          width={24}
        />
        <p className="font-bold text-sm text-inherit">{APP_LOGO?.title}</p>
      </div>
    </Link>
  );
}
