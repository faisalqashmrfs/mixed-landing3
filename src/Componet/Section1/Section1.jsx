import CardSection1 from '../CardSection1/CardSection1'
import  './Section1.css'
import img1 from "../../assets/imges/card1.png"
import alertt from "../../assets/imges/alert.png"

const Section1 = () => {
  return (
    <>
    <div className='Section1'>
        <CardSection1 img={img1} title="Components"  paragraph="Browse 2,000+ Components"/>
        <CardSection1 img={img1} title="Wireframes"  paragraph="Browse Chalk™ System"/>
        <CardSection1 img={img1} title="Illustrations"  paragraph="Vector based illustrations"/>
        <CardSection1 img={img1} title="Boosters"  paragraph="Coded tools and solutions"/>
      
    </div>
    <div className="alert-img">
    <img src={alertt} alt=""  className='alertt'/>
    </div>
    
     </>
  )
}

export default Section1