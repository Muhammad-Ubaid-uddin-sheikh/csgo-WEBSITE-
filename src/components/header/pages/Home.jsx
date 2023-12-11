import React from "react"
import './Pages.css'
import DrawerHome from '../../drawerHome/DrawerHome'
import Footer from "../../footer/Footer";
function Home() {
    return (
      <div className="Home-first-container">
        <DrawerHome/>
        <Footer/>
        </div>
    );
}
export default Home