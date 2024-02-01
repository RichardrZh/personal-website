import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper";
import SkillBar from "@/components/SkillBar";

export default function Skills() {
    return (
        <main className="flex flex-col p-5">
            <hgroup>
                <HTMLTagStyledWrapper tag="h1">
                    <h1>Skills</h1>
                </HTMLTagStyledWrapper>
            </hgroup>

            <div className="flex justify-center items-center">Development in progress...</div>

            {/* <HTMLTagStyledWrapper className="w-full" tag="section">
                <div>title, eg: frontend</div>
                <section className="flex flex-col h-[200vh]">
                    <SkillBar imageProps={{
                            src: "src",
                            alt: "alt",
                            label: "label"
                        }} 
                        skillProps={{
                            name: "name",
                            desc: "desc"
                        }} />
                    <div>skill bar with dropdown</div>
                    <div>skill bar with dropdown</div>
                </section>
            </HTMLTagStyledWrapper> */}
            
        </main>
    )
}