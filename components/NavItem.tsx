"use client"

import MainRouteEnum, { enumToString, enumToPath, pathnameToEnum } from "@/libs/enums/MainRouteEnum";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
    onClick,
    route
}: {
    onClick: () => void,
    route: MainRouteEnum
}) {
    const currentRoute = pathnameToEnum(usePathname());

    return (
        <div className={"inline-block"
                        + `${route === currentRoute ? " bg-red-600" : " hover:bg-indigo-600"}`}>
                            {/* wrap link in button that closes on click? */}
            <Link className="inline-block h-full w-full" href={enumToPath(route)}>
                <button className="px-2 py-4 md:py-2 h-full w-full" onClick={onClick}>
                    {enumToString(route, '\xa0')} {/* '\xa0' is a non-breaking space */}
                </button>
            </Link>
        </div>
    )
}