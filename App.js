// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
function App() {
  return (
    <div className="App">
          <Navbar bg="light" expand="lg" sticky="top">
          <Container fluid>
          <Navbar.Brand href="#"><h2>AUTONO</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Technology</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Careers</Nav.Link>
           
          </Nav>
          <Nav.Link href="#action4"><h4>Subscribe</h4></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Card>
        <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_02de7d4c43d44b7b890854049ed75da8f000.jpg/v1/fill/w_1519,h_840,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c837a6_02de7d4c43d44b7b890854049ed75da8f000.jpg" />
        <Card.ImgOverlay>
        <Card.Title><h1>THE FUTURE OF</h1></Card.Title>
        <Card.Title><h1>MOBILITY IS HERE</h1></Card.Title>
        <Card.Text>
        Discover the safest self-driving experience with Autono
        </Card.Text>
      </Card.ImgOverlay>
      </Card>
    <CardGroup style={{border:'none',marginTop:'10px'}}>
          <Card style={{border:'none'}}>
           
            <Card.Body style={{marginTop:'50px' ,textAlign:'initial'}}>
              <Card.Title><h2>AUTONOMOUS DRIVING</h2></Card.Title>
              <Card.Text>
              Dependability is key for automated driving. We deliver dependable electronics which enable systems that are the foundation for trust.
              </Card.Text>
        <Button variant="outline-dark">Read More</Button>

            </Card.Body>
          </Card>
           <Card style={{border:'none'}}>
            <Card.Img variant="top" src="https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_950,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg" />
           
          </Card>
          </CardGroup>
   <CardGroup>
       <Card style={{border:'none',marginTop:'-100px'}}>
            <Card.Img variant="top" src="https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_950,h_773,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg" />   
          </Card>
          <Card style={{border:'none'}}>
            <Card.Body style={{textAlign:'initial'}}>
            <Card.Title><h1>REAL-TIME</h1></Card.Title>
              <Card.Title><h1>INFORMATION</h1></Card.Title>
              <Card.Text>
              We’ve developed an app so that each vehicle can drive autonomously and make decisions based on real-time information and situational awareness.
              </Card.Text>
             <Button variant="outline-dark">Read More</Button>  
            </Card.Body>
          </Card>
    </CardGroup> 
    <CardGroup>
          <Card style={{border:'none'}}>
            <Card.Body style={{textAlign:'initial'}}>
            <Card.Title><h1>PERCEPTION</h1></Card.Title>
              <Card.Title><h1>ENABLED</h1></Card.Title>
              <Card.Text>
              Using groundbreaking perception-enabled sensor technology, the Autono car is a fully driverless vehicle engineered to the highest degree of precision and safety. It’s autonomous driving reimagined.
              </Card.Text>
             <Button variant="outline-dark">Read More</Button>  
            </Card.Body>
          </Card>
          <Card style={{border:'none',marginTop:'-100px'}}>
            <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_950,h_854,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg" />   
          </Card>
    </CardGroup>
    <Card className="bg-dark text-white">
      <Card.Img className="fixed"  />
      <Card.ImgOverlay>
          <Card style={{ width: '18rem' }}>
            <Card.Body  style={{backgroundColor:'black', color:'white'}}>
            <Card.Title>Why Autono</Card.Title>
            <Card.Text>
                 A different approach, using a new method of manufacturing.
            </Card.Text>
            <Card.Text> 
               WHY AUTONO
              A different approach, using a new method of manufacturing.
              Autonomy requires trust. The key to the successful combination of both technology and trust, is dependable electronics.
            </Card.Text>
            <Card.Text>
                 We offer innovative top-quality semiconductors and semiconductor solutions combined with broad system knowledge. 
            </Card.Text>
           </Card.Body>
          <Card.Body>
            <Button variant="outline-dark">Read More</Button>  
          </Card.Body>
    </Card>
      </Card.ImgOverlay>
    </Card>
    <CardGroup>
       <Card style={{border:'none'}}>
            <Card.Img variant="top" src="https://static.wixstatic.com/media/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg/v1/fill/w_950,h_950,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg" />   
          </Card>
          <Card style={{border:'none'}}>
            <Card.Body style={{textAlign:'initial'}}>
            {/* <Card.Title><h1>-----------------------------</h1></Card.Title> */}
              <Card.Title><h2>Autono In Numbers</h2></Card.Title>
            {/* <Card.Title><h1>-----------------------------</h1></Card.Title> */}
              <Card.Text className='d-flex'>
                 <Card.Text  className='p-4'> <h5>200<AiFillPlusCircle /></h5><h6>EMPLOYEES</h6></Card.Text>
                 <Card.Text  className='p-4'> <h5>5<AiFillPlusCircle /></h5><h6>CORE TEAMS</h6></Card.Text>
              </Card.Text>
              <Card.Text className='d-flex'>
                 <Card.Text  className='p-4'> <h5>200M$<AiFillPlusCircle /></h5><h6>CAPITAL</h6></Card.Text>
                 <Card.Text  className='p-4'> <h5>326<AiFillPlusCircle /></h5><h6>PARTNERS</h6></Card.Text>
              </Card.Text>
             <Button variant="outline-dark">Read More</Button>  
            </Card.Body>
          </Card>
    </CardGroup> 
    <CardGroup>
      <Card style={{backgroundColor:"black" ,color:"white"}}>
       <Card.Text>
            INDUSTRY
          </Card.Text>
        <Card.Body>
          <Card.Title>OUR PARTNERS</Card.Title>
          <Card .Text style={{textAlign:'initial'}} className='p-4'>
           Click here to add your own content and customize the text. This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share. Just click "Edit Text" to get started.
          </Card.Text>
          <Card.Text style={{textAlign:'initial'}} className='p-4'>
          We began with one mission in mind. To change the future of mobility. To achieve the unimaginable. We're now well on our way to changing the way the world thinks about cars and travel. With us; travelling and commuting is stress-free and luxury.
          </Card.Text>
          <Card.Text>
          <Button variant="outline-light">Read More</Button>  
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor:"black" ,color:"white"}}>

         <Card.Text className='d-flex'>
                 <Card.Text  className='p-4'> <img src="https://static.wixstatic.com/media/c837a6_a8508672733a4bb7ba100662952d4f6f~mv2.png/v1/fill/w_175,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/General_Transport.png"></img><h6>General Transport</h6> 
                 </Card.Text>
                 <Card.Text  className='p-4 m-5'> <img src="https://static.wixstatic.com/media/c837a6_24669e1d20cd4f079fd2ea5e253c99b8~mv2.png/v1/fill/w_110,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IDI_Software.png"></img><h6 className='p-5'>IDI Software</h6> 
                 </Card.Text>
          </Card.Text>
           <Card.Text className='d-flex'>
                <Card.Text  className='p-4'> <img src="https://static.wixstatic.com/media/c837a6_db1c6e9c1b95497f81465ccd218fa048~mv2.png/v1/fill/w_110,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Imogen_Cars.png"></img><h6 className='p-5'>iMogen Cars</h6> 
                 </Card.Text>
                 <Card.Text  className='p-4 m-3'> <img src="https://static.wixstatic.com/media/c837a6_81bc98e386764170adbb3e97cc7e1655~mv2.png/v1/fill/w_160,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tri-Nex%20.png"></img><h6 className='p-5'>Tri-Nex</h6> 
                 </Card.Text>
          </Card.Text>
      </Card>
    </CardGroup>
    <CardGroup className='mt-1'>
      <Card style={{backgroundColor:"black" ,color:"white"}}>
        <Card.Body className='mt-5'>
          <Card.Title>CARRERS</Card.Title>
          <Card.Text style={{textAlign:'initial'}} className='p-4'>
          We’re looking for innovative talent to join our team. See all positions and submit your CV.
          </Card.Text>
          <Card.Text>
          <Button variant="outline-light">Openings<AiOutlineArrowRight /></Button>  
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor:"black" ,color:"white"}}>

      <Carousel style={{width:"18rem"}} className='m-5'>
      <Carousel.Item className='m-4'>
      <Card style={{backgroundColor:"black" ,color:"white",width:"18rem"}}>
        <Card.Body>
          <Card.Title>Electrical Engineer</Card.Title>
          <Card.Subtitle>San Franscisco,CA</Card.Subtitle>
          <Card .Text style={{textAlign:'initial'}} className='p-4'>
          Be responsible for the design in various process technologies including deep submicron CMOS encompassing the design of data-converter blocks such as ADCs and DACs & RF IC transceiver blocks such as VGAs and filters.​
          </Card.Text>
          <Card.Text>
          <Button variant="outline-light">Apply Now</Button>  
          </Card.Text>
        </Card.Body>
      </Card>
      </Carousel.Item>
      <Carousel.Item className='m-4'>
      <Card style={{backgroundColor:"black" ,color:"white"}}>
        <Card.Body>
          <Card.Title>SENIOR SOFTWARE & FIRMWARE</Card.Title>
          <Card.Subtitle>San Franscisco,CA</Card.Subtitle>
          <Card.Text style={{textAlign:'initial'}} className='p-4'>
          Formulate approaches to solve problems using AI and ML in the context of customer, engineering and basic needs and come with innovative solutions to address the customer challenges.
          </Card.Text>
          <Card.Text>
          <Button variant="outline-light">Apply Now</Button>  
          </Card.Text>
        </Card.Body>
      </Card>
      </Carousel.Item>
    </Carousel>
      </Card>
    </CardGroup>
    </div>
  );
}

export default App;
