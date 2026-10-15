import Image from 'next/image'
import React from 'react'
import Heading from './Heading'
import MainHeading from './MainHeading'
import Button from './Button'

const Ideas = ({ image, HeaderText, MainHeaderText, ButtonText,opacity }) => {
  return (
    <div
      id={`ambitiousIdeas+${HeaderText}`}
      className={`relative h-auto aspect-square max-h-50 w-full overflow-hidden sm:min-h-100 lg:h-[80vh] lg:min-h-140 xl:max-h-175`}
    >
      {opacity && (
  <div className={`pointer-events-none absolute inset-0 z-10 bg-black ${opacity}`} />
)}
      <Image
        src={image}
        alt=""
        fill
        quality={[75,90]}
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 px-4 py-10 text-center sm:gap-6 md:gap-10 sm:px-6 lg:gap-12.5 lg:pb-17.5">
        <div className="flex flex-col items-center gap-2 sm:gap-2.5">
          <Heading text={HeaderText} />
          <MainHeading text={MainHeaderText} />
        </div>
        <Button text={ButtonText} />
      </div>
    </div>
  )
}

export default Ideas