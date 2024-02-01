import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <main className="flex flex-col p-5">66
            <hgroup>
                <HTMLTagStyledWrapper tag="h1">
                    <h1>Projects</h1>
                </HTMLTagStyledWrapper>

                {/* 
                <search className="my-4">search projects: |||||searchbar||||| or filter tags frontend/backend/etc</search>
                */}
                
            </hgroup>

            <div className="flex justify-center items-center">Development in progress...</div>

            {/* <HTMLTagStyledWrapper className="w-full" tag="section">
                <section className="flex flex-col">
                    
                    <div className="grid grid-cols-3"> 
                            not sure if to use grid cols or flex row wrap   
                            div{card}.text-center.border.border-white*10
                        <ProjectCard title={""} body={""} />
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                        <div className="text-center border border-white h-40">card</div>
                    </div>
                </section>
            </HTMLTagStyledWrapper> */}
        
        </main>
    )
}