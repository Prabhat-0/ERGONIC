import React from 'react'

const Paragraph = ({para ,fontStyle="font-outfit font-light " , textSize="text-2xl ",leading="leading-7.5"}) => {
  return (
    <div className={` ${fontStyle} ${textSize} ${leading}`}>{para}</div>
  )
}

export default Paragraph