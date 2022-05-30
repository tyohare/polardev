import React from 'react';
// import '../styles.css';
import Backdrop from './Backdrop';
import { Link } from 'react-router-dom'
import Form from "./Form";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";


function Contact() {

    return(
        <div className='bgc'>
        <Backdrop />
        <div className="btn-box">Contact: </div> 

        
        <div class="form">

            <ChakraProvider>
            <CSSReset />
                <Box  p={4}>
                    <Form />
                </Box>
            </ChakraProvider>
        </div>


        <ul class="social">

        </ul>
    

    
    </div>
    )
}

export default Contact;