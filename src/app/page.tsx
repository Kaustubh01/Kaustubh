import React from 'react'
import * as motion from 'motion/react-client'
// import {motion} from "motion/react"

const Home = () => {
  return (
    <div>
      <div className="hero flex flex-col items-center justify-center md:flex-row">
        <div className="left bg-amber-300 h-[60vh] w-[30vw] m-3"></div>
        <div className="center bg-cyan-300 h-[60vh] w-[30vw] m-3"></div>
        <div className="right bg-teal-300 h-[60vh] w-[30vw] m-3"></div>
      </div>
    </div>
  )
}

export default Home