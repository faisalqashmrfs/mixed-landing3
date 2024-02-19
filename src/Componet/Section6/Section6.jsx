import   './Section6.css'
import img1 from "../../assets/imges/re1.png"
import img2 from "../../assets/imges/re2.png"
import img3 from "../../assets/imges/re3.png"
import img4 from "../../assets/imges/re4.png"
import img5 from "../../assets/imges/re5.png"
import img6 from "../../assets/imges/re6.png"
import img7 from "../../assets/imges/re7.png"
import img8 from "../../assets/imges/re8.png"

import imgline from "../../assets/imges/line.png"

const Section6 = () => {
  return (
    <>
   
   <div className='img-infinite'>
        <img src={imgline} alt="line" className='linee' />
        </div>
  
   <div className="main-secyion2">
    <div>
    <h3>Recent Illustrations  </h3>
    <span>All SVG illustrations included with</span>
    <button className='pre'>pre</button>
    </div>

    <button className='btn-recent'>Browse all</button>
   </div>
    <div className='Section6'>
<img src={img1} alt="" className='Recent' />
<img src={img2} alt="" className='Recent'/>
<img src={img3} alt="" className='Recent'/>
<img src={img4} alt="" className='Recent'/>
<img src={img5} alt=""className='Recent' />
<img src={img6} alt="" className='Recent'/>
<img src={img7} alt="" className='Recent'/>
<img src={img8} alt="" className='Recent'/>




    </div>
    </>
    
  )
}

export default Section6