import  './Section7.css'
import img from "../../assets/imges/sec7.png"
import line from "../../assets/imges/line.png"

export const Section7 = () => {
  return (

    <>
     <div className='imgline'>
    <img src={line} alt="" className='line'/>
    </div>

    <div className='Section7' >
        <img src={img} alt="" />
<h2>Unlock the world's
largest design library</h2>
<p>Flowbase is the world's largest premium library of Webflow, Figma & Framer
components and tools. Build better, faster with Flowbase.</p>
<button>Learn more</button>
        

    </div>
    </>
  )
}
