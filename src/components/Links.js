import '../styles/Links.css'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import resume from '../images/resume.svg'
import instagram from '../images/instagram.svg'

import click from '../audio/click.wav'
import Resume from '../resume.pdf'
const Linkedin = 'https://www.linkedin.com/in/vvo32/'
const Github = 'https://github.com/Trufflz'
const Instagram = 'https://www.instagram.com/_wiiiyaa/?hl=en'

function playClick() {
    var snd = new Audio(click)
    snd.play();
    snd.currentTime=0;
  }

export default function Links() {
    return(
        <div className="window">
            <a href={Resume} target='_blank' rel="noreferrer">
                <div className='icon-cards' onClick={playClick}>
                    <img className="icon" src={resume} alt='resume'></img>
                    <p>resume</p>
                </div> 
            </a>

            <a href={Linkedin} target='_blank' rel="noreferrer">
                <div className='icon-cards' onClick={playClick}>
                    <img className="icon" src={linkedin} alt='linkedin'></img>
                    <p>linkedin</p>
                </div>
            </a>

            <a href={Github} target='_blank' rel="noreferrer">
                <div className='icon-cards' onClick={playClick}>
                    <img className="icon" src={github} alt='github'></img>
                    <p>github</p>
                </div>
            </a>
            
            <a href={Instagram} target='_blank' rel="noreferrer">
                <div className='icon-cards' onClick={playClick}>
                    <img className="icon" src={instagram} alt='instagram'></img>
                    <p>instagram</p>
                </div>
            </a>
        </div>
    )
}