import './CridetCard.css'
import bitcoinNew from '../../../../asset/bitcoinNew.webp'
import React, { useState } from 'react';
import { QRCode, Space } from 'antd';
import {BiCopy} from 'react-icons/bi'
import {TiTick} from 'react-icons/ti'
function CridetCard() {
    const [url, setUrl] = useState('3M2x3tC48ycTTrf1PxFoNhkGGaTg1J3H5V');
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyClick = () => {
      // Create a text area element to copy the URL
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
  
      setIsCopied(true);
  
      // Reset the "Copied" message after a brief delay
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    };

  return (
     <>

     <div className="CredetcardIFrstMain" >

      <div className="imageTextCredetCard">
        <img src={bitcoinNew} alt="" />
      </div>
      </div>
      <div className="formDivMain">
         <div className="css-dspxar" style={{alignItems:'center'}}>
        <div className="qrcodeandtext">

        <Space  style={{background:'white'}}>
    <QRCode style={{background:'white'}} type="canvas" value="3M2x3tC48ycTTrf1PxFoNhkGGaTg1J3H5V" />
  </Space>
        </div>
        <div className="qrcodeandtextCopy">
        <p className="seconddeadingSkin" style={{paddingLeft:'20px',fontSize:'15px',fontWeight:'400'}}>Bitcoin Address</p>
             <div className='editcopycode'>
      <input style={{fontSize:'15px'}} type="text" value={url} readOnly />
      <BiCopy id='iconStylesCopied' onClick={handleCopyClick}/>
      {isCopied && <span style={{ color: 'green' }}><TiTick id='iconStylesCopied'/></span>}
    </div>
    <p className="firstdeadingSkin" id='FirsthadingSkinSd' style={{paddingTop:'10px',fontSize:'15px',fontWeight:'400'}}>Send any amount to this address. You will receive your coins and a +46% bonus after the transaction is confirmed.</p>
        </div>
         </div>
         </div>
     
     
     </>
  );
}

export default CridetCard


