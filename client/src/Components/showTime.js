import React, { useState, useEffect } from "react";
import { Form, Button, Col, Container } from 'react-bootstrap'
import axios from 'axios'


const AddShowTime = () => {

const api = axios.create({
    baseURL: 'http://localhost:5000/index/admin',
    withCredentials: false
  })

  const [moviename, setMoviename] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [totalnoseats, settotalnoseats] = useState('55');
  const [allmoviename, setAllMoviename] = useState([]);
  const [movieFound, setMovieFound] = useState([]);

  useEffect(() => {
    axios.get('/index/admin/listmovies').then(result => {
        setMovieFound(result.data)
        setAllMoviename(result.data)
    }).catch(err => console.log(err))},[]
    )

  const postData = () => {
    if (moviename !== '' && date !== '' && time !== '' && totalnoseats!=='') {
      const showdata = { moviename, date, time, totalnoseats }
      api.post('/setshowtime', showdata).then(

        result => {
          if (result.stats === 200) {
            console.log(result)
            setMoviename('');
            setDate('')
            setTime('')
            settotalnoseats('')
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

  return (<div>
    <Container style={{ 'height': '100vh' }}>
      <Form method="POST" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control as="select" type="text" name='moviename' value={moviename} placeholder="Enter Movie Name" onChange={(e) => { setMoviename(e.target.value) }}>
            {
                allmoviename.map((val,key) => { return (
                    <option >{val.moviename}</option>
                    )})
                }
            </Form.Control> 
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Show Date</Form.Label>
            <Form.Control type="date" name='date' placeholder="Date" value={date} onChange={(e) => { setDate(e.target.value) }} />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridGenre">
          <Form.Label>Show Time</Form.Label>
          <Form.Control type="time" name='time' value={time} placeholder="Enter Show Time" onChange={(e) => { setTime(e.target.value) }} />
        </Form.Group>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Total No of Seats</Form.Label>
            <Form.Control type="number" name='totalnoseats' value={totalnoseats} placeholder="Number of Seats" onChange={(e) => { settotalnoseats(e.target.value) }} />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>

<prev>{JSON.stringify(moviename, null, 2)}</prev>
<prev>{JSON.stringify(date, null, 2)}</prev>
<prev>{JSON.stringify(time, null, 2)}</prev>
<prev>{JSON.stringify(totalnoseats, null, 2)}</prev> 

    </Container>
  </div>);
};

export default AddShowTime;

