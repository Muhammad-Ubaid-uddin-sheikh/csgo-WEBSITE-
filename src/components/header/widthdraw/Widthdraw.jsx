import '../deposit/DepositButton.css';
import ButtonSkin from '../deposit/ButtonSkin';
import ImgOne from '../../../asset/csgo.webp'
import Rust from '../../../asset/rust.webp'
import Bitcoin from '../../../asset/bitcoin.webp'
import Etherium from '../../../asset/ethereum.webp'
import Liteicon from '../../../asset/litecoin.webp'

import Usdt from '../../../asset/usdt.webp'

function App() {
 
  return (
     <>
     <div className="mainFirstDeposit">
           <h3 className='DepositHeadigsall'>skins</h3>
        <div className="rowmainDeposit">
    
          <div className="skinSection"> <ButtonSkin Img={ImgOne} FirstHeading='CS:GO'  Second='Steam'  />
      
      </div>
          <div className="skinSection"> <ButtonSkin Img={ImgOne} FirstHeading='CS:GO'  Second='Waxpeer' /></div>
          <div className="skinSection"> <ButtonSkin Img={Rust} FirstHeading='RUST'  Second='External' Price='Instant'/></div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
        </div>
     </div>

     <div className="mainFirstDeposit">
           <h3 className='DepositHeadigsall'>Cryptocurrencies</h3>
        <div className="rowmainDeposit">
    
          <div className="skinSection"> <ButtonSkin Img={Bitcoin} FirstHeading='Bitcoin'  Second='  Clash' /></div>
          <div className="skinSection"> <ButtonSkin Img={Etherium} FirstHeading='Ethereum'  Second='Clash' /></div>
          <div className="skinSection"> <ButtonSkin Img={Liteicon} FirstHeading='Litecoin'  Second='Clash' /></div>
          <div className="skinSection"> <ButtonSkin Img={Usdt} FirstHeading='USDT (ERC20)'  Second='Clash' /></div>
          <div className="skinSection"></div>
          
          <div className="skinSection"> </div>
        </div></div>
        {/* <div className="rowmainDeposit" style={{paddingTop:'15px'}}>
    
          <div className="skinSection"> <ButtonSkin Img={Ripple} FirstHeading='Ripple'  Second='  Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Chainlink} FirstHeading='Chainlink'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"> <ButtonSkin Img={Solana} FirstHeading='Solana'  Second='Clash' Price='1 USD = 1.46 gems'/></div>
          <div className="skinSection"></div>
          <div className="skinSection"></div>
          <div className="skinSection"></div>
        </div>
        
        </div>
        <div className="mainFirstDeposit">
           <h3 className='DepositHeadigsall'>Free</h3>
        <div className="rowmainDeposit">
    
          <div className="skinSection"> <ButtonSkin Img={Promotion} FirstHeading='Promotion'  Second='  Clash' Price='Instant'/></div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          <div className="skinSection"> </div>
          
          </div></div> */}
     </>
  );
}

export default App;


