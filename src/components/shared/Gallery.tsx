"use client"

import React, { useState } from "react";

function Gallery({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [galleryScrollPercentage, _setGalleryScrollPercentage] = useState(0.0); 
    const galleryScrollPercentageRef = React.useRef(galleryScrollPercentage);
    const setGalleryScrollPercentage = (data:number) => {
      galleryScrollPercentageRef.current = data;
      _setGalleryScrollPercentage(() => data);
    };
  
    const [galleryScrollPrevPercentage, _setGalleryScrollPrevPercentage] = useState(0.0); 
    const galleryScrollPrevPercentageRef = React.useRef(galleryScrollPrevPercentage);
    const setGalleryScrollPrevPercentage = (data:number) => {
      galleryScrollPrevPercentageRef.current = data;
      _setGalleryScrollPrevPercentage(() => data);
    };
  
    const [mouseDownXPosition, _setMouseDownXPosition] = useState(0.0);  
    const mouseDownXPositionRef = React.useRef(mouseDownXPosition);
    const setMouseDownXPosition = (data:number) => {
      mouseDownXPositionRef.current = data;
      _setMouseDownXPosition(() => data);
    };
  
    const [mouseDown, _setMouseDown] = useState(false);  
    const mouseDownRef = React.useRef(mouseDown);
    const setMouseDown = (data:boolean) => {
      mouseDownRef.current = data;
      _setMouseDown(() => data);
    };
  
  
    const handleOnDown = (clientX:number) => {
      setMouseDownXPosition(clientX);
      setMouseDown(true);
    };
  
    const handleOnUp = () => {
      setGalleryScrollPrevPercentage(galleryScrollPercentageRef.current);
      setMouseDown(false);
    };
  
    const handleOnMove = (clientX:number) => {
      if (!(mouseDownRef.current)) return;
    
      const mouseDelta = mouseDownXPositionRef.current - clientX;
      const maxDelta = window.innerWidth;
      
      setGalleryScrollPercentage(
        Math.max(Math.min(((mouseDelta / maxDelta) * 100) + galleryScrollPrevPercentageRef.current, 100), 0)
      );
    
  
      const track = document.querySelector(".gallery-track")!;
      track.animate({
        transform: `translate(-${galleryScrollPercentageRef.current}%, -50%)`,
      }, {
        duration: 1200,
        fill: "forwards"
      });
    
      
      for (const image of track.querySelectorAll(".project-card")) {
        image.animate({
          objectPosition: `${-100 + galleryScrollPercentageRef.current}% center`,
        }, {
          duration: 1200,
          fill: "forwards"
        });
      }
    };
  
    /* if (typeof document !== "undefined") {
      document.body.style.overflowX = 'hidden';
    } */
  
    if (typeof window !== "undefined") {
      window.onmousedown = (e) => handleOnDown(e.clientX);
      window.ontouchstart = (e) => handleOnDown(e.touches[0].clientX);
  
      window.onmouseup = (e) => handleOnUp();
      window.ontouchend = (e) => handleOnUp();
  
      window.onmousemove = (e) => handleOnMove(e.clientX);
      window.ontouchmove = (e) => handleOnMove(e.touches[0].clientX);
  
      /* window.addEventListener("wheel", event => {
        const delta = event.deltaX === 0 ? Math.sign(event.deltaY) : Math.sign(event.deltaX);
        setGalleryScrollPercentage(
          Math.max(Math.min(delta + galleryScrollPrevPercentageRef.current, 100), 0)
        );
      }); */
    }

    return (
      <section className='w-screen max-w-full h-screen max-h-full 
      overflow-hidden focus:outline-none relative'>      

        <div className={"transform gallery-track flex absolute top-1/2 left-1/4 gap-10"
                        /* + ` translate-x-[-${galleryScrollPercentage}%]` */}> 
            {children} 
        </div>

        {/* <GalleryScrollBar /> */}

              
      </section>
    )
}

export default Gallery;