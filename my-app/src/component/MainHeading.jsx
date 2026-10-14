import React from 'react'

const MainHeading = ({text}) => {
  return (
    <div className='font-metal font-normal text-[40px] sm:text-[50px] md:text-[60px] lg:text-[100px] xl:text-[130px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] xl:leading-[110px] tracking-[-3%]'>{text}</div>
  )
}

export default MainHeading