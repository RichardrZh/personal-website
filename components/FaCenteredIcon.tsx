import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FaCenteredIcon({
    size,
    icon,
    className
}: {
    size?: SizeProp,
    icon: IconProp,
    className?: string
}) {

    return ( 

        <div className="flex justify-center items-center">
            <FontAwesomeIcon className={className} icon={icon} size={size} />
        </div>

    );
}
  