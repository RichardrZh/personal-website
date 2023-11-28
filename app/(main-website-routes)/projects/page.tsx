import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper";

export default function Projects() {
    return (
        <main className="flex flex-col p-5">
            <hgroup>
                <HTMLTagStyledWrapper tag="h1">
                    <h1>{"Projects"}</h1>
                </HTMLTagStyledWrapper>
                
                <HTMLTagStyledWrapper tag="p">
                    <p>{"header stuff, some info and intro to stuff, maybe img or smth idk"}</p>
                </HTMLTagStyledWrapper>

            </hgroup>

            <HTMLTagStyledWrapper className="w-full" tag="section">
                <section className="flex flex-col">
                    <search className="my-4">search projects: |||||searchbar||||| or filter tags frontend/backend/etc</search>
                    <div>skill bar with dropdown</div>
                    <div>skill bar with dropdown</div>
                    <div>skill bar with dropdown</div>
                </section>
            </HTMLTagStyledWrapper>
        
        </main>
    )
}