import React, { Component } from 'react'
import Axios from 'axios';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import '../Form.css'
import PasswordStrengthBar from 'react-password-strength-bar';
import { NavLink, Redirect } from "react-router-dom";
// import  history  from "../history";
// import { createBrowserHistory } from "history";

class UserForm extends Component {

    ifRegistered = () => {
        if (this.state.userRegistered === true) {
            return (

                <Redirect to="/loginForm" />
            )
        }
    }

    api = Axios.create({
        baseURL: 'http://localhost:5000/',
        timeout: 3000
    })

    state = {
        firstName: '',
        lastName: '',
        username: '',
        gender: '',
        contact: '',
        city: '',
        address: '',
        password: '',
        conf_pass: '',
        stylePass: '',
        policies: '',
        passstats: false,
        formIsFilled: false,
        validated: false,
        getUserfromServer: '',
        isUsernameSame: false,
        userRegistered: false,


    };
    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });
    }
    submitData = (e) => {
        e.preventDefault();
        if (this.state.firstName !== '' && this.state.lastName !== '' &&  this.state.city !== '' && this.state.address !== '' && this.state.password !== '' && this.state.conf_pass !== '' && this.state.contact !== '' && this.state.gender) {
            this.setState({ formIsFilled: true })

            if (this.state.password === this.state.conf_pass) {
                this.api.post('register', this.state).then(result => {
                    if (result.status === 201) {
                        window.alert("New user created");
                        this.setState({ userRegistered: true })
                    }
                }).catch(err => {
                    console.log(err)
                    window.alert(`Unable to create user ${err}`)
                    this.setState({ userRegistered: false })
                })
            } else {
                this.setState({ passstats: false })
                window.alert('Error Password does not match')
            }

        } else {
            window.alert('Please fill all the fields')

            this.setState({ formIsFilled: false })
        }



    }


    confirmPassword = (e) => {
        this.setState({ conf_pass: e.target.value })
        const confPass = e.target.value
        if (this.state.password === "" || confPass === "") {
            this.setState({ passmath: "" })
        }

        else {
            if (this.state.password !== confPass) {
                this.setState({ passmath: "Password did not matched with your password" })
                this.setState({ passstats: false })
                this.setState({ validated: false });
            }
            // 
            else {
                this.setState({ passmath: "Password Matched!" })
                this.setState({ passstats: true })
                this.setState({ validated: true });
            }
        }
    }

    getUserName = () => {
        this.api.get('checkUser', {
            param: { username: this.state.username }
        }).then(result => {
            console.log('Result From Server in front end/------')
            console.log(result)
            this.setState({ getUserfromServer: result.data })
        }).catch(err => {
            console.log('throwing error')
            console.log(err)
        })
    }

    handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.username !== '' && this.state.gender !== '' && this.state.city !== '' && this.state.email !== '' && this.state.password !== '' && this.state.conf_pass !== '' && this.state.contact !== '' && this.state.address) {
            this.setState({ formIsFilled: true })
        } else {
            this.setState({ formIsFilled: false })
        }
    }

    handleChangeUserName = (e) => {
        this.handleChange(e);

        const { name, value } = e.target;
        const username = e.target.value;
        this.setState({
            [name]: value
        });
        console.log(username)
        // this.api.post('checkUser', { username: username}).then(result => console.log(result)).catch(err => console.log(err))
        this.api.get(`checkUser/${username}`).then(result => {
            console.log('Result From Server in front end/------')
            console.log(result)
            this.setState({ getUserfromServer: result.data.username })
            if (this.state.getUserfromServer === this.state.username) {
                this.setState({ formIsFilled: false })
                this.setState({ isUsernameSame: true })
                this.setState({ usernameError: "registration id alread exist!" })
            } else {
                this.setState({ usernameError: "" })
                this.setState({ formIsFilled: true })
                this.setState({ isUsernameSame: false })

            }

        }).catch(err => {
            console.log('throwing error')
            console.log(err)
        })
    }

    render() {
        let radios = { 'Male': 'male', 'Female': 'female','Others':'others' }
        let radioBtn = Object.entries(radios).map(([key, value], i) => (
            <Form.Check key={i} inline type="radio" name="gender" required onChange={this.handleChange} value={value} label={key} />
        ));

        return (
            <div className="container mainDiv" >

                <Form noValidate validated={this.state.validated} className=" formBox" onSubmit={this.handleSubmit}>
                    <h1><b>Sign Up</b></h1>
                    <p>It's quick and easy.</p>
                    <hr></hr>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required placeholder="Enter your first name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formlastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required placeholder="Enter your last name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Group controlId="formusername">

                                <Form.Control style={{ "font-size": "10px" }} type="email" name='username' value={this.state.username} onChange={this.handleChangeUserName} required placeholder="Enter your registration id or username" />
                                <Form.Text style={this.state.isUsernameSame !== false ? { "font-size": "9px", "color": "red" } : { "font-size": "9px", "color": "green" }}>
                                    {this.state.usernameError}

                                </Form.Text>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group controlId="formBasicRadiobox" >
                                <Form.Label>Gender</Form.Label>
                                <br style={{ "padding-top": "5%" }}></br>
                                {radioBtn}
                            </Form.Group>

                        </Col>
                        <Col xs={6}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="number" name="contact" value={this.state.contact} onChange={this.handleChange} required placeholder="Enter your Contact No." />                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                   
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>City</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} name='city' onChange={this.handleChange} required value={this.state.city} as="select">
                                    <option hidden value=''>Your City</option>
                                    <option>Karachi</option>
                                    <option>Lahore</option>
                                    <option>Islamabad</option>
                                    <option>Multan</option>
                                    <option>Sukhar</option>
                                    <option>Hyderabad</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="text" name="address" value={this.state.address} onChange={this.handleChange} required placeholder="Enter your address" />                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="password" name="password" onChange={this.handleChange} required placeholder="Password" />
                                <PasswordStrengthBar password={this.state.password} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formConfPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="password" name="conf_pass" onChange={this.confirmPassword} required placeholder="Confirm your Password" validation />
                                <Form.Text style={this.state.passstats !== true ? { "font-size": "9px", "color": "red" } : { "font-size": "9px", "color": "green" }}>
                                    {this.state.passmath}
                                </Form.Text>
                                <PasswordStrengthBar password={this.state.conf_pass} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            name="policies"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <NavLink to={this.state.userRegistered === true ? '/LoginForm' : '/UserForm'}>
                        <Button variant="success" type="submit" onClick={this.submitData} disabled={this.state.formIsFilled !== true || this.state.passstats !== true || this.state.isUsernameSame !== false ? true : false}>
                            Sign Up
                        </Button>
                    </NavLink>
                    {this.ifRegistered()}
                </Form>
                <br></br>
                {/* <prev style={{'color':'white'}}>{JSON.stringify(this.state, null, 2)}</prev> */}
            </div >
        )
    }
}

export default UserForm
