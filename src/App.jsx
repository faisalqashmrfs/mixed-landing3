
import './App.css'
import Header from './Componet/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './Componet/Section1/Section1';
import Section2 from './Componet/Section2/Section2';
import { Container } from 'react-bootstrap';
import Section3 from './Componet/Section3/Section3';
import Section4 from './Componet/Section4/Section4';
import Section5 from './Componet/Section5/Section5';
import Section6 from './Componet/Section6/Section6';
import { Section7 } from './Componet/Section7/Section7';

import Section9 from './Componet/Section9/Section9';
import Footer from './Componet/Footer/Footer';


function App() {

  return (
    <>
  
       <Header />
       <Container>
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section6 />
     <Section7 />

     <Section9 />
     </Container>
     <Footer />
    </>
  )
}

export default App
