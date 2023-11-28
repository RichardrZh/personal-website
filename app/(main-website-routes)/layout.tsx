import ExternalNav from "@/components/ExternalNav";
import LeftNavbar from "@/components/LeftNavbar";
import LeftSidebar from "@/components/LeftSidebar";
import Logo from "@/components/Logo";

/* todo: add mainpage stylesheet for consistent page styles, eg h2, p, text, font, etc
   try to stick to only stylistics
 */

export default function MainWebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col md:flex-row h-full">
            <LeftSidebar header={<Logo className="w-20 h-20 overflow-hidden mx-2 md:mx-0" />} 
                         footer={<ExternalNav className="mx-4 gap-2" size="lg" />}/>

            {children}

            {/* todo: add canvus bg animation here? */}
        </div>
    );
};
