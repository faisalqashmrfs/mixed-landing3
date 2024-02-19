
import  './Section4.css'
import img2 from "../../assets/imges/line.png"
import CardSection2 from '../CardSection2/CardSection2'
import img3 from "../../assets/imges/trend1.png"
import img4 from "../../assets/imges/trend2.png"
import img5 from "../../assets/imges/trend3.png"
import img6 from "../../assets/imges/trend4.png"

const Section4 = () => {
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

<CardSection2 img={img3}title= "Content Tab" paragraph="Added oct 10,2023 in" head="Contact"/>
<CardSection2 img={img4}title= "Header" paragraph="Added May 22,2023 in" head="Header"/>
<CardSection2 img={img5}title= "CTA" paragraph="Added Nov 18,2023 in" head="CTA (Call To Actions)"/>
<CardSection2 img={img6}title= "Feature" paragraph="Added May 14,2023 in" head="Feature"/>


    </div>
    
    </>
  )
}

export default Section4