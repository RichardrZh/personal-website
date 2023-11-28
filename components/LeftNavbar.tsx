"use client"
import MainRouteEnum from "@/libs/enums/MainRouteEnum";
import NavItem from "./NavItem";
import styles from "../styles/LeftNavbar.module.css"
import { useEffect, useId } from "react";

export default function LeftNavbar({
    isOpen,
    close
}: {
    isOpen: boolean,
    close: () => void
}) {

    const backdropId = useId();

    const routes:MainRouteEnum[] = Object.keys(MainRouteEnum).filter(
        (key) => !isNaN(Number(key))
    ).map(
        (key) => Number(key)
    );

    useEffect(() => {
        let modal = document.getElementById(backdropId);

        // When the user clicks anywhere outside of the modal, close it
        if (modal) {
            modal.addEventListener("click", (event) => {
                if (event.target === modal) {
                    close()
                    console.log(isOpen)
                }
            });

            modal.addEventListener("touchend", (event) => {
                if (event.target === modal) {
                    close()
                }
            });
        }  
        
    }, [])

    return (
        <>
            <nav className={styles.openTransition
                        + " fixed top-0 right-0 md:static z-30" 
                        + " flex flex-col justify-center items-stretch"
                        + " max-h-full h-screen w-[80vw] md:w-auto" 
                        + (isOpen ? " shadow shadow-white" : ` translate-x-full md:transform-none ${styles.backdrop}`)}>
                {routes.map((route) => 
                    <NavItem key={route} route={route} />
                )}
            </nav> 

            <div id={backdropId} className={styles.backdrop 
                                            + (isOpen ? " visible" : " invisible pointer-events-none") 
                                            + " fixed w-full h-full"}>

            </div>
        </>

    )
}
  