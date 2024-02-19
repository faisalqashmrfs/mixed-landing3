import   './Section9.css'
import CardSection9 from '../CardSection9/CardSection9'
import img1 from "../../assets/imges/blog1.png"
import img2 from "../../assets/imges/blog2.png"
import img3 from "../../assets/imges/blog3.png"
import line from "../../assets/imges/line.png"


const Section9 = () => {
  return (
    <>
   
   <div className='img-infinite'>
    <img src={line} alt="" className='linee'/>
    </div>
  
   <div className="main-secyion2">
    <div>
    <h3>Flowbase Blog </h3>
      <span>Discover articles and tutorials to help you build bette</span>
    
    </div>

    <button className='btn-recent'>Browse all</button>
   </div>
    <div className='Section6'>
<CardSection9 img={img1} title="Top 20 UI Inspiration Sites
(2023)"  paragraph="We've collated the top 20 UI inspiration sites, all with
links in one handy spot! Find your inspiration for your
next project."/>
<CardSection9  img={img2} title="How to add a countdown timer
to Framer" paragraph="Learn how to add a beautiful countdown to your
Framer project. Add it to your project in seconds" />
<CardSection9  img={img3} title="How to add an Instagram Feed
to Framer (2023)" paragraph="In this article we will spotlight the best way to build a
beautiful Instagram feed in your Framer sites. Built
specifically for Framer and 100% free for small and
personal sites."/>
    </div>
    </>
  )
}

export default Section9