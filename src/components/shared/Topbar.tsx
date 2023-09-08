"use client"

import Link from "next/link";
import { useState } from "react";

function Topbar() {
  const [topbarMenuVisible, setTopbarMenuVisible] = useState(false);

  const handleTopbarMenuToggle = () => {
    setTopbarMenuVisible((current) => !current);
  };

  return (
    <>
      <div className="topbar shadow-md shadow-darkmode-text"> 
        <nav className="text-darkmode-text flex justify-between items-center h-full">

          <div className="w-20 h-20">Logo</div>

          <div>
            <ul className={"primary-navigation-small primary-navigation-large fixed md:relative flex flex-col md:flex-row gap-5" 
                          + (topbarMenuVisible ? " primary-navigation-menu-visible" : " primary-navigation-menu-not-visible")}> 
              <li className="flex justify-center ">
                <Link href="/">Home</Link>
              </li>
              <li className="flex justify-center ">
                <Link href="/#about">About</Link>
              </li>
              <li className="flex justify-center">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="flex justify-center">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="flex justify-center">
                <Link href="/contactme">Contact Me</Link>
              </li>
              
            </ul>
          </div>

          <div>
            <ul className="flex flex-row justify-center">
              <li>
                <a>LinkedIn</a>
              </li>
              <li>
                <a>Github</a>
              </li>
              <li>
                <a>Resume</a>
              </li>
              <li className="block md:hidden">
                <button className="relative z-50" onClick={handleTopbarMenuToggle}>
                  {(topbarMenuVisible ? "Menu X" : "Menu Bars")}
                </button>
              </li>
            </ul>
          </div>
          
        </nav>      
      
      </div>
    
    </>
  )
}

export default Topbar;