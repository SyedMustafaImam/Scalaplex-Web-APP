import React, {useEffect, useState} from 'react'
import { Row, Container } from 'react-bootstrap'
import {Redirect, useHistory} from "react-router-dom";
import '../home.css'
import axios from 'axios'


const Home =()=> {
const history = useHistory();

const [name, setName]=useState('');
    
    const auth = () => {
        
        axios.get('/home').then(results => {
            // console.log(results);

            if(!results.status === 200){
                const err= new Error(results.error);
                throw err;
            }else{
                const firstName = results.data.firstName;
                const lastName = results.data.lastName;
                
                 setName(`${firstName} ${lastName}`);
            }

        }).catch(err=>{
            console.log('err :>> ', err);
             
                history.push("/loginForm")
              
        })
    }
    useEffect(()=>{
        auth();
        
    }, [])
                 
 
    return (
        
        < div className = { "homeHeader"} >
            <div className={"homeHeader"}>
                <Container >
                    <Row className={"heading justify-content-md-center"}>
                        <h5 className={"heading"}>Welcome {name}</h5>
                    </Row >
                    <Row className={"para justify-content-md-center"}>
                        <p >
                            To SCALAPLEX CINEMAS
                        </p>
                    </Row>
                </Container>
            </div>
        </div >
    )
}


export default Home;
