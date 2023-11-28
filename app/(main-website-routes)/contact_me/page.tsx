import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper"

export default function Contact() {
    return (
        <main className="flex flex-col md:flex-row justify-between items-center md:w-full p-5 md:gap-10">
            
            <hgroup className="flex flex-col">
                <HTMLTagStyledWrapper tag="h1">
                    <h1>Contact&nbspMe</h1>
                </HTMLTagStyledWrapper>

                <HTMLTagStyledWrapper tag="p">
                    <p>some text here, can find me xyz, fill out form yadayada</p>
                </HTMLTagStyledWrapper>
                

                {/* maybe put below in seperate component? */}
                <HTMLTagStyledWrapper tag="form">
                    <form>
                        react-form form
                        in format:
                            first name, last name
                            email
                            subject
                            text
                    </form>
                </HTMLTagStyledWrapper>
                

            </hgroup>
            
            {/* maybe put below in seperate component? */}
            <HTMLTagStyledWrapper tag="map">
                <div>
                    google map of current general loc eg: toronto
                    take loc from db
                    make google map map obj from api
                </div>
            </HTMLTagStyledWrapper>
            
        </main>
    )
}