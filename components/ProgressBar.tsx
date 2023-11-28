export default function ProgressBar({
    percentage,
    height,
    color,
    className
}: {
    percentage: number,
    height?: string,
    color?: string,
    className?: string
}) {
    return (
        <div className={`h-[${height}] ${className}`}>
            <div className={`w-[${percentage * 100}%] bg-[${color}]`}></div>
        </div>
    )
}