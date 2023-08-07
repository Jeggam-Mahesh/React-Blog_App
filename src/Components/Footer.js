import React from "react";
import { Link } from "react-router-dom";
import socialMediaIcon2 from './assets/socialMediaIcon2.png'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div id='intro'>
          <span id="the">The</span>
          <span id="siren">Siren</span>
          <h5>
            The Siren is India's leading platform where you can find all the
            information about different categories like technology ,fitness
            ,food ,bollywood,hollywood.in a easy way
          </h5>
          <div id='socialTemp' >
            <img id='footerSocial' src={socialMediaIcon2} alt="not found" width='300px'/>
           </div>
          
        </div>
        <div>
            <h2>Services</h2>
            <ul id='list'>
                <li> <Link to='/' className="link">Home</Link></li> 
                <li><Link to='/bollywood' className="link">Bollywood</Link></li>
                <li><Link to='/technology' className="link">Technology</Link></li>
                <li><Link to='/hollywood' className="link">Hollywood</Link></li>
                <li> <Link to='/fitness' className="link">Fitness</Link></li>
                <li><Link to='/food' className="link">Food</Link></li>
            </ul>
        </div>
        <div>
            <h2>Resources</h2>
            <ul>
            <li>Blog</li>
            <li>Help center</li>
            <li>careers</li>
            <li>Contact Us</li>
            </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
