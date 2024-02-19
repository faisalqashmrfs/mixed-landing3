import { Col, Container, Row } from 'react-bootstrap'

import img1 from "../../assets/imges/footer1.png"
import img2 from "../../assets/imges/footer2.png"
import img3 from "../../assets/imges/footer3.png"
import img4 from "../../assets/imges/footer4.png"
import logo from "../../assets/imges/logo.png"
import soical1 from "../../assets/imges/f1.png"
import soical2 from "../../assets/imges/f2.png"
import soical3 from "../../assets/imges/f3.png"
import soical4 from "../../assets/imges/f4.png"
import soical5 from "../../assets/imges/f10.png"
import soical6 from "../../assets/imges/f6.png"
import soical7 from "../../assets/imges/f7.png"

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='footer-header'>
                        <img src={logo} alt="" className='logofooter' />
                        <span>Webflow Designer Resources</span>
                        <img src={soical1} alt="" className='icon-footer' />
                        <img src={soical2} alt="" className='icon-footer' />
                        <img src={soical3} alt="" className='icon-footer' />
                        <img src={soical4} alt="" className='icon-footer' />
                        <img src={soical5} alt="" className='icon-footer' />
                        <img src={soical6} alt="" className='icon-footer' />
                        <img src={soical7} alt="" className='icon-footer' />
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" md="4" sm="2">
                        <h6>Explore</h6>
                        <p>All Components </p>
                        <p>Wireframes </p>
                        <p>Illustrations</p>
                        <p>UI Elements </p>
                        <p>Boosters </p>
                        <p>Templates </p>
                        <h6>Popular Categories</h6>
                        <p>Navigations</p>
                        <p>Utility Elements </p>
                        <p>Content </p>
                        <p>Pricing </p>
                        <p>Blog </p>
                        <p>Testimonials </p>
                    </Col>
                    <Col lg="3" gap="5" md="4" sm="2">
                        <h6>Resources</h6>
                        <p>Blogs </p>
                        <p>Integrations </p>
                        <p>Press</p>
                        <p>Support Center</p>
                        <p>Join Discord </p>
                        <p>What's New </p>
                        <div className="img-footer2">
                            <h6>Our Product Suite</h6>
                            <div>
                                <img src={img1} alt="" />
                                <span> FeedSpring - Social Feeds</span>
                            </div>

                            <div>
                                <img src={img2} alt="" />
                                <span>Optily - Webflow Optimization</span>
                            </div>
                            <div>
                                <img src={img3} alt="" />
                                <span>Quillow - Micro Websites</span>
                            </div>
                            <div>
                                <img src={img4} alt="" />
                                <span>Tools - Webflow Directory</span>
                            </div>
                        </div>

                    </Col>
                    <Col lg="3"gap="5" md="4" sm="2">


                        <h6>Store</h6>
                        <p>Club Subscription </p>
                        <p>Premium Templates </p>
                        <div>
                            <h6>Flowbase Tools</h6>
                            <p>Webflow Chrome Extension</p>
                            <p>Figma Component Plugin </p>
                            <p>Webflow Color Importer </p>
                            <p>Webflow Color Swatch Organiser </p>
                            <p>Webflow Custom Shortcuts</p>
                            <p>Webflow Asset Optimizer </p>
                            <p>Webflow Icon Library </p>
                            <p>Webflow Booster App</p>


                        </div></Col>
                    <Col lg="3"  md="4" sm="2">

                        <h6>Company</h6>
                        <p>All Components </p>
                        <p>About </p>
                        <p>FAQ</p>
                        <p>Contact </p>
                        <p>License </p>
                        <p>Terms of Service </p>
                        <p>Privacy Policy</p>

                    </Col>
                </Row>
<div className='footer-copy'>
    <p>© 2024 Flowbase. All rights reserved</p>
    <p>Powered by @webflow</p>
</div>
            </Container>
        </footer>
    )
}

export default Footer