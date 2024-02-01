import BackgroundText from "@/components/BackgroundText";
import ExternalNav from "@/components/ExternalNav";
import LeftSidebar from "@/components/LeftSidebar";
import Logo from "@/components/Logo";
import Link from "next/link";

/* todo: add mainpage stylesheet for consistent page styles, eg h2, p, text, font, etc
   try to stick to only stylistics
 */

export default function MainWebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <LeftSidebar header={<Link href="/"><Logo className="w-20 h-20 overflow-hidden mx-2 md:mx-0" /></Link>} 
                         footer={<ExternalNav className="mx-4 gap-2" size="lg" />}/>

            <div className="h-full pt-20 md:pt-0 md:pl-28 z-30">
                {children}
            </div>

            <BackgroundText />
            {/* todo: add canvus bg animation here? currently using above as bg visual */}

            
        </>
    );
};
