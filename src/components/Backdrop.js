import React from 'react'
import { motion } from 'framer-motion'


const Backdrop = () => {
  return (
    <motion.div className='backdrop'
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{duration:1.2}}
        exit={{opacity:0}}
    >

    </motion.div>
  )
}

export default Backdrop