import React from "react"
import './Footer.css'
import Footervideo from '../../asset/asdasd.webm'
import Logo from '../../asset/logo.png'
function Footer() {
    return (
      <div className="FooterContainer">
      <div className="footerrowmain">
        <div className="colmFooter"> 
        <div className="parent-header">
     <div className="background-container"></div>
     <a href="" className='anckertag-header'><video width="100%" height="100%" autoPlay loop muted >
        <source autoPlay loop muted src={Footervideo} width="100%" height="100%" type="video/mp4" /></video>
        <img src={Logo} alt="" />
        </a>
</div>
<p className="footerparagraph" style={{fontSize:"12px",color:'#A1A2A3',lineHeight:'15px'}}>The Premier CS:GO case and case battle site.</p>
<p className="footerparagraph" style={{fontSize:"12px",color:'#A1A2A3',lineHeight:'15px'}}>Clash.gg is owned and operated by Rust Clash Entertainment Ltd located at Thermistokli Dervi, 48, 3rd Floor, Office 306, 1065, Nicosia, Cyprus</p>
<p className="footerparagraph" style={{fontSize:"12px",color:'#A1A2A3',lineHeight:'15px'}}>Bigwals © All rights reserved 2023</p>
</div>
        <div className="colmFooter">
            <h5>Information</h5>
            <p className="footerparagraph">Fairness <br></br>
Questions<br></br>
Terms of Service<br></br>
Privacy Policy<br></br>
Legal Opinion<br></br>
AML Policy<br></br>
Meet the Team<br></br>
About Us<br></br>
Contact Us<br></br>
Disclaimer</p>
            </div>
        <div className="colmFooter">
        <h5>Information</h5>
            <p className="footerparagraph">Fairness <br></br>
Questions<br></br>
Terms of Service<br></br>
Privacy Policy<br></br>
Legal Opinion<br></br>
AML Policy<br></br>
Meet the Team<br></br>
About Us<br></br>
Contact Us<br></br>
Disclaimer</p>
        </div>
        <div className="colmFooter">
        <h5>Information</h5>
            <p className="footerparagraph">Fairness <br></br>
Questions<br></br>
Terms of Service<br></br>
Privacy Policy<br></br>
Legal Opinion<br></br>
AML Policy<br></br>
Meet the Team<br></br>
About Us<br></br>
Contact Us<br></br>
Disclaimer</p>
        </div>
        <div className="colmFooter">
        <h5>Information</h5>
            <p className="footerparagraph">Fairness <br></br>
Questions<br></br>
Terms of Service<br></br>
Privacy Policy<br></br>
Legal Opinion<br></br>
AML Policy<br></br>
Meet the Team<br></br>
About Us<br></br>
Contact Us<br></br>
Disclaimer</p>
        </div>
        <div className="colmFooter">
        <h5>Information</h5>
            <p className="footerparagraph">Fairness <br></br>
Questions<br></br>
Terms of Service<br></br>
Privacy Policy<br></br>
Legal Opinion<br></br>
AML Policy<br></br>
Meet the Team<br></br>
About Us<br></br>
Contact Us<br></br>
Disclaimer</p>
        </div>
      </div>
        </div>
    );
}
export default Footer