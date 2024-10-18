import { APPS_LIST } from "@/config/header/apps-list";
import { APP_CONFIG } from "@/config/app-config";
import Image from "next/image";
import Link from "next/link";

export function AppList() {
  return (
    <div className="grid grid-cols-3 items-center justify-center p-4 w-full h-full overflow-auto">
      {APPS_LIST(APP_CONFIG?.environment).map((app) => (
        <div key={app?.tag} className="flex items-center justify-center">
          <Link href={app?.url}>
            <div
              key={app?.tag}
              className="p-4 flex flex-col gap-2 items-center justify-center hover:bg-accent cursor-pointer rounded-md w-24 h-24"
            >
              <Image
                src={app?.icon}
                alt={app?.label}
                style={{ objectFit: "contain" }}
                width={44}
              />
              <p className="text-xs text-center font-medium">{app?.label}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
