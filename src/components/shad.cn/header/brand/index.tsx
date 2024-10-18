import { APP_BRAND } from "@/config/header/app-brand";
import { APP_CONFIG } from "@/config/app-config";
import Link from "next/link";
import Image from "next/image";

export function HeaderBrand() {
  return (
    <Link href={APP_CONFIG?.basePath} className="mr-8">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={APP_BRAND?.logo}
          alt="Logo"
          style={{ objectFit: "contain" }}
          width={24}
        />
        <p className="font-bold text-sm text-inherit">{APP_BRAND?.title}</p>
      </div>
    </Link>
  );
}
