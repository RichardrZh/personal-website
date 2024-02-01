import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import FaCenteredIcon from "@/components/FaCenteredIcon";
/* import styles from "../styles/MenuButton.module.css" */

export default function MenuButton({
    isOpen,
    toggle
}: {
    isOpen: boolean,
    toggle: () => void
}) {
    // get isactive/isvisible toggle for mobile menu click from parent

    const menuIcon = isOpen ? faClose : faBars;

    return (
        <>
        {/* type SizeProp = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" */}

            <button className="relative z-50 md:hidden mr-4 w-10 h-10" onClick={toggle}>
                <FaCenteredIcon /* className={styles.menu} */ icon={menuIcon} size="2xl" />
            </button>
            
        </>
    );
}
  