import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper";

export default function Skills() {
    return (
        <main className="flex flex-col p-5">
            <hgroup>
                <HTMLTagStyledWrapper tag="h1">
                    <h1>{"Skills"}</h1>
                </HTMLTagStyledWrapper>
                
                <HTMLTagStyledWrapper tag="p">
                    <p>{"something about my Skills maybe progress bar style thing with dropdown click that opens to more details, ie project cards, small blurb, etc"}</p>
                </HTMLTagStyledWrapper>

            </hgroup>

            <HTMLTagStyledWrapper className="w-full" tag="section">
                <section>
                    <div>skill bar with dropdown</div>
                    <div>skill bar with dropdown</div>
                    <div>skill bar with dropdown</div>
                </section>
            </HTMLTagStyledWrapper>
            
        </main>
    )
}