import React from 'react'

const Paragraph = ({para ,fontStyle="font-outfit font-light" , textSize=" text-base sm:text-md md:text-lg lg:text-2xl ",leading=" leading-normal sm:leading-2 md:leading-5 lg:leading-7.5"}) => {
  return (
    <article className={` ${fontStyle} ${textSize} ${leading} text-center text-white`}>{para}</article>
  )
}

export default Paragraph