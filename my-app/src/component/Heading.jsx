import React from 'react'

const Heading = ({text,font="font-outfit font-thin",textSize="text-[90px]" , leading="leading-[110px]",tracking="-tracking-[3%]",flex="flex items-center justify-center"}) => {
  return (
    <div className={`${font} ${textSize} ${leading} ${tracking} ${flex}`}>{text}</div>
  )
}

export default Heading