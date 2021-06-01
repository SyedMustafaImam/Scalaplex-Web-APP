import React, {useEffect, useState} from 'react'
import { Row, Col, Container, Carousel, Form, Table } from 'react-bootstrap'
import {Redirect, useHistory} from "react-router-dom";

const Home =()=> {
const history = useHistory();

return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Movie</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Seats Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Godzilla VS Kong</td>
                        <td>31/05/2021</td>
                        <td>11:30 P.M.</td>
                        <td>10</td>                                   
                    </tr>
                    </tbody>
            </Table>
        </div> 
    )
}

export default customer