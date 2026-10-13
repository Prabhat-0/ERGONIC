import React from 'react'
import Paragraph from './Paragraph'
import Button from './Button'
const ParaButton = ({para,text}) => {
  return (
    <div className='w-full xl:max-w-282 flex flex-col items-center justify-center gap-12.5 z-10'>
            <Paragraph para={para} fontStyle="font-metal font-regular text-center" textSize="text-[50px]" leading="leading-15" />
           {text &&  <Button text={text} />}
          </div>
  )
}

export default ParaButton