export default function ProjectCard({
    title,
    body,

}: {
    title: string,
    body: string
}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>{/* use display -webkit-box- and line clamp to trunclate multiline text with ellipses */}
        </div>
    )
}