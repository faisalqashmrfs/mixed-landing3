import React from 'react'
import { FaSearch } from 'react-icons/fa'
import NavBar from '../Navbar/Navbar'
/* import NavBar from "../NavBar/NavBar" */
import img1 from "../../assets/imges/1.png"
import img2 from "../../assets/imges/2.png"
import img3 from "../../assets/imges/f.png"
import "./Header.css"
const Header = () => {
 
  return (
    <div className='header'>
      <NavBar />

<div className="main-header">
  <button className='br-headerbtn'>Products for Designers & Devs</button>
  <h1 className='br-headertitle'>
  The creators library of components & templates
  </h1>
  <p className='br-headerpara2'>Flowbase is the world's largest premium library of Webflow, Figma & Framer
components and tools. Build better, faster with Flowbase.</p>
<div className='inputsearch'>
<FaSearch className='iconn' />
<input type="text" placeholder="Search components (eg. Footer, Header)" />

</div>

<div className="br-btns">
  <button>
<img src={img1} alt="" />
Framer
  </button>
  <button>
<img src={img2} alt="" />
webflow
  </button>
  <button>
<img src={img3} alt="" />
figma
  </button>

</div>
<div className="br-button">
  <button>Components</button>
  <button>Templates</button>
  <button>Wireframes</button>
  <button>Headers</button>
</div>
<div className="br-button">
  <button>UI Elements & Cards</button>
  <button>Club Access</button>
  <button>Footers</button>
  <button>Pricing</button>
</div>
<div className="br-button">
  <button>Chrome Extension</button>
  <button>ChalkUI</button>

</div>
</div>
    </div>
  )
}

export default Header