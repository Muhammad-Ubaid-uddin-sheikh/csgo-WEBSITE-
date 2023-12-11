import './DepositButton.css';
import ButtonSkin from './ButtonSkin';
import ImgOne from '../../../asset/csgo.webp'
import Dota from '../../../asset/dota.webp'
import Rust from '../../../asset/rust.webp'
import Webmoney from '../../../asset/webmoney.webp'
import Card from '../../../asset/creditcard.webp'
import Newslatter from '../../../asset/neteller.webp'
import GiftCard from '../../../asset/paypal.webp'
import Soft from '../../../asset/sofort.webp'
import neoSurf from '../../../asset/neteller.webp'
import union from '../../../asset/unionpay.webp'
import Webchat from '../../../asset/wechat.webp'
import Bitcoin from '../../../asset/bitcoin.webp'
import Etherium from '../../../asset/ethereum.webp'
import Liteicon from '../../../asset/litecoin.webp'
import Dogecoin from '../../../asset/dogecoin.webp'
import Usdt from '../../../asset/usdt.webp'
import Usdc from '../../../asset/usdc.webp'
import Ripple from '../../../asset/ripple.webp'
import Chainlink from '../../../asset/chainlink.webp'
import Solana from '../../../asset/solana.webp'
import Promotion from '../../../asset/promotion.webp'
import CridetCard from './cashsec/CridetCard';
import React, { useState } from 'react';
import BitcoinNew from './cashsec/Bitcoin'
function App() {
const [bitcoin , setbitcon]= useState(false)
  const [isTextVisible, setTextVisibility] = useState(false);

  const bitcoinshowText = () => {
    setbitcon(true);
  };

  const bitconhideText = () => {
    setbitcon(false);
  };

  const showText = () => {
    setTextVisibility(true);
  };

  const hideText = () => {
    setTextVisibility(false);
  };
  return (
     <>
     <div className="mainFirstDeposit">
           <h3 className='DepositHeadigsall'>skins</h3>
        <div className="rowmainDeposit">
    
          <div className="skinSection"> <ButtonSkin Img={ImgOne} FirstHeading='CS:GO'  Second='Steam' Price='Instant'/></div>
          <div className="skinSection"> <ButtonSkin Img={Dota} FirstHeading='Dota 2'  Second='External' Price='Instant'/></div>
          <div className="skinSection"> <ButtonSkin Img={Rust} FirstHeading='RUST'  Second='External' Price='Instant'/></div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
        </div>
     </div>
     <div className="mainFirstDeposit">
           <h3 className='DepositHeadigsall'>Cash</h3>
        <div className="rowmainDeposit">
    
          <div className="skinSection"> <ButtonSkin Img={Card} FirstHeading='Creditcard'  Second='Zen Payments' Price='1 USD = 1.46 gems' HandleName={showText}/>
          <div>
      {/* <button onClick={showText}>Show Text</button> */}
      
      {isTextVisible && (
        <div className="text-containerCard">
          <div className="textRowCridetCard">
          <button className='ButtonBackStyle' onClick={hideText}>Back</button>
          <p className="firstdeadingSkin" id='FirsthadingSkinSd'>Creditcard</p>
            <p className="thirdheadingSkin" id='ThirdheadingSkiniss'>1 USD = 1.46 gems</p>
          </div>

          <div className="text" >
           <CridetCard/>
          </div>
          
        </div>)
      }
      </div>
          
          </div>
          <div className="skinSection"> <ButtonSkin Img={Card} FirstHeading='Creditcard'  Second='Checkout' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={GiftCard} FirstHeading='Giftcard'  Second='Kinguin, G2A' Price='1 USD = 1.45 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Card} FirstHeading='Trustly'  Second='Zen Payments' Price='1 USD = 1.45 gems' HandleName={showText}/>
  
      
    
          
          </div>
          <div className="skinSection"> <ButtonSkin Img={Webmoney} FirstHeading='WebMoney'  Second='Zen Payments' Price='1 USD = 1.45 gems' HandleName={showText}/>
          
     
          
          </div>
          <div className="skinSection"> <ButtonSkin Img={Newslatter} FirstHeading='Neteller'  Second='Zen Payments' Price='Instant' HandleName={showText}/>
          
        
          
          </div>
        {/* </div>
        <div className="rowmainDeposit" style={{paddingTop:'15px'}}> */}
    
          <div className="skinSection"> <ButtonSkin Img={Soft} FirstHeading='Sofort'  Second='Zen Payments' Price='1 USD = 1.46 gems' HandleName={showText} />
          
          
          
          </div>
          <div className="skinSection"> <ButtonSkin Img={neoSurf} FirstHeading='Neosurf'  Second='Checkout' Price='1 USD = 1.46 gems' HandleName={showText} /></div>
          <div className="skinSection"> <ButtonSkin Img={union} FirstHeading='UnionPay'  Second='Kinguin, G2A' Price='1 USD = 1.45 gems' HandleName={showText} /></div>
          <div className="skinSection"> <ButtonSkin Img={Webchat} FirstHeading='WeChat'  Second='Zen Payments' Price='1 USD = 1.45 gems' HandleName={showText} /></div>
          {/* <div className="skinSection"> </div>
          <div className="skinSection"> </div> */}
        </div>
     </div>

     <div className="mainFirstDeposit">
           <h3 className='DepositHeadigsall'>Cryptocurrencies</h3>
        <div className="rowmainDeposit">
    
          <div className="skinSection"> <ButtonSkin Img={Bitcoin} FirstHeading='Bitcoin'  Second='  Clash' Price='1 USD = 1.46 gems' HandleName={bitcoinshowText}/>
          
          <div>
      {/* <button onClick={showText}>Show Text</button> */}
      
      {bitcoin && (
        <div className="text-containerCard">
          <div className="textRowCridetCard">
          <button className='ButtonBackStyle' onClick={bitconhideText}>Back</button>
          <p className="firstdeadingSkin" id='FirsthadingSkinSd'>Bitcoin</p>
            <p className="thirdheadingSkin" id='ThirdheadingSkiniss'>1 USD = 1.46 </p>
          </div>

          <div className="text" >
           <BitcoinNew/>
          </div>
          
        </div>)
      }
      </div>
          
          
          </div>
          <div className="skinSection"> <ButtonSkin Img={Etherium} FirstHeading='Ethereum'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Liteicon} FirstHeading='Litecoin'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Dogecoin} FirstHeading='Dogecoin'  Second=' Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Usdt} FirstHeading='USDT (ERC20)'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Usdc} FirstHeading='USDC'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
        {/* </div> */}
        {/* <div className="rowmainDeposit" style={{paddingTop:'15px'}}> */}
    
          <div className="skinSection"> <ButtonSkin Img={Ripple} FirstHeading='Ripple'  Second='  Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Chainlink} FirstHeading='Chainlink'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Solana} FirstHeading='Solana'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
          {/* <div className="skinSection"></div>
          <div className="skinSection"></div>
          <div className="skinSection"></div> */}
        </div>
        
        </div>
        <div className="mainFirstDeposit">
           <h3 className='DepositHeadigsall'>Free</h3>
        <div className="rowmainDeposit">
    
          <div className="skinSection"> <ButtonSkin Img={Promotion} FirstHeading='Promotion'  Second='  Clash' Price='Instant'/></div>
          {/* <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div> */}
          
          </div></div>
     </>
  );
}

export default App;


