import '../styles/Work.css'
import ryo from '../images/ryo.png'
import ina from '../images/ina.png'
import lemon from '../images/lemon.png'
import website from '../images/website.png'
import mic from '../images/mic-check.png'
import ta from '../images/ta.png'

export default function Work() {
    return (
        <div className='work-container'>

            <div className='skills-container large-spacing'>
                <div className='column bottom-spacing'>
                    <h1 className='top-spacing bold'>TOOLS</h1>
                    <div className='skills'>
                        <div className='skill'>CSP</div>
                        <div className='skill'>Figma</div>
                        <div className='skill'>MS Office</div>
                        <div className='skill'>MUI</div>
                        <div className='skill'>Git/Github</div>
                        <div className='skill'>VS Code</div>
                        <div className='skill'>Jira</div>
                    </div>
                </div>

                <div className='column'>
                    <h1 className='top-spacing bold'>DEVELOPMENT</h1>
                    <div className='skills'>
                        <div className='skill'>C++</div>
                        <div className='skill'>Python</div>
                        <div className='skill'>HTML/CSS</div>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>React.js</div>
                        <div className='skill'>Next.js</div>
                        <div className='skill'>Node.js</div>
                        <div className='skill'>SQL</div>
                        <div className='skill'>Unity</div>
                    </div>
                </div>
            </div>
            <hr className='bottom-spacing'></hr>

            <h1 className='top-spacing bold bottom-spacing'>DEVELOPMENT</h1>
            <div className='development'>
                <div className='align'>
                    <a href='https://github.com/Trufflz/trufflz.github.io' target='_blank' rel="noreferrer"><img className='proj' src={website} alt='website' title='My Personal Website!!!'></img></a>
                    <p className='small-font'>This very site!</p>
                    <p className='smaller-font'>Inspo: Sharlene Yap</p>
                </div>
                <div className='align'>
                    <a href='https://github.com/UCR-Senior-Design/course-project-rvea' target='_blank' rel="noreferrer"><img className='proj' src={ta} alt='ta' title='UCR TA Hiring Website'></img></a>
                    <p className='small-font'>UCR TA Hiring Website</p>
                    <p className='smaller-font'>Sept 2023 - March 2024</p>
                </div>
                <div className='align'>
                    <a href='https://devpost.com/software/mic-check' target='_blank' rel="noreferrer"><img className='proj' src={mic} alt='mic' title='Mic-Check Game'></img></a>
                    <p className='small-font'>Mic-Check Game</p>
                    <p className='smaller-font'>Hackathon proj w/ mah friend :3</p>
                </div>
            </div>
            <p className='small-font large-spacing top-spacing spacing'>See more on <a className='accent small-font underline' href='https://github.com/Trufflz' target='_blank' rel="noreferrer">Github</a></p>
            <hr className='bottom-spacing'></hr>

            
            <h1 className='top-spacing bold bottom-spacing'>ILLUSTRATIONS</h1>
            <div className='arts'>
                <a href='https://www.instagram.com/p/C923-YMywjG/?hl=en&img_index=1' target='_blank' rel="noreferrer"><img className='art' src={ryo} alt='ryo' title='Fanart: Ryo Yamada'></img></a>
                <a href='https://www.instagram.com/p/C3Rox82O-NS/?hl=en' target='_blank' rel="noreferrer"><img className='art' src={lemon} alt='lemon' title='Fanart: Lemon Irvine'></img></a>
                <a href='https://www.instagram.com/p/C9BMcNpSVdZ/?hl=en&img_index=1' target='_blank' rel="noreferrer"><img className='art' src={ina} alt='ina' title="Fanart: Ninomae Ina'Nis"></img></a>
            </div>
            <p className='small-font large-spacing top-spacing'>See more on <a className='accent small-font underline' href='https://www.instagram.com/wiiipaah_/?hl=en' target='_blank' rel="noreferrer">Instagram</a></p>


            




        </div>
    )
}