import React from 'react'

const Container = ({children,style}) => {
  return (
   
        <div className={`w-full xl:max-w-282 h-auto flex flex-col items-center justify-center gap-2.5 ${style}`}>
            {children}
    </div>
  )
}

export default Container