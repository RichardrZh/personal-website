import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mt-20">
        <div className="h-[80vh] flex justify-center items-center"> {/* this div flexbox might? be needed to seperate conflicting justify-center and self-center flex floats? */}
          <div className="flex flex-col md:flex-row my-0 mx-auto"> {/* <-- change to display none on mobile */}
            <div className="flex justify-center">
              <div className="w-40 h-40">some img of face</div>
            </div>
            
            <div>
              <h1 className="flex flex-wrap justify-center md:justify-start text-6xl whitespace-pre my-8">
                  <span>Hi, </span>
                  <span className="text-darkmode-accent">I'm </span>
                  <span className="text-darkmode-accent">Richard! </span> 
                  <span>^_^</span>
              </h1>
              <h2 className="text-center md:text-left text-3xl italic my-8">
                Programmer, Web Developer, Avid Reader
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start">
                <div className="flex justify-start sm:block basis-1/2 sm:basis-auto">
                  <Link href="#about" className="inline-block text-lightmode-text bg-darkmode-primary button-m-p rounded-xl">About</Link>
                </div>
                <div className="flex justify-start sm:block basis-1/2 sm:basis-auto">
                  <Link href="#skills" className="inline-block text-lightmode-text bg-darkmode-primary button-m-p rounded-xl">Skills</Link>
                </div>
                <div className="flex justify-end sm:block basis-1/2 sm:basis-auto">
                  <Link href="/projects" className="inline-block bg-darkmode-secondary button-m-p rounded-xl">Projects</Link>
                </div>
                <div className="flex justify-start sm:block basis-1/2 sm:basis-auto">
                  <Link href="/" className="inline-block bg-darkmode-secondary button-m-p rounded-xl">Resume</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="mt-40 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">

        <div className="flex justify-center items-center h-full w-full">
          <div>some image maybe book?</div>
        </div>

        <div>
          <h2>About</h2>
          <p>about text : Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores a non. Veniam illo eos assumenda earum, sunt labore vero non commodi exercitationem accusamus fugit impedit hic beatae libero quisquam?</p>
        </div>
        
      </section>


      <section id="skills" className="my-40 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        
        <div>
          <h2>Skills</h2>
          <p>skills text : Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores a non. Veniam illo eos assumenda earum, sunt labore vero non commodi exercitationem accusamus fugit impedit hic beatae libero quisquam?</p>
        </div>

        <div className="flex justify-center items-center h-full w-full">
          <div>some image maybe computer?</div>
        </div>

      </section>
    </>
  )
}
