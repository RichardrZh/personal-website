import styles from "@/styles/HTMLTagStyledWrapper.module.css";

export default function HTMLTagStyledWrapper({
    tag,
    className,
    children
}: {
    tag: string,
    className?: string,
    children: React.ReactNode
}) {
    
    return (
        <div className={"relative" 
                        + " border border-solid border-transparent" /* this is a hack to prevent margin collapse without using overflow or padding */
                        + (typeof className === "undefined" ? " w-fit h-fit" : ` ${className}`)}> 
            <i className={`absolute top-0 left-0 ${styles.font}`}>{`<${tag}>`}</i>

            <div className="mx-10 my-7">
                {children}
            </div>

            <i className={`absolute bottom-0 right-0 ${styles.font}`}>{`</${tag}>`}</i>
        </div>
    )
}