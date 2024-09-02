import '../styles/About.css'
import pfp from '../images/ruri.jpg'

export default function About() {
    return(
        <div className='about-container'>
            <div className='about-top'>
                <img className="pfp" src={pfp} alt='pfp'></img>
                <div className='about-title'>
                    <span className="accent bold title-font">Vicki Vo</span>
                    <p className="small-font top-spacing">Full-stack developer, illustrator</p>
                    <p className="small-font">Former developer intern at <a href="https://www.elevancehealth.com/" className="underline accent small-font" target='_blank' rel="noreferrer">Elevance Health</a></p>
                </div>
            </div>
            <hr className='bottom-spacing'></hr>


            <div className='about-me'>
                <p className="small-font top-spacing">hi! i'm vicki, a developer and illustrator. &nbsp;i . . .</p>
                <ul className='list top-spacing'>
                    <li className="small-font">do web development,</li>
                    <li className="small-font">create 2d games, and</li>
                    <li className="small-font">draw in my free time!</li>
                </ul>
                <p className="small-font top-spacing">interested in working with me? send me an email at <span className='accent underline small-font'>vovincent32@gmail.com</span> !</p>
                <p className="small-font bottom-spacing">c:</p>
            </div>
            <hr className='bottom-spacing'></hr>


            <div className='others'>
                <h1 className='top-spacing bold'>EDUCATION</h1>
                <div className='indent'>
                    <p className="small-font">Bachelor of Science in Computer Science</p>
                    <p className="smaller-font">University of California, Riverside</p>
                    <p className="smaller-font">(Class of 2024)</p>
                </div>
                <br></br>

                <h1 className='top-spacing bold'>OTHER INTERESTS</h1>
                <ul className='list top-spacing'>
                    <li className="small-font">Unity/Godot game development</li>
                    <li className="small-font">H&M shopping enthusiast</li>
                    <li className="small-font">Hip hop dancing</li>
                    <li className="small-font">bwaaaaaaaaaa :3c</li>
                    <li className="small-font">My <a className='accent small-font underline' href='https://www.instagram.com/wiiipaah_/?hl=en' target='_blank' rel="noreferrer">digital art!</a></li>
                </ul>
            </div>

            
        </div>
    )
}