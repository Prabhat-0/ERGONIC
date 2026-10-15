import React from 'react'
import Paragraph from './Paragraph'
import Button from './Button'
const ParaButton = ({para,text,style="text-center"}) => {
  return (
    <div className='w-full xl:max-w-282 flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-12.5 z-10'>
            <Paragraph para={para} fontStyle={`font-metal font-regular ${style}`} textSize="text-xl md:text-[30px] lg:text-[40px] xl:text-[50px]" leading="leading-7 md:leading-10 lg:leading-15" />
           {text &&  <Button text={text} />}
          </div>
  )
}

export default ParaButton