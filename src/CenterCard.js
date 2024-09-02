import React, { useState, useEffect } from 'react'
import profile from './images/profile.svg'
import folder from './images/folder.svg'
import mail from './images/mail.svg'
import paperclip from './images/paperclip.svg'

import About from './components/About'
import Work from './components/Work'
import Links from './components/Links'
import Contact from './components/Contact'

import click from './audio/click.wav'
import close from './audio/close.mp3'
//import swtch from './audio/switch.mp3'

function playClick() {
  var snd = new Audio(click)
  snd.play();
  snd.currentTime=0;
}
function playClose() {
  var snd = new Audio(close)
  snd.play();
  snd.currentTime=0;
}

const sizes = {
  'about-cnt': { width: '900px', height: '550px' },
  'work-cnt': { width: '900px', height: '550px' },
  'links-cnt': { width: '600px', height: '220px' },
  'contact-cnt': {width: '900px', height: '500px'}
}



export default function CenterCard() {
  const [windowsIDList, setWindowsIDList] = useState([]);  //keep track of which window is open

  useEffect( () => {
    const handleClick = (event) => {
      //Grab ID of card that was clicked && window to display [figure out where close plays here]
      const targetID = event.currentTarget.getAttribute('data-target');
      const targetWindow = document.getElementById(targetID);

      //Closing the window
      if (event.target.classList.contains('close')) { //if x button was pressed
        setWindowsIDList(windowsIDList.filter(windowID => windowID !== targetID))  //only keeps windows that dont match the current targetWindow (rids of current pressed window)
        targetWindow.style.display = 'none'; //Hide Window
        return;
      }

      //Opening the window
      else if (!windowsIDList.includes(targetID)) {
        setWindowsIDList((prevList) => [...prevList, targetID]);  //take old ID list, and adds new targetID onto it
        targetWindow.style.display = 'block'; //Display this Window
        targetWindow.style.transition = 'display 1.3s ease';
        return;
      }
    }

    //1) Add Event Listeners to each Card & X button
    const iconCards = document.querySelectorAll('.icon-card');
    iconCards.forEach(card => {
      card.addEventListener('click', handleClick)
    })
    const xmarks = document.querySelectorAll('.close');
    xmarks.forEach(x => {
      x.addEventListener('click', handleClick)
    })

    //Clean up: Remove Listeners
    return () => {
      iconCards.forEach(card => {
        card.removeEventListener('click', handleClick);
      });
      xmarks.forEach(x => {
        x.removeEventListener('click', handleClick)
      })
    };
  }, [windowsIDList]); //only run useEffect when windowID is set to different card
  
  
  /* Create Draggable Windows */
  /* FIXME: windows shouldnt be able to drag offscreen/viewport*/
  /* FIXME: Z-index when click */
  /* FIXME: opening/closing window transitions*/

  useEffect( () => {
    //const allWindows = document.querySelectorAll('.content');
    const bars = document.querySelectorAll('.bar2');
    let offsetX, offsetY;
    let currentWindow = null;

    const move = (e) => {
      //Update the content/div's position based on the mouse position (offsets)
      if (currentWindow) {
        currentWindow.style.left = `${e.clientX - offsetX}px`;
        currentWindow.style.top = `${e.clientY - offsetY}px`;
      }
    }

    bars.forEach(bar => {
      bar.addEventListener("mousedown", (e) => {
        //allows you to drag content AT that mouse position on the content
        currentWindow = bar.parentElement;
        offsetX = e.clientX - currentWindow.offsetLeft; //mouseX = current x mouse pos - distance of content from left screen
        offsetY = e.clientY - currentWindow.offsetTop; //mouseY = current y mouse pos - distance of content from top screen
        document.addEventListener("mousemove", move);
      })
    })

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    })
  })
  
  


  return (
    <>
      <div className="container">

        <div className="bar" style={{cursor: 'default'}}>
        </div>

        <div className='titlebox'>
          <h1 className="title"> hallo! <span className="title accent">i'm vicki &gt;:3</span></h1>
          <p>web developer, game developer, and illustrator</p>
        </div>


        <div className="iconbox">
          <div className='icon-card' data-target='about-cnt' onClick={playClick}>
            <img className="icon" src={profile} alt='profile'></img>
            <p>about me</p>
          </div>

          <div className='icon-card' data-target='work-cnt' onClick={playClick}>
            <img className="icon" src={folder} alt='folder'></img>
            <p>my work</p>
          </div>

          <div className='icon-card' data-target='links-cnt' onClick={playClick}>
            <img className="icon" src={paperclip} alt='paperclip'></img>
            <p>my links</p>
          </div>

          <div className='icon-card' data-target='contact-cnt' onClick={playClick}>
            <img className="icon" src={mail} alt='mail'></img>
            <p>contact me</p>
          </div>
        </div>
      </div>


      
      {/* Each content box has 1) different size 2) different format */}
      <div id='about-cnt' className='content' style={sizes['about-cnt']}>
        <div className="bar2">
          <i class="fa-solid fa-xmark close" data-target='about-cnt' onClick={playClose}></i>
          <p className="titlebar">about me</p>
        </div>
        <About />
      </div>

      <div id='work-cnt' className='content' style={sizes['work-cnt']}>
        <div className="bar2">
          <i class="fa-solid fa-xmark close" data-target='work-cnt' onClick={playClose}></i>
          <p className="titlebar">my work</p>
        </div>
        <Work />
      </div>

      <div id='links-cnt' className='content' style={sizes['links-cnt']}>
        <div className="bar2">
          <i class="fa-solid fa-xmark close" data-target='links-cnt' onClick={playClose}></i>
          <p className="titlebar">my links</p>
        </div>
        <Links />
      </div>

      <div id='contact-cnt' className='content' style={sizes['contact-cnt']}>
        <div className="bar2">
          <i class="fa-solid fa-xmark close" data-target='contact-cnt' onClick={playClose}></i>
          <p className="titlebar">contact me</p>
        </div>
        <Contact />
      </div>
    </>
  );
}

//FIXME: cleaning up
//FIXME: Responsive CSS