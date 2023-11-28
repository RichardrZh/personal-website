import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import FaCenteredIcon from "./FaCenteredIcon";

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
            <li><FaCenteredIcon icon={faLinkedinIn} size={size} /></li>
            <li><FaCenteredIcon icon={faGithub} size={size} /></li>
            <li><FaCenteredIcon icon={faFilePdf} size={size} /></li> 
            {/* faMedium for medium link in future? for adding blog style stuff */}
        </ul>
    );
}
  