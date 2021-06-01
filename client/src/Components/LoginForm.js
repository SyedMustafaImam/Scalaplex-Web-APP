import React, { Component } from 'react'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap'
import '../Form.css'
import Cookies from 'universal-cookie';
import axios from 'axios'
import { NavLink, Redirect } from "react-router-dom";


class LoginForm extends Component {

    cookie = new Cookies();

    api = axios.create({
        baseURL: 'http://localhost:5000/',
        timeout: 2000,
        withCredentials: false
    })


    state = {

        username: '',
        password: '',
        loginSuccess: false,
        

    };

    showAlert = (msg) => {

        return (
            <Alert variant={this.state.loginSuccess !== true ? 'danger' : 'success'}>{msg} </Alert>
        )
    }



    handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    ifLogined = () => {
        if (this.state.loginSuccess === true) {
            if(this.state.password==='admin.123'){
                return (<Redirect to='/admin' />) 
            }else{
        
            return (<Redirect to='/' />)
        }
        }

    }

    checkLogin = () => {

        if (this.state.username !== '' && this.state.password !== '') {

            this.api.post('login', this.state).then(result => {
                // console.log('data posted to server')
                // console.log( 'Result :', result);
                // console.log('Token :', result.data);
                // console.log('status :', result.statusText);
                // console.log('status Code:', result.status);
                this.setState({ loginSuccess: true })
                console.log(result.data)
               if(result.data.password==='admin.123'){
                this.cookie.set('admin', '/admin', {
                    path: '/admin',
                    expires: new Date(Date.now() + 1800000)

                })
                window.alert('Admin Login Successful')
                
               }
               else{
                if (result.status === 200) {
                    this.cookie.set('JWTtoken', result.data, {
                        path: '/',
                        expires: new Date(Date.now() + 1800000)

                    })
                    window.alert('Login Successful')
                } else {
                    window.alert(result.error)
                    // this.setState({ loginSuccess: false })

                }}
            }).catch(err => {
                console.log(err)
                this.setState({ loginSuccess: false })
                window.alert('Invalid Credentials')
            })
        }
        else {
            // this.showAlert();
            window.alert('Please Enter Details')

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

    }


    render() {


        return (
           
            <div id="logCont" transition={false} className="container mainDiv" >
             
                <Row className=" loginBox">
                    <Col >
                        <Form method="POST"  onSubmit={this.handleSubmit}>
                            <h1>Log In</h1>
                            <hr></hr>


                            <Form.Group controlId="formusername">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username or Email address" />
                            </Form.Group>



                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                            </Form.Group>


                            <Row >
                                <Col xs={5}>
                                    <Button onClick={this.checkLogin} variant="success" type="submit" >
                                        Login
                                    </Button>
                                </Col>
                                <Col >
                                    <Button variant="link">Forgot Password</Button>
                                </Col>
                            </Row>
                            <hr></hr>

                            <NavLink to="/UserForm" ><Button variant="primary" block >
                                Sign Up
                            </Button></NavLink>
                        </Form>
                    </Col>
                    {this.ifLogined()}

                </Row>

                <br></br>

                {/* <prev>{JSON.stringify(this.state, null, 2)}</prev> */}
            </div >


        )
    }
}

export default LoginForm
