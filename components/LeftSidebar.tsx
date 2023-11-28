"use client"
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import LeftNavbar from "./LeftNavbar";
import styles from "../styles/LeftSidebar.module.css"

export default function LeftSidebar({ 
    header,
    footer
}: {
    header: React.ReactNode,
    footer: React.ReactNode
}) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen() {
        setIsOpen(prevState => !prevState);
    };

    // add isactive/isvisible for mobile menu click
    // add get client width (using hook?) for marginleft/right change -> nvm instead of margin left/right, use transform translatex
    // 
    return (/* float  */
        <section className={"sticky top-0 left-0" 
                            + " flex md:flex-col justify-between items-stretch text-center"
                            + " md:max-h-full md:h-screen"
                            + ` ${styles.shadow}`
                            + " z-40"}>
            <header className="flex justify-center items-center">
                {header}
            </header>
            
            <LeftNavbar isOpen={isOpen} close={() => setIsOpen(false)}/>
            
            <footer className="flex justify-center items-center md:mb-4">
                {footer}
                <MenuButton isOpen={isOpen} toggle={toggleIsOpen}/> 
            </footer>
        </section>
    );
}
  