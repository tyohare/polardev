import React from 'react'
import Backdrop from './Backdrop';
import Card from './Card';
import myWeb from '../myWeb.png'
import notefly from '../notefly.png'
import cshell from '../cshells.png'
import finance from '../fin.png'
import mql4 from '../mql4.png'
import net from '../net.png'

const Projects = () => {

  return (
    <div className='bg'>
    <Backdrop />




    <div class="overlayproject">


    </div>
    <div class="text">

      <div className='contentx'>
          <div className='content-left'>
            {/* content */}
        <div className="btn-box">Projects: </div>

        <div className="btn-box">

        {/* <button>All</button>
        <button>Full Stack</button>
        <button>Frontend</button>
        <button>Backend</button> */}

      </div>

      <div className='proj'>


              <Card src={finance} title="Finance Tracker" description="Finance tracking app that helps breakdown user's finances"urlCode="https://github.com/tyohare/personal_finance_app" urlDemo="" hasDemo={true}/>
              <Card src={notefly} title="Note Fly" description="React appication that quickly creates and manages notes on the fly"urlCode="https://github.com/tyohare/note_fly" urlDemo="https://noteflytyler.herokuapp.com/" hasDemo={true}/>

              <Card src={mql4} title="Siren EA" description="Expert Advisor built in MQL4" urlCode="https://github.com/tyohare/Siren" hasDemo={false}/>
              <Card src={net} title="Instuctional Dashboard" description="Dashboard for instructors that creates and visualizes learning networks using R, Shiny, SQL, and visNetwork" urlCode="https://github.com/tyohare/Instructional-Dashboard" urlDemo="https://youtu.be/4yoQoBPY6qk" hasDemo={true}/>

              <Card src={cshell} title="CShell" description="An interactive C based shell that can run bash commands as well as other custom commands"urlCode="https://github.com/tyohare/CShell" hasDemo={false}/>
              <Card src={myWeb} title="Portfolio Website" description="The site you're on right now! Built with HTML, CSS, React, Framer Motion, and Chakra UI " urlCode="https://github.com/tyohare/polardev" urlDemo="https://tylerohareweb.herokuapp.com/" hasDemo={false}/>

            </div>

            </div>

          </div>
          </div>



    <ul class="social">

    </ul>




</div>

  )
}

export default Projects
