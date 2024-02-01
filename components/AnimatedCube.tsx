"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/AnimatedCube.module.css";
import { getRandomInt } from "@/libs/utils/random";


export default function AnimatedCube({
    sideLength,
    transitionDuration,
    cycleInterval,
    front,
    back,
    left,
    right,
    top,
    bottom
}: {
    sideLength: string,
    transitionDuration?: string,
    cycleInterval?: number,
    front: React.ReactNode,
    back: React.ReactNode,
    left: React.ReactNode,
    right: React.ReactNode,
    top: React.ReactNode,
    bottom: React.ReactNode
}) {

    transitionDuration = typeof transitionDuration == "undefined" ? "2s": transitionDuration;
    cycleInterval = typeof cycleInterval === "undefined" ? 5000 : cycleInterval;

    // config vars
    const sceneVars = {
        "--scene-size": sideLength,
        "--transition-duration": transitionDuration
    } as React.CSSProperties;

    // face rotation animation
    const faces = [
        {value: front, toString: "front"},
        {value: back, toString: "back"},
        {value: left, toString: "left"},
        {value: right, toString: "right"},
        {value: top, toString: "top"},
        {value: bottom, toString: "bottom"},
    ];

    const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

    useEffect(() => {
        setCurrentFaceIndex(() => getRandomInt(1, faces.length - 1))
        const interval = setInterval(() => {
            setCurrentFaceIndex(prevFaceIndex => (prevFaceIndex + getRandomInt(1, faces.length - 1)) % faces.length);
        }, cycleInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${styles.scene}`} style={sceneVars}>
            <ul className={`${styles.cube} ${styles[`show-${faces[currentFaceIndex].toString}`]} m-0 p-0`}>
                {faces.map(face => <li key={face.toString} className={`${styles[`face-${face.toString}`]} block`}>{face.value}</li>)}
            </ul>
        </div>
    )
}