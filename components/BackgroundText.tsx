"use client"
import MainRouteEnum, { enumToString, pathnameToEnum } from "@/libs/enums/MainRouteEnum";
import { usePathname } from "next/navigation";
export default function BackgroundText() {
    const currentRoute = pathnameToEnum(usePathname());

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-zinc-900 text-[100vh] z-[-1] font-mono">
            {currentRoute === MainRouteEnum.HOME ? "" : enumToString(currentRoute).substring(0, 3)}
        </div>
    )
}