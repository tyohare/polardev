import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button,ChakraProvider, CSSReset, Box  } from '@chakra-ui/react';


const Card = (props) => {

    const [isOpen,setIsOpen] = useState(false);
    // src="https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo="
  return (
    <ChakraProvider>
    <CSSReset />
    {/* <Box p={4}></Box> */}
    <div className='cardApp'>
    <motion.div 
        transition={{layout: { duration:1, type:"spring"} }}
        Layout
        onClick={() => setIsOpen(!isOpen)} 

        className="card">
        <motion.img 
            className="cardimage"
            src={props.src}
            alt="">    
        </motion.img>

      <motion.h2 className='title'>
        {props.title}
      </motion.h2>

      <motion.h4 className='desc'>{props.description}</motion.h4>
      {isOpen && (
      <motion.div 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      transition={{duration:1}} 
      exit={{opacity:0}} 

      className='expand'>
     { props.hasDemo ? 
      <Button
         _focus={{
                                ring: '4px',
                                ringColor: 'purple.100',
                                ringOffset: '0px',
                                ringOffsetColor: 'purple.300'
                                }}
                                mt={4} colorScheme="purple"><a href={props.urlDemo}>Demo</a>
      

      </Button>
      : null}
      <Button
 _focus={{
                                ring: '4px',
                                ringColor: 'purple.100',
                                ringOffset: '0px',
                                ringOffsetColor: 'purple.300'
                                }}
                        mt={4} colorScheme="purple"><a href={props.urlCode}>Code</a>

      </Button>

      </motion.div>
      )}

    </motion.div> 
    </div>

</ChakraProvider>
   
  )
}

export default Card

