"use client"

import MainRouteEnum, { enumToString, enumToPath, pathnameToEnum } from "@/libs/enums/MainRouteEnum";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
    route
}: {
    route: MainRouteEnum
}) {
    const currentRoute = pathnameToEnum(usePathname());

    return (
        <div className={"inline-block px-2 py-4 md:py-2"
                        + `${route === currentRoute ? " bg-red-600" : " hover:bg-indigo-600"}`}>
                            {/* wrap link in button that closes on click? */}
            <Link className="inline-block w-full h-full" href={enumToPath(route)}>{enumToString(route, '\xa0') /* '\xa0' is a non-breaking space */}</Link>
        </div>
    )
}