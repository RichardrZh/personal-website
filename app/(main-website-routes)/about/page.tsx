import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper"

export default function About() {
    return (
        <main className="flex justify-between p-5">
        
            <hgroup>
                <HTMLTagStyledWrapper tag="h1">
                    <h1>About Me</h1>
                </HTMLTagStyledWrapper>

                <HTMLTagStyledWrapper tag="p">
                    <p>some stuff here about me</p>
                </HTMLTagStyledWrapper>
                
            </hgroup>

            <div className="hidden md:block max-w-[50%]">
                media about related stuff, maybe webgl stuff, spinning ball of what i like? 6 things for 6 faces, chess books coding games? photography calistenics
                {/* https://www.flaticon.com/free-icon/book_1164651?term=books&page=1&position=40&origin=search&related_id=1164651 */}
            </div>

        </main>
    )
}