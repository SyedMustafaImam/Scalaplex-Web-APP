import React, { useEffect, useState, NavLink } from 'react'
import { Row, Col, Container, Carousel, Form, Table, Button } from 'react-bootstrap'
import { Redirect, useHistory } from "react-router-dom";
import '../home.css'
import axios from 'axios'
import img1 from '../images/h1.jpg'
import img2 from '../images/h2.jpg'
import img3 from '../images/h3.jpg'
import imgc from '../images/clock-2.png'
import imp1 from '../images/Venom2.jpg'
import imp2 from '../images/blackwidow.jpg'
import imp3 from '../images/SSquad.jpg'
import imp4 from '../images/SnakeEyes.jpg'
import imp5 from '../images/SpaceJam.jpg'
import imp6 from '../images/Batman.jpg'

const Home = () => {
    const history = useHistory();
    let movieName = []

    const [name, setName] = useState('');
    const [allmoviename, setAllMoviename] = useState([]);
    const [movieFound, setMovieFound] = useState([]);

    const [alltime, setAllTime] = useState([])
    const [alldate, setAllDate] = useState([])

    const [moviename, setMoviename] = useState('');
    const [totalnoseats, setTotalnoseats] = useState('');
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const auth = () => {

        axios.get('/home').then(results => {
            // console.log(results);

            if (!results.status === 200) {
                const err = new Error(results.error);
                throw err;
            } else {
                const firstName = results.data.firstName;
                const lastName = results.data.lastName;

                setName(`${firstName} ${lastName}`);
            }

        }).catch(err => {
            console.log('err :>> ', err);

            history.push("/loginForm")

        })
    }

    const getList = () => {

        axios.post('/index/admin/getmoveshowtime',
            {
                moviename, time, date
            }).then(result => {
                console.log(result)
                // setMovieFound(result.data)
                // setMoviename(result.data.moviename)
                // setTotalnoseats(result.data.totalnoseats)
                // setTime(result.data.time)
                // setDate(result.data.date)
            }).catch(err => { console.log(err) })
    }


    useEffect(() => {

        const fetchFullListShowTime = () => {
           if(moviename!==''||time!==''||date!==''){
            getList()
           }
           
else{
    axios.get('/index/admin/listshowtime').then(result => {
               
            setMovieFound(result.data)
                
        setAllMoviename(result.data)

    }).catch(err => console.log(err))
}
        }


fetchFullListShowTime()

        auth();
    }, [])

    const checkMovie =()=>{
        
        axios.post('/index/admin/getmoveshowtime',
        {
            moviename, time, date
        }).then(result => {
            console.log(result)
            // setMovieFound(result.data)
            
        }).catch(err => { console.log(err) })
        
    }
    return (

        < div className={"homeHeader"} >
            <Container >
                {getList}
                <Row className={"heading justify-content-md-center"}>
                    <h5 className={"heading"}>Welcome {name}</h5>
                </Row >
                <Row className={"para justify-content-md-center"}>
                    <p >
                        To SCALAPLEX CINEMAS
                    </p>
                </Row>
            </Container>
            < div class={"spacer"} />
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
            < div class={"spacer"} />

            < div class={"Tspacer"} />

            < div class={"Ospacer"}>
                <Container >
                    <Row className={"subHeading justify-content-md-center"}>
                        <h5 className={"subHeading"}>Now Showing</h5>
                    </Row >
                </Container>
            </ div>

            < div class={"bookBar"}>
                <Container>
                    <Row>
                        <Col><img src={imgc} />          Show Time</Col>
                        <Col>

                            <Form.Control size="sm" as="select" value={moviename} onChange={(e)=>{setMoviename(e.target.value)}}>
                        <option >Select Movie</option>
                                {
                                    allmoviename.map((val,key) => { return (
                                        <option >{val.moviename}</option>
                                    )})
                                    }

                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Control size="sm" as="select" value={date} onChange={(e)=>{setDate(e.target.value)}}>
                            <option >Select Date</option>
                            {
                                    allmoviename.map((val,key) => { return (
                                        <option >{val.date}</option>
                                    )})
                                    }
                            </Form.Control>
                        </Col>
                        <Col>

                            <Form.Control size="sm" as="select" value={time} onChange={(e)=>{setTime(e.target.value)}}>
                        <option >Select Time</option>
                            {
                                    allmoviename.map((val,key) => { return (
                                        <option >{val.time}</option>
                                    )})
                                    }
                            </Form.Control>
                        </Col>
                        <Col>
                        <Button variant="link" style={{'font-size':'20px'}} onClick={checkMovie}>🔍</Button>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Table striped bordered hover variant="dark">
                                <thead>


                                    <tr>
                                        <th>Movie</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Seats Available</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        movieFound.map((val,key) => {
                                            return(
                                            <tr>
                                                <td>{val.moviename}</td>
                                                <td>{val.date}</td>
                                                <td>{val.time}</td>
                                                <td>{val.totalnoseats}</td>
                                            </tr>


                                        )})
                                    }
                                   
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
   <prev>{JSON.stringify(moviename, null, 2)}</prev>
   <prev>{JSON.stringify(date, null, 2)}</prev>
   <prev>{JSON.stringify(time, null, 2)}</prev>
                    <Row>
                        <Col>
                        
                       

                        </Col>
                    </Row>
                    <Button  onClick={()=>{history.push("/Reservation")}}>
                                    Book Tickets
                            </Button>

                </Container>
            </div>

            < div class={"Tspacer"} />

            < div class={"comingSoonBar"} >
                <Container >
                    <Row className={"subHeading justify-content-md-center"}>
                        <h5 className={"subHeading"}>Coming Soon</h5>
                    </Row ><Row className={"subHeading justify-content-md-center"}>
                        <h5 className={"subHeading"}></h5>
                    </Row >
                </Container>
            </div>

            <Container>
                <Row>
                    <Col>
                        <div class="card">
                            <div class="image">
                                <img src={imp1} />
                            </div>
                            <div class="details">
                                <div class="center">
                                    <h1>VENOM<br /><span>Let There Be Carnage</span></h1>
                                    <p>Venom: Let There Be Carnage is an upcoming American superhero film featuring the Marvel Comics character Venom, produced by Columbia Pictures in association with Marvel and Tencent Pictures.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card">
                            <div class="image">
                                <img src={imp2} />
                            </div>
                            <div class="details">
                                <div class="center">
                                    <h1>Black Widow</h1>
                                    <p>At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card">
                            <div class="image">
                                <img src={imp3} />
                            </div>
                            <div class="details">
                                <div class="center">
                                    <h1>The Suicide Squad</h1>
                                    <p>The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                < div class={"Tspacer"} />
                <Row>
                    <Col>
                        <div class="card">
                            <div class="image">
                                <img src={imp4} />
                            </div>
                            <div class="details">
                                <div class="center">
                                    <h1>Sanke Eyes</h1>
                                    <p>An ancient Japanese clan called the Arashikage welcomes tenacious loner Snake Eyes after he saves the life of their heir apparent. Upon arrival in Japan, the Arashikage teach him the ways of the ninja warrior while also providing him something he's been longing for: a home. However, when secrets from Snake Eyes' past are revealed, his honor and allegiance get tested.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card">
                            <div class="image">
                                <img src={imp5} />
                            </div>
                            <div class="details">
                                <div class="center">
                                    <h1>Space Jam<br /><span>A New Legacy</span></h1>
                                    <p>Basketball superstar LeBron James teams up with the Looney Tunes gang to defeat the Goon Squad and save his son.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card">
                            <div class="image">
                                <img src={imp6} />
                            </div>
                            <div class="details">
                                <div class="center">
                                    <h1>The Batman</h1>
                                    <p>The Riddler plays a deadly game of cat and mouse with Batman and Commissioner Gordon in Gotham City.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className={"homeHeader"}>
            </div>
        </div >
    )
}


export default Home;
