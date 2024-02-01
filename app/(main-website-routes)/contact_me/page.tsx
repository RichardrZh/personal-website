import EmailForm from "@/components/EmailForm"
import GoogleMap from "@/components/GoogleMap"
import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper"
import TextInput from "@/components/TextInput"

export default function Contact() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 p-5">
            
            <hgroup className="flex flex-col items-center md:items-stretch">
                <HTMLTagStyledWrapper tag="h1">
                    <h1>Contact&nbsp;Me</h1>
                </HTMLTagStyledWrapper>

                <HTMLTagStyledWrapper tag="p">
                    <p>Feel free to message me using the form below!</p>
                </HTMLTagStyledWrapper>
                

                {/* maybe put below in seperate component? */}
                <HTMLTagStyledWrapper tag="form" className="w-full">
                    <EmailForm className="pt-4 px-4">
                        <TextInput 
                            label="Name" 
                            textProperties={{
                                element: "input", 
                                properties: {
                                    name: "name", 
                                    required: true, 
                                    type: "text"
                                }}} />

                        <TextInput 
                            label="Email" 
                            textProperties={{
                                element: "input", 
                                properties: {
                                    name: "email", 
                                    required: true, 
                                    type: "email"
                                }}} />

                        <TextInput 
                            label="Message" 
                            textProperties={{
                                element: "textarea", 
                                properties: {
                                    name: "message", 
                                    required: true,
                                    spellCheck: true,
                                    rows: 8
                                }}} />
                    </EmailForm>
                </HTMLTagStyledWrapper>
                

            </hgroup>
            


           
            <div className="flex justify-center md:fixed md:top-1/2 md:right-4 md:-translate-y-1/2 md:max-w-[40vw]">
                <HTMLTagStyledWrapper tag="map">
                    <GoogleMap 
                        mapMode={"view"} 
                        params={{
                            center: {
                                lat: 43.8561,
                                lng: -79.3370
                            },
                            zoom: 11
                        }} 
                        width={"300"} 
                        height={"300"} />
                        <h3 className="w-full text-center">I'm currently stationed here!</h3>
                </HTMLTagStyledWrapper>
            </div>
            
        </main>
    )
}