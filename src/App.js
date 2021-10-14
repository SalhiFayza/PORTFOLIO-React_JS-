import f from './images/f.jpg';
import facebook from './images/facebook.png';
import link from './images/link.png';
import github from './images/github.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import './App.css';
import Nav from './components/Nav.js'
function App() {
  return (
    <div className="header">
    <nav>
        <a href="" class="logo">Salhi Fayza</a>
        <div class="nav-links">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="/Service">Services</a>
                </li>
                <li>
                    <a href="/Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Connect">Connect</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="left-sidebar"></div>
    <div class="row">
        <div class="left-col">
            <img src={f} alt=""/>
        </div>
        <div class="right-col">
            <h1> Salhi Fayza </h1>
            <h1>Font-End Developer </h1>
            <p>I am a Freelance Mobile Web And Apps developer. If you need any Mobile App for your company then contact me for more information.</p>
            <div class="social-media">
                <div class="icon">
                    <img src={facebook}/>
                    <a href="https://facebook.com">
                        <img src={link}/>
                    </a>
                </div>
                <div class="icon">
                    <img src={twitter}/>
                    <a href="https://twitter.com">
                        <img src={link}/>
                    </a>
                </div>
                <div class="icon">
                    <img src={github}/>
                    <a href="https://facebook.com">
                        <img src={link}/>
                    </a>
                </div>
                <div class="icon">
                    <img src={linkedin}/>
                    <a href="https://facebook.com">
                        <img src={link}/>
                    </a>
                </div>
                 </div>
        </div>
    </div>
    </div>
  );
}

export default App;
