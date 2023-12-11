import React from "react"
import './Pages.css'
import DrawerProfitPage from '../../dropdownButtonprofile/DrawerProfitPage'
import Footer from "../../footer/Footer";
function Home() {
    return (
      <div className="Home-first-container">
        <DrawerProfitPage/>
        <Footer/>
        </div>
    );
}
export default Home