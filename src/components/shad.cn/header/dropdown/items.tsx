import { APPS_LIST } from "@/config/header/header-apps";
import Image from "next/image";
import Link from "next/link";

export function AppList() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-y-4 p-4 w-full h-full overflow-auto">
      {APPS_LIST.map((app) => (
        <Link href={app?.url}>
          <div
            key={app?.tag}
            className="p-4 flex flex-col gap-2 items-center justify-center hover:bg-zinc-100 cursor-pointer rounded-md max-w-24"
          >
            <Image
              src={app?.icon}
              alt={app?.label}
              style={{ objectFit: "contain" }}
              width={28}
            />
            <p className="text-xs">{app?.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
