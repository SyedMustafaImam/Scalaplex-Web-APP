import React from 'react'
import { Row, Container } from 'react-bootstrap'
import '../about.css'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../images/im1.jpg'
import img2 from '../images/im2.jpg'
import img3 from '../images/im3.jpg'

const About =()=> {

 return (
     
    < div className = { "aboutHeader" } >
            
            <Container >
                <Row className={"heading justify-content-md-center"}>
                    <h5 className={"heading"}>About Us</h5>
                </Row >
                <Row className={"para justify-content-md-center"}>
                    <p >
                    Being the largest, purpose-built and standalone multiplex chain of Pakistan, Scalaplex Cinemas promises its customers a grandiose and larger than life experience like never before. Having all its sites designed by world renowned cinema architects, Mesbur & Smith of Canada, and boasting top end 4K Digital projection systems custom designed by Christie Digital Canada, Scalaplex continues to stand out in the entertainment and recreational sector. In addition to this, all the screens of this brand have been outfitted by Asia’s number one cinema integration company called Eugentek Corporation, which is a crowning achievement of years of planning and execution. Comprising of the latest 3D technology, custom designed Dolby 11.1 digital and sound systems for all theatre functionalities, Scalaplex continues to be years ahead of any other cinema nationwide. 
                    </p>
                </Row>
                <Row className={"para justify-content-md-center"}>
                    <p >
                    All screens at Scalaplex possess the first custom designed acoustics in Pakistan that have been designed by world beating acoustics named Valcoustics, Canada. Our brand continuously ensures that no expense or effort is spared in bringing a comfortable yet astounding experience to our patrons. From the custom-made seats, to the extremely well elevated halls, all our cinema models provide a majestic atmosphere that takes our customers away and disconnects them from the outside world. The grandeur of our expansive screens, the intimacy of our smaller screens, the luxury of our Royal screens, and the charm of our open-air screen, provide our customers with a wide range of Scalaplex models and experiences to choose from. 
                    </p>
                </Row>
                <Row className={"para justify-content-md-center"}>
                    <p >
                    Scalaplex has not only changed the game of the cinema business, but it has had far reaching effects on the film and media businesses in Pakistan. Enjoying one of the largest market shares of films, while also carrying the burden of the entire cinema industry, Scalaplex is committed towards reviving the Pakistani industry and giving Pakistani content most screen space and time. Through Scalaplex’s efforts of adding more and more screens, Pakistani producers overtime have gained the confidence to create more content. 
                    </p>
                </Row>
                <Row className={"para justify-content-md-center"}>
                    <p >
                    Being at the pinnacle of technology, design and art, Scalaplex Cinemas is the standard by which all visual and aural presentation is judged. Our mission is simple, to provide the most remarkable cinema experience in the world right here in Pakistan. Scalaplex Cinemas is a revolution, an ambitious and challenging idea bought to life and a film lover's paradise.
                    </p>
                </Row>            
            </Container>
            
            <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Container>      
        < div className = { "aboutFooter" } ></div>
        </div>
            
    )
}

export default About;