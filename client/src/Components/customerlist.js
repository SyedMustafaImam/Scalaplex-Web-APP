import React, { useEffect, useState } from "react";
import { Form, Button, Col, Container, Table } from 'react-bootstrap'
import axios from 'axios'



function ListCustomers() {
    const [allCusomers, setallCusomers] = useState([])

    const fetchData = () => {
        axios.get('/index/admin/listcustomer').then(
            result => {
                console.log(result.data)
                setallCusomers(result.data)
            }
        ).catch(err => { console.log(err) })
    }

    useEffect(() => {

        fetchData()

        // console.log('Data:',allCusomers[0].moviename)
    }
        , [])


    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Username/Email</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>Address</th>


                    </tr>
                </thead>
                <tbody>
                    {allCusomers.map((val) => {
                        return (<tr>
                            <td>{`${val.firstName} ${val.lastName}`}</td>
                            <td>{val.username}</td>
                            <td>{val.gender}</td>
                            <td>{val.contact}</td>
                            <td>{val.city}</td>
                            <td>{val.address}</td>
                        </tr>)
                    })

                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ListCustomers

