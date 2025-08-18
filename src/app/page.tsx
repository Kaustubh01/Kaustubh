import React from 'react'
import * as motion from 'motion/react-client'
// import {motion} from "motion/react"

const Home = () => {
  return (
    <div>
      <motion.div
        className="box bg-amber-300 h-32 w-32 border-2 rounded-full"
        initial={{ opacity: 0 }}       // start invisible
        animate={{ opacity: 1 }}       // fade in
        transition={{ duration: 1.5 }}>
      </motion.div>
    </div>
  )
}

export default Home