import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'



const PageHeading = ({heading, spanText1,spanText2,para,spanStyle="font-outfit font-thin text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl",wrap="whitespace-nowrap" }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2.5 z-10'>
            <Heading text={heading} textSize='text-base ' leading='leading-4 md:leading-7.5' font='font-outfit font-medium uppercase ' tracking='tracking-[14%]'/>
            <span className={`${ spanStyle} ${wrap} leading-6 sm:leading-10 lg:leading-12 xl:leading-17.5 tracking-[-3%] text-center `}> {spanText1}<span className='font-metal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>{spanText2}</span></span>
   
                <div className="relative h-px w-full max-w-100 bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
          
            <Paragraph para={para}/>
        </div>
    )
}

export default PageHeading