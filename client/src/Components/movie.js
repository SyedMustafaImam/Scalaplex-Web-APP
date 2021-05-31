import React, { useState } from "react";
import { Form, Button, Col, Container } from 'react-bootstrap'
import axios from 'axios'
const Movie = () => {

  const api = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 2000,
    withCredentials: false
  })
  const [moviename, setMoviename] = useState('');
  const [moviebouthtdate, setMoviebouthtdate] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [year, setYear] = useState('');


  const postData = () => {
    if (moviename !== '' && moviebouthtdate !== '' && genre !== '' && duration !== '' && year !== '') {
      const moviedata = { moviename, moviebouthtdate, genre, duration, year }
      api.post('/moviepost', moviedata).then(
        result => {
          setMoviename('');
          window.alert("Movie Data Posted")
        }).catch(err => { console.log(err) })
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
            <Form.Control type="text" name='moviename' placeholder="Enter Movie Name" onChange={(e) => { setMoviename(e.target.value) }} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" onChange={(e) => { setMoviebouthtdate(e.target.value) }} />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridGenre">
          <Form.Label>Movie Genre</Form.Label>
          <Form.Control type="text" name='genre' placeholder="Enter Movie Genre" onChange={(e) => { setGenre(e.target.value) }} />
        </Form.Group>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Movie Duration</Form.Label>
            <Form.Control type="text" name='duration' placeholder="Enter Movie Duration : _hr _mins " onChange={(e) => { setDuration(e.target.value) }} />
          </Form.Group>



          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Movie Year</Form.Label>
            <Form.Control type="number" name='year' placeholder="Enter Movie Year" onChange={(e) => { setYear(e.target.value) }} />
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

export default Movie;
