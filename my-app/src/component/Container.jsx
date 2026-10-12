import React from 'react'

const Container = ({children}) => {
  return (
   
        <div className='w-full xl:max-w-282 h-auto flex items-center justify-center gap-2.5'>
            {children}
    </div>
  )
}

export default Container