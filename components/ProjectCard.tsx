import styles from "@/styles/ProjectCard.module.css";
import Image from "next/image";

export default function ProjectCard({
    title,
    body,
    className
}: {
    title: string,
    body: string,
    className?: string
}) {
    return (
        <div>
            
        </div>
    )
}


{/* <div className={`${className} ${styles.container} flex flex-nowrap relative overflow-hidden aspect-square`}>
            <div className={`${styles.overlay} w-full h-full z-10 relative`}>
                <div className={`${styles["overlay-banner"]} flex flex-col justify-between h-full relative z-30`}>
                    <h3>title: {title}</h3>
                    <p>skills ie c, java, next etc</p> 
                </div>

                <div className={`${styles["overlay-image"]} absolute top-0 right-0 h-full w-[65%] z-10`}>
                    <Image 
                        src={"/project-resources/colors.png"} 
                        alt={"colors"}
                        layout="fill"
                        objectFit="cover" />
                </div>
                
            </div>
            
            <div className="absolute top-0 right-0 h-full w-[65%] z-0">
                <div className="">
                    {body} text ... etc
                </div>
            </div>
        </div> */}