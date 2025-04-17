'use client'

import '../../../node_modules/aos/dist/aos.css'

import AOS from 'aos'
import React from 'react'

const AosAnimation = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return <div></div>
}

export default AosAnimation
