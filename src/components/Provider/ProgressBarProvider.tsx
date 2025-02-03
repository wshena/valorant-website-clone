'use client'
import React from 'react'
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="rgb(225, 70, 85)"
        options={{ showSpinner: false }}
        shallowRouting
        style='zIndex: 9999'
      />
    </>
  )
}

export default ProgressBarProvider