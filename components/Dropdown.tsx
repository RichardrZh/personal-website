"use client"
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "@/styles/Dropdown.module.css"
import FaCenteredIcon from "@/components/FaCenteredIcon";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({
    content,
    dropdown,
    className,
    buttonStyle
}: {
    content: React.ReactNode,
    dropdown: React.ReactNode,
    className?: string,
    buttonStyle?: CSSProperties
}) {

    const dropdownWrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownHeight, setDropdownHeight] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        setDropdownHeight(dropdownWrapperRef.current ? dropdownWrapperRef.current.clientHeight : 0);
    });

    /* due to modules.css in next not supporting multiple transitions (bug?) 
       just add the transition inline (hack). also add the dropdown height using css properties*/
    let inlineStyles = {
        "--dropdown-height": dropdownHeight,
        /* transition: "clip-path 0s ease-out, height 200ms ease-out" */
    } as CSSProperties;

    return (
        <div className={`flex flex-col items-stretch ${className}`}>
            <div className="flex">
                <div className="flex-grow">
                    {content}
                </div>
                <button onClick={toggleDropdown}>
                    {dropdownOpen ? <FaCenteredIcon icon={faChevronUp} style={buttonStyle} /> : <FaCenteredIcon icon={faChevronDown} style={buttonStyle}/>}
                </button>
            </div>
            
            {/* below needs to be nested divs as we open dropdown by setting container height to and from 0.
                aswe need to get dropdown's height (and cant overwrite it with 0), we need a wrapper ie dropdownWrapperRef*/}
            <div className={`dropdown ${dropdownOpen ? "dropdown-open" : ""}`} style={inlineStyles}>
                <div ref={dropdownWrapperRef}>
                    {dropdown}
                </div>
            </div>
            
        </div>
    )
}
