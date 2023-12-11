import './DepositButton.css';


function ButtonSkin({Img,FirstHeading,Second,Price,HandleName}) {


  return (
     <>
     <div className="mainDepositSkin" onClick={HandleName}>
        <div className="rowDepositSkin">
            
          <div className="skinDepositButton">
            
            <div className="imagedepositskinButton">
<img src={Img} alt="cslo" />
            </div>
          </div>
          <div className="skinDepositButtonSS">
            <p className="firstdeadingSkin">{FirstHeading}</p>
            <p className="seconddeadingSkin">{Second}</p>
            <p className="thirdheadingSkin">{Price}</p>
            </div>
        </div>
     </div>
     
     </>
  );
}

export default ButtonSkin


