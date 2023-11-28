import ExternalNav from '@/components/ExternalNav'
import HTMLTagStyledWrapper from '@/components/HTMLTagStyledWrapper'
import Image from 'next/image'
import rzPortraitInformal from '../../public/cartoon-informal-smile-transformed-path.svg'
import AnimatedPortraitInformalSVG from '@/components/AnimatedPortraitInformalSVG'

export default function Home() {
  
  return (
    <main className='flex flex-col md:flex-row justify-center md:justify-evenly items-center h-full w-full py-10 px-5'>
      <hgroup>
        <HTMLTagStyledWrapper tag='header'>
        
          <p>Hi, my name is</p>
          <h1>Richard Zhuang.</h1>
          <h2>Software Developer. Web Developer. </h2>

        </HTMLTagStyledWrapper>
        

        <ExternalNav className='gap-5' size='lg'/>
      </hgroup>
     
      <div className='hidden md:block relative'>
        {/* <Image
          src={rzPortraitInformal}
          alt="A picture of Richard Zhuang smiling, in a blue hoodie."
          style={{objectFit: "contain", filter: "invert(46%) sepia(59%) saturate(2820%) hue-rotate(163deg) brightness(97%) contrast(101%)"}}/> */}
          <AnimatedPortraitInformalSVG id="rzpi" />
      </div>

    </main>
  )
}
