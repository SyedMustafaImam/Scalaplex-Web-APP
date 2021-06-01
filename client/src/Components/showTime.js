import React, { useState, useEffect } from "react";
import { Form, Button, Col, Container } from 'react-bootstrap'
import axios from 'axios'


const AddShowTime = () => {

const api = axios.create({
    baseURL: 'http://localhost:5000/index/admin',
    withCredentials: false
  })

  const [moviename, setMoviename] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Seats, setSeats] = useState('55');
  const [allmoviename, setAllMoviename] = useState([]);
  const [movieFound, setMovieFound] = useState([]);

  useEffect(() => {
    axios.get('/index/admin/listmovies').then(result => {
        setMovieFound(result.data)
        setAllMoviename(result.data)
    }).catch(err => console.log(err))},[]
    )

  const postData = () => {
    if (moviename !== '' && Date !== '' && Time !== '') {
      const showdata = { moviename, Date, Time, Seats }
      api.post('/setshowtime', showdata).then(

        result => {
          if (result.stats === 200) {
            console.log(result)
            setMoviename('');
            setDate('')
            setTime('')
            setSeats('')
            window.alert("New Show Added")
          }
        }).catch(err => { console.log(err) })
    } else {
      window.alert('Please Enter the Data in all the field!')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return <div>
    <Container style={{ 'height': '100vh' }}>
      <Form method="POST" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control size="sm" as="select" type="text" name='moviename' value={moviename} placeholder="Enter Movie Name" onChange={(e) => { setMoviename(e.target.value) }}>
            {
                allmoviename.map((val,key) => { return (
                    <option >{val.moviename}</option>
                    )})
                }
            </Form.Control> 
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Show Date</Form.Label>
            <Form.Control type="date" name='date' placeholder="Date" value={Date} onChange={(e) => { setDate(e.target.value) }} />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridGenre">
          <Form.Label>Show Time</Form.Label>
          <Form.Control type="time" name='time' value={Time} placeholder="Enter Show Time" onChange={(e) => { setTime(e.target.value) }} />
        </Form.Group>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Total Seats</Form.Label>
            <Form.Control type="number" name='seats' value={Seats} placeholder="Number of Seats" onChange={(e) => { setSeats(e.target.value) }} />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>

      {/* <prev>{JSON.stringify(moviename, null, 2)}</prev>
<prev>{JSON.stringify(moviebouthtdate, null, 2)}</prev>
<prev>{JSON.stringify(genre, null, 2)}</prev>
<prev>{JSON.stringify(duration, null, 2)}</prev>
<prev>{JSON.stringify(year, null, 2)}</prev> */}

    </Container>
  </div>;
};

export default AddShowTime;

