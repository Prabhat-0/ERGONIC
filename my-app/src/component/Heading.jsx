import React from 'react'

const Heading = ({text,font="font-outfit font-thin",textSize="text-[35px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px]" , leading="leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] xl:leading-[110px]",tracking="-tracking-[3%]",flex="flex items-center justify-center"}) => {
  return (
    <div className={`${font} ${textSize} ${leading} ${tracking} ${flex}`}>{text}</div>
  )
}

export default Heading