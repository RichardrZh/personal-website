import AnimatedCube from "@/components/AnimatedCube"
import FaCenteredIcon from "@/components/FaCenteredIcon"
import HTMLTagStyledWrapper from "@/components/HTMLTagStyledWrapper"
import { faBook, faCameraRetro, faChessPawn, faCode, faGamepad, faPalette } from "@fortawesome/free-solid-svg-icons"

export default function About() {
    return (
        <main className="flex justify-center md:block p-5">
        
            <hgroup className="md:max-w-[60%]">
                <HTMLTagStyledWrapper tag="h1">
                    <h1>About Me</h1> 
                </HTMLTagStyledWrapper>

                <HTMLTagStyledWrapper tag="p">
                    <div className="flex flex-col gap-5">
                        <p>
                            Hi, I'm Richard, a personable and driven programmer. 
                            I always enjoy tinkering around and solving problems! 
                        </p>
                        <hr className="w-[90%] mx-auto"/>
                        <p>
                            I've always had an interest for computers and I remember messing 
                            around with them when I was younger. Still, I only got formally introduced 
                            to programming in high school when my friends and I joined a coding club. 
                            I was hooked.
                        </p>
                        <p>
                            Later, I was accepted into the University of Toronto where I studied mathematics, 
                            computer science, and statistics. One of my prouder moments in life was graduating 
                            and obtaining my bachelor's.
                        </p>
                        <p>
                            I always enjoy programming. To me, it's almost like a puzzle game, where you work step by step 
                            for the satisfaction of the solution.
                        </p>
                        <hr className="w-[90%] mx-auto"/>
                        <p>
                            During my free time, I enjoy playing chess, video games, and reading books on the internet.
                            I'm also looking to dabble in photography and painting so if you have any tips let me know!

                        </p>
                    </div>
                </HTMLTagStyledWrapper>
                
            </hgroup>

            <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 mr-[8vw]">
                {/* media about related stuff, maybe webgl stuff, spinning ball of what i like? 6 things for 6 faces, chess books coding games? photography calistenics
                https://www.flaticon.com/free-icon/book_1164651?term=books&page=1&position=40&origin=search&related_id=1164651 */}
                
                <AnimatedCube sideLength="200px" 
                              front={<FaCenteredIcon icon={faCode} size="4x" />}
                              back={<FaCenteredIcon icon={faPalette} size="4x" />}
                              left={<FaCenteredIcon icon={faBook} size="4x" />}
                              right={<FaCenteredIcon icon={faGamepad} size="4x" />}
                              top={<FaCenteredIcon icon={faChessPawn} size="5x" />}
                              bottom={<FaCenteredIcon icon={faCameraRetro} size="4x" />} />
            </div>

        </main>
    )
}