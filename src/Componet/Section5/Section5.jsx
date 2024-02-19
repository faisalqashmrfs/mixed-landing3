

import img2 from "../../assets/imges/line.png"
import CardSection5 from '../CardSection5 copy/CardSection5'
import img3 from "../../assets/imges/pr1.png"
import img4 from "../../assets/imges/pr2.png"
import img5 from "../../assets/imges/pr3.png"
import img6 from "../../assets/imges/pr4.png"
import "./Section5.css"
const Section5 = () => {
  return (
    <>
    <div className='img-infinite'>
    <img src={img2} alt="" className='linee'/>
    </div>
 
  
   <div className="main-secyion2">
    <h3>Trending Components </h3>
    <button className='btn-recent'>Browse all</button>
   </div>
    <div className='Section2'>

<CardSection5 img={img3}title= "Mercury" paragraph="Figma .Framer" />
<CardSection5 img={img4}title= "Spectra" paragraph="Figma .Framer" />
<CardSection5 img={img5}title= "Verve" paragraph="Figma .Webflow" />
<CardSection5 img={img6}title= "Slate" paragraph="Figma .Webflow" />


    </div>
    
    </>
  )
}

export default Section5