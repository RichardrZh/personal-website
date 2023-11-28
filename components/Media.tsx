import Link from "next/link";

export default function Media({ /* rename media to link or smth? */
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className={"h-20 w-20"
                            + " mx-auto p-3"}>
                {children} {/* somehow adjust children to fill container, maybe by using props as tag */}
            </div>
        </>
    )
}