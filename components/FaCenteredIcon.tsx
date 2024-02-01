import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CSSProperties } from "react";

export default function FaCenteredIcon({
    size,
    icon,
    className,
    style
}: {
    size?: SizeProp,
    icon: IconProp,
    className?: string,
    style?: CSSProperties
}) {

    return ( 

        <div className="grid place-items-center">
            <FontAwesomeIcon className={className} icon={icon} size={size} style={style}/>
        </div>

    );
}
  