import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import FaCenteredIcon from "@/components/FaCenteredIcon";

export default function ExternalNav({
    className,
    size,
}: {
    className?: string,
    size?: SizeProp,
}) {
/* add icon vs full, eg: [icon] x3 vs <button>linkedin [icon]<button> x3 */

    return ( 
        <ul className={"flex justify-center items-center"
                        + (typeof className === "undefined" ? "" : ` ${className}`)}>
            <li><a href="https://www.linkedin.com/in/richardzhuang91/" title="LinkedIn"><FaCenteredIcon icon={faLinkedinIn} size={size} /></a></li>
            <li><a href="https://github.com/RichardrZh" title="Github"><FaCenteredIcon icon={faGithub} size={size} /></a></li>
            <li><a href="/cv/Richard_Zhuang_Resume.pdf" title="CV" target="_blank"><FaCenteredIcon icon={faFilePdf} size={size} /></a></li> 
            {/* faMedium for medium link in future? for adding blog style stuff */}
        </ul>
    );
}
  