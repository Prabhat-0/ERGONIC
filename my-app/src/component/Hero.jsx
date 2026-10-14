import Image from 'next/image'
import React from 'react'
import Heading from './Heading'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'

const Hero = ({ image, headerText, MainHeaderText, ParaText,id="hero" }) => {
  return (
    <div
      id={id}
      className="relative h-[40dvh] min-h-125 w-full overflow-hidden sm:h-[85svh] lg:h-screen lg:min-h-160 2xl:max-h-200"
    >
      <Image
        src={image}
        alt="HeroBg"
        fill
        priority
        quality={80}
        sizes="80vw"
        className="z-0 object-cover object-center"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end gap-2 px-4 pb-8 text-center sm:gap-2.5 sm:px-6 sm:pb-10 lg:pb-15 xl:pb-17.5">
        <Heading text={headerText} />
        <MainHeading text={MainHeaderText} />
        <div className="max-w-xl sm:max-w-2xl">
          <Paragraph para={ParaText} />
        </div>
      </div>
    </div>
  )
}

export default Hero