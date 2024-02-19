
import  './Section2.css'
import img2 from "../../assets/imges/line.png"
import CardSection2 from '../CardSection2/CardSection2'
import img3 from "../../assets/imges/card2-1.png"
import img4 from "../../assets/imges/card2-2.png"
import img5 from "../../assets/imges/card2-3.png"
import img6 from "../../assets/imges/card2-4.png"
import img7 from "../../assets/imges/card2-5.png"
import img8 from "../../assets/imges/card2-6.png"
import img9 from "../../assets/imges/card2-7.png"
import img10 from "../../assets/imges/card2-8.png"
const Section2 = () => {
  return (
    <>
    <div className='img-infinite'>
    <img src={img2} alt="" className='linee'/>
    </div>
 
   <div className="main-secyion2">
    <h3>Recent Components</h3>
    <button className='btn-recent'>Browse all</button>
   </div>
    <div className='Section2'>

<CardSection2 img={img3}title= "Contact Form" paragraph="Added Nov 10,2023 in" head="Form & Contact" className="cardsection22"/>
<CardSection2 img={img4}title= "Contact Form" paragraph="Added Nov 10,2023 in" head="Form & Contact" className="cardsection22"/>
<CardSection2 img={img5}title= "Integrations" paragraph="Added Nov 9,2023 in" head="Integrations" className="cardsection22"/>
<CardSection2 img={img6}title= "Integrations" paragraph="Added Nov 9,2023 in" head=" Integrations" className="cardsection22"/>
<CardSection2 img={img7}title= "Header" paragraph="Added Nov 8,2023 in" head="Header" className="cardsection22"/>
<CardSection2 img={img8}title= "Header" paragraph="Added Nov 8,2023 in" head="Header" className="cardsection22"/>
<CardSection2 img={img9}title= "Features" paragraph="Added Nov 8,2023 in" head="Features" className="cardsection22"/>
<CardSection2 img={img10}title= "Features" paragraph="Added Nov 8,2023 in" head="Features" className="cardsection22"/>

    </div>
    
    </>
  )
}

export default Section2