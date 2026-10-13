import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'



const PageHeading = ({heading, spanText1,spanText2,para}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2.5 z-10'>
            <Heading text={heading} textSize='text-base ' leading='leading-7.5' font='font-outfit font-medium uppercase ' tracking='tracking-[14%]'/>
            <span className='font-outfit font-thin text-7xl leading-17.5 tracking-[-3%] text-center whitespace-nowrap'> {spanText1}<span className='font-metal '>{spanText2}</span></span>
   
                <div className="relative h-px w-full max-w-400 bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
          
            <Paragraph para={para}/>
        </div>
    )
}

export default PageHeading