import React from 'react';
import ReactDOM from 'react-dom/client';
import vx from '../v1.mp4';
import Backdrop from './Backdrop';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from "@chakra-ui/react";
  import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";



// import './script'


function Home() {

    

    return(

        <div>
    <Backdrop />


            <section class="showcase">

            <video id="background-video" loop muted autoPlay>
            <source src={vx} type="video/mp4" /></video>
            <div class="overlay"></div>
            <div class="text">
                <h2>Tyler O'Hare: </h2> 
                {/* <!-- <h3>.</h3> --> */}
                <p>An engineer with skills in software development and cybersecurity. I develop powerful applications and websites that harness an array of technologies throughout the stack.</p>

                      
            <ChakraProvider>
                <CSSReset />
                <Box  p={4}>
                    <Button 
                        _focus={{
                                ring: '4px',
                                ringColor: 'purple.100',
                                ringOffset: '0px',
                                ringOffsetColor: 'purple.300'
                                }}
                        mt={4} colorScheme="purple"><Link to="/projects">My Projects</Link>
                    </Button>
                </Box>
            </ChakraProvider>
            </div>
            <ul class="social">

            <ChakraProvider>
                <CSSReset />
                <Box  p={4}>
                    <Button 
                        _focus={{
                                ring: '4px',
                                ringColor: 'black',
                                ringOffset: '0px',
                                ringOffsetColor: 'black.300'
                                }}
                        mt={4} colorScheme="white"> 


                    </Button>
                </Box>
            </ChakraProvider>

          </ul>

            </section>

        </div>
        

    )
}

export default Home;