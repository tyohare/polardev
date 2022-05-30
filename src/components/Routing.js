import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch, Routes, useLocation } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import { AnimatePresence } from 'framer-motion'


function Routing() {
    const location = useLocation();
    return(
        <div>
           <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                
                    <Route path="" element={<Home />}/>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="contact" element={<Contact />}></Route>

                </Routes>
           </AnimatePresence> 

        </div>

    )
}

export default Routing;