import React from 'react'
import { Row, Col, Container, Carousel, Form, Table } from 'react-bootstrap'
import '../newsEvent.css'

const NewsEvent =()=> {

    return (
    < div className = { "NEHeader" } >
            
            <Container >
                <Row className={"NEheading justify-content-md-center"}>
                    <h5 className={"NEheading"}>News & Events</h5>
                </Row >
                <Row>
                    <Col>
                        <div class="blog-card spring-fever">
                            <div class="title-content">
                                <h3><a href="#">Vin Diesel Has A Fast And Furious Memorial Day Reminder For The Fans.</a></h3>
                                <div class="intro"> <a href="#">News</a> </div>
                            </div>
                            <div class="card-info">
                                Vin Diesel has been waiting for this, and it's almost here!
                                <a href="#">Read Article</a>
                            </div>
                            <div class="gradient-overlay"></div>
                            <div class="color-overlay"></div>
                            </div>
                        </Col>
                        <Col>
                        <div class="blog-card spring-fever">
                            <div class="title-content">
                                <h3><a href="#">Black Widow: Scarlett Johansson Explains Difficulty Of Nailing Natasha's Story</a></h3>
                                <div class="intro"> <a href="#">News</a> </div>
                            </div>
                            <div class="card-info">
                                Black Widow is finally arriving this summer, but it wasn't an easy story to tell.
                                <a href="#">Read Article</a>
                            </div>
                            <div class="gradient-overlay"></div>
                            <div class="color-overlay"></div>
                            </div>
                            </Col>
                </Row>
                
                <div class="NEOspacer"></div>

                <Row>
                    <Col>
                        <div class="blog-card spring-fever">
                            <div class="title-content">
                                <h3><a href="#">The Rock Reveals He’s Filming Black Adam Shirtless Scenes This Week And It Took A LOT Of Work</a></h3>
                                <div class="intro"> <a href="#">News</a> </div>
                            </div>
                            <div class="card-info">
                                It's all pain and gain for Dwayne "The Rock" Johnson where Black Adam is involved.
                                <a href="#">Read Article</a>
                            </div>
                            <div class="gradient-overlay"></div>
                            <div class="color-overlay"></div>
                            </div>
                        </Col>
                        <Col>
                        <div class="blog-card spring-fever">
                            <div class="title-content">
                                <h3><a href="#">No Big Deal, Just Brie Larson Crushing A One-Armed Pull-Up As She Preps For The Marvels</a></h3>
                                <div class="intro"> <a href="#">News</a> </div>
                            </div>
                            <div class="card-info">
                                Excuse me while I go eat an entire bag of chips in response to watching Brie Larson getting ripped
                                <a href="#">Read Article</a>
                            </div>
                            <div class="gradient-overlay"></div>
                            <div class="color-overlay"></div>
                            </div>
                        </Col>
                </Row>
                <Row className={"NEpara justify-content-md-center"}>
                    <p >

                    </p>
                </Row>
                <Row className={"NEpara justify-content-md-center"}>
                    <p >
                        
                    </p>
                </Row>            
            </Container>

            



</div>
    
    )
}
                      
export default NewsEvent;