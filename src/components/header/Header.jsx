import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import Logo from '../../asset/logo.png'
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import { GiBattleAxe , GiUpgrade ,GiCrownCoin ,GiSpinningBlades , GiUnlitBomb ,GiChicken } from 'react-icons/gi'
import {FaBriefcase , FaFlagCheckered} from 'react-icons/fa';
import {AiFillGift} from 'react-icons/ai'
import DigitalClock from './DigitalClock';
import footerVideo from '../../asset/asdasd.webm'
// import Dropdownlast from './Dropdownlast'
import imgNewspi from '../../asset/cobwebsFull (1).webp'
import Button from './Button'
import ButtonDeposit from './ButtonDeposit'
import ButtonWithdraw from './buttonWithdraw/ButtonWithdraw'
import DropdownButtonProfile from '../dropdownButtonprofile/DropdownButtonProfile'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-#242624" style={{background:'#242624',position: 'fixed' ,width: '100%',zIndex: '99', padding:'0'}}>
      <Container style={{margin:'10px 20px'}}>
       
        <div className="first-main-div-header">
        <div className="parent-header">
     <div className="background-container"><img src={imgNewspi} alt="" height="148" width='512' /></div>
     <a href="" className='anckertag-header'><video width="100%" height="100%" autoPlay loop muted >
        <source autoPlay loop muted src={footerVideo} width="100%" height="100%" type="video/mp4" /></video>
        <img src={Logo} alt="" />
        </a>
</div>

        </div>
        <div className="second-main-div-header-">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='editNabarHeaderFirst'  ><Link to='/'>< HomeIcon id='home-icon-header' /> </Link></Nav.Link>
            <NavDropdown   className='navigation-drop-dwon' title="Games" id="basic-nav-dropdown " >
              <NavDropdown.Item href="#action/3.1"><Link id='links-font-color'> <GiBattleAxe id='icon-id-fonts'/> <div className='dropdownHeaderEdits'> Battles <p className='HeaderEditParagrh'>Pvp Case Opening</p> </div></Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link id='links-font-color'> <GiUpgrade id='icon-id-fonts'/><div className='dropdownHeaderEdits'> Upgrader <p className='HeaderEditParagrh'>Upgrade your skins</p> </div></Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link id='links-font-color'> <GiCrownCoin id='icon-id-fonts'/> <div className='dropdownHeaderEdits'>Jackpot <p className='HeaderEditParagrh'>Win a huge pot</p> </div> </Link></NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
              <Link id='links-font-color'><GiSpinningBlades id='icon-id-fonts'/> <div className='dropdownHeaderEdits'> Roulette<p className='HeaderEditParagrh'>Spin to win!</p> </div>  </Link> 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              <Link id='links-font-color'><GiUnlitBomb id='icon-id-fonts'/> <div className='dropdownHeaderEdits'> Mines <p className='HeaderEditParagrh'>Uncover the mines</p> </div></Link> 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              <Link id='links-font-color'><GiChicken id='icon-id-fonts'/> <div className='dropdownHeaderEdits'> Crash <p className='HeaderEditParagrh'>Watch the chicken burn!</p> </div> </Link> 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              <Link id='links-font-color'> <FaBriefcase id='icon-id-fonts'/> <div className='dropdownHeaderEdits'> Cases <p className='HeaderEditParagrh'>Open Skins</p> </div> </Link> 
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id='editNabarHeader' ><Link to='/' id='textLinksALl'>< AiFillGift id='home-icon-header' style={{color:"white",fontSize:'19px',marginBottom:'6px'}} /> Rewards</Link></Nav.Link>
          <Nav.Link id='editNabarHeaderFirst'  style={{marginLeft:'13px'}} ><Link to='/' style={{color:'#848B8D',textDecoration:'none',display:'flex',textAlign:'initial'}} > <FaFlagCheckered id='home-icon-header' style={{color:"#848B8D",fontSize:'19px',marginTop:'6px'}} /><div className='digitalCounterdiv'> <span className='editSpanHeader'>10K</span> Race <p className='coundwonHeader'><DigitalClock/> </p></div></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        <div className="thirdContainerDiv">
          <div className="rowThirdcontainer">
          {/* <Link to='button' >  <button  className='ButtonStylesHeader'>Sign In</button></Link> */}
           <ButtonDeposit/>
           <ButtonWithdraw/>
           <Button/>
          {/* <Dropdownlast/> */}
          <DropdownButtonProfile/>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;