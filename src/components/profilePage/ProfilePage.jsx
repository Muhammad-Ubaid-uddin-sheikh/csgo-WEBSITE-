import React from "react"
import './ProfilePage.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineMinus} from 'react-icons/ai'
import Avatar from '../../asset/avatar-anonymous.webp'
import Buttonamount from "./Buttonamount"
import {RiCopperCoinFill} from 'react-icons/ri'
import {CgCircleci} from 'react-icons/cg'
function Home() {
  
    return (
      <div className="HomePageLayoutDrawer">
        <div className="subMainHomePage">

            <div className="rowprofilePageMiain">

{/* /////////// First Section Account div start //////////////////////////////// */}
<div className="colmsubprofiles">
   <div className='mainFirstCmprofiles'> <div className="textAndIcon"><BsFillPersonFill id='icon-id-fonts' style={{ marginLeft:'5px',marginRight: '5px',
}}/> Profile </div> <AiOutlineMinus style={{color:'#848B8D'}}/> <div className="accountIdprofile">Account ID: CL-818633</div></div>
   <div className="textChangedProfile"> <p className="colmtagparagraph"> <span className="colorCHnaged ColorChnaged"> 0 </span> / 1 XP</p></div>
     </div>
<div className="colmProfileFirst">

<div  className="css-1sx87xm"></div>
<div className="accountMainDiv">

 <div className="accountAmoutdivFirst">

<div className="twosubOrDivsFirst">
    <div className="mainaccountdin">
        <div className="ThreeDivForSUbdivimg">
            <img src={Avatar} alt="" />
        </div>
        <div className="ThreeDivForSUbdivText"><span className="css-mlkat6">Anonymous293543</span></div>
        <div className="ThreeDivForSUbdiv">Member since  October 23, 2023</div>
    </div>
</div>
<div className="twosubOrDivs">
<div className="colmLeftaccount"><Buttonamount buttontype="Trade URL" /><Buttonamount buttontype="Settings" /></div>
<div className="colmRightaccount"><Buttonamount buttontype="Balance History" /><Buttonamount buttontype="Game History" /></div>

</div>

 </div>
 <div className="accountAmoutdivSecondDash"></div>
 <div className="accountAmoutdivThird">

<div className="pricingfourColm"><div className="textColmfirst">DEPOSITED</div> <div className="svgAndPricediv"><RiCopperCoinFill style={{ color: '#E7B503' , marginTop: '-5px'}} /> <span className="dynamicpring">0.00 </span> </div> </div>
<div className="accountAmoutdivSecondDashLeft"></div>
<div className="pricingfourColm"><div className="textColmfirst">WITHDRAWN</div><div className="svgAndPricediv"><RiCopperCoinFill style={{ color: '#E7B503' , marginTop: '-5px'}}/> <span className="dynamicpring">0.00</span> </div></div>
<div className="accountAmoutdivSecondDashLeft"></div>
<div className="pricingfourColm"><div className="textColmfirst">WAGERED</div><div className="svgAndPricediv"><RiCopperCoinFill style={{ color: '#E7B503' , marginTop: '-5px'}}/> <span className="dynamicpring">0.00</span> </div></div>
<div className="accountAmoutdivSecondDashLeft"></div>
<div className="pricingfourColm"><div className="textColmfirst">PROFIT</div><div className="svgAndPricediv"><RiCopperCoinFill style={{ color: '#E7B503' , marginTop: '-5px'}}/> <span className="dynamicpring">0.00</span> </div></div>

 </div>

</div>

</div>
{/* /////////// First Section Account div end//////////////////////////////// */}

{/* /////////// Second Section Misson tree div start //////////////////////////////// */}
<div className="colmsubprofiles"></div>
<div className="paddingsecodSec1222f31">
<div className='mainFirstCmprofiles'> <div className="textAndIcon"><CgCircleci id='icon-id-fonts' style={{ marginLeft:'5px',marginRight: '5px',color:'#22c55e',fontSize:'16px'}}/> Mission Tree </div> <AiOutlineMinus style={{color:'#848B8D',marginLeft:'6px',marginRight:'6px'}}/> <div className="accountIdprofile">Complete missions and earn Gem Rewards</div></div>
  
     </div>
            </div>
        </div>  
        </div>
    );
}
export default Home