import React from 'react'

const Heading = ({text,font="font-outfit font-thin",textSize="text-2xl sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px]" , leading="leading-[20px] sm:leading-[50px] md:leading-[60px] lg:leading-[90px] xl:leading-[110px]",tracking="-tracking-[3%]",flex="flex items-center justify-center"}) => {
  return (
    <div className={`${font} ${textSize} ${leading} ${tracking} ${flex} `}>{text}</div>
  )
}

export default Heading