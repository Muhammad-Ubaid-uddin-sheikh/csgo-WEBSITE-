import React from "react"
import './Homelayout.css'
import IMG1 from '../../asset/haloweenBackground.webp'
import {BsDot} from 'react-icons/bs'
import {IoLogoGameControllerB} from 'react-icons/io'
import Spider from '../../asset/cobwebsCorner.webp'
import Freecomb from '../../asset/freecase.webp'
import pubm from '../../asset/pumpkins.webp'
import banner from '../../asset/banner.webp'
import  secimg from '../../asset/pass.webp'
import first from '../../asset/custom_case (1).webp'
import secondimg from '../../asset/race (1).webp'
import thirddimg from '../../asset/deposit.webp'
import VideoAgent from '../../asset/agent.webm'
import Dashboard from "../dashboard/Dashboard"
function Home() {
    return (
      <div className="HomePageLayoutDrawer">
        <div className="subMainHomePage">
      <div className="rowHomePageLayout">
<div className="colmHomePageFirst">
    <img src={IMG1} alt="" width="100%" height="100%" className="FirstImageCity" />
    <img src={Spider} alt="" width="100%" className="SecondSpider" />
    <img src={pubm} alt=""  className="ThirdImgHOme" width="100%"/>
    <div className="videoHomeLanding">
    <video width="100%" height="100%" autoPlay loop muted className="VideoEditHomepage" >
        <source autoPlay loop muted src={VideoAgent} width="100%" height="100%" type="video/mp4" /></video>
    </div>
    <div className="contentFIrstDiv">
        <div className="textSub">
        Sign in with <span className="colorCHnaged">Steam</span> , <span className="colorCHnaged">Google</span> or <span className="colorCHnaged">E-mail</span>  to access Clash.gg <br></br>
        <button  className='ButtonStylesHeader Additinal'>Sign In</button>
        </div>
    </div>
</div>
<div className="colmHomePageSecond">
    <img src={Spider} alt="" width="100%" className="SecondSpider" />
    <div className="videoHomeLanding">
    <img src={Freecomb} alt="" className="Image2nd" />
    </div>
    <div className="contentFIrstDiv">
        <div className="textSubNew">
       <p className="SeconddivHom">Free Reward</p>
       <div className="textSubEdit2nd">
       Explore all rewards Clash.gg has to offer.<br></br>
       Claim <span className="colorCHnaged">Daily Cases</span> & earn <span className="colorCHnaged">Rakeback</span>  on all your bets. <br></br>
       <button  className='greenButtonStyles'>View Daily Rewards <BsDot className="iconColorEidt" /></button>
        </div>
        </div>
    </div>
</div>

      </div>
      <Dashboard />
     
   
      <hr />
      <div className="headingFirstHomePg">
        <IoLogoGameControllerB className="iconColorGaming"/><span className="headingTextHomepg">Clash Originals</span>
      </div>
      <hr />

      <div className="thirdsetionHOmepg">
        <img src={banner } alt="" className="imagesthirdFirstHp" />
        <div className="imagesthirdHomepg">
            <img src={secimg} alt="" />
            <div className="mindcontentThird">
                <div className="spantagsThid"><span className="firstspanthird">INTRODUCING</span><br></br><span className="secondspanthird">spooky pass</span></div>
                <div className="textSubEdit2nd">
                Purchase the pass and enjoy its benefits until <span className="colorCHnaged">midnight November 2nd (GMT)</span> <span className="colorCHnaged ColorChnaged">Double</span> your rewards, earn  <span className="colorCHnaged ColorChnaged">extra deposit bonuses</span> & gain a <span className="colorCHnaged ColorChnaged">Special Chat Badge</span> </div>
           
                <button  className='ButtonStylesHeader Additinal'>Explore Pass Benefits</button>    
             </div> 
        </div>
      </div>

      <hr />

      <div className="threecolmDic">
        <div className="rowforThreedivs">
            <div className="comDivTHirdhom"> <div><img src= {first} alt="" height="100%" width="90%" /></div> <div className="textSubEdit2nd" id="textnewEdition">
            <span className="headingTextHomepg" style={{textAlign:'center',color:'#FFA510'}}>Case Creation</span><br></br>
            Case Creation allows players to  <span className="colorCHnaged" style={{fontWeight:'500'}}>create their own cases</span>  with items and odds of their choice. </div>
          
              </div>
            <div className="comDivTHirdhom"><div><img src= {secondimg} alt="" width="86%" height="100%"/></div>
            <div className="textSubEdit2nd" id="textnewEdition">
            <span className="headingTextHomepg" style={{textAlign:'center',color:'#FFA510'}}>10K Daily Race</span><br></br>
            Win up to     <span className="colorCHnaged" style={{fontWeight:'500'}}>5000 Gems</span>  daily on our 10K Daily Race. Earn your spot on the </div>
            </div>
            <div className="comDivTHirdhom"><div><img src= {thirddimg} alt="" width="109%" height="100%" /></div>
            <div className="textSubEdit2nd" id="textnewEdition">
            <span className="headingTextHomepg" style={{textAlign:'center',color:'#FFA510'}}>Case Creation</span><br></br>
            Case Creation allows players to  <span className="colorCHnaged" style={{fontWeight:'500'}}>create their own cases</span>  with items and odds of their choice. </div>
            </div>
        </div>
      </div>
      </div>
        </div>
    );
}
export default Home