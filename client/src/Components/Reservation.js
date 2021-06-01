import React, { useState } from 'react'
import Axios from 'axios';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import '../Form.css'
import seatsArangment from '../images/seatsArangment.png'



export default function Reservation() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <div className="container mainDiv" style={{'heigt':'100vh'}} >

<Row>
<Col md={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="formBox">
                <h1><b>Book Movie Ticket</b></h1>
                <p>It's quick and easy.</p>
                <hr></hr>
                <Form.Row>
                    <Form.Group as={Col} style={{'heigt':'100vh'}} controlId="validationCustom01">
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Movie name"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>

                        </InputGroup>



                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Number of Seats</Form.Label>
                        <Form.Control type="number" placeholder="Number of Seats" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" placeholder="Time" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Time.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
            </Col>
            <Col md={6}> 

<img src={seatsArangment} style={{'width':'600px', 'height':'800px'}}/>
            </Col>

            </Row>
        </div>
    )
}
