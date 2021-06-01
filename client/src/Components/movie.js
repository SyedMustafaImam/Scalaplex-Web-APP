import React, { useEffect, useState } from "react";
import { Form, Button, Col, Container, Table } from 'react-bootstrap'
import axios from 'axios'




const AddNewMovie = () => {

  const api = axios.create({
    baseURL: 'http://localhost:5000/index/admin',
    withCredentials: false
  })
  const [moviename, setMoviename] = useState('');
  const [movieboughtdate, setMoviebouthtdate] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [year, setYear] = useState('');


  const postData = () => {
    if (moviename !== '' && movieboughtdate !== '' && genre !== '' && duration !== '' && year !== '') {
      const moviedata = { moviename, movieboughtdate, genre, duration, year }
      api.post('/registermovie', moviedata).then(

        result => {
          
            console.log(result)
            setMoviename('');
            setMoviebouthtdate('')
            setDuration('')
            setYear('')
            setGenre('')
            window.alert("Movie Data Posted")
          
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
            <Form.Control type="text" name='moviename' value={moviename} placeholder="Enter Movie Name" onChange={(e) => { setMoviename(e.target.value) }} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" value={movieboughtdate} onChange={(e) => { setMoviebouthtdate(e.target.value) }} />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridGenre">
          <Form.Label>Movie Genre</Form.Label>
          <Form.Control type="text" name='genre' value={genre} placeholder="Enter Movie Genre" onChange={(e) => { setGenre(e.target.value) }} />
        </Form.Group>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Movie Duration</Form.Label>
            <Form.Control type="text" name='duration' value={duration} placeholder="Enter Movie Duration : _hr _mins " onChange={(e) => { setDuration(e.target.value) }} />
          </Form.Group>



          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Movie Year</Form.Label>
            <Form.Control type="number" name='year' placeholder="Enter Movie Year" value={year} onChange={(e) => { setYear(e.target.value) }} />

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
export default AddNewMovie;

function ListMovie() {
  const [allMovies,setAllMovies]=useState([])
  
  const fetchData = ()=>{
    axios.get('/index/admin/listmovies').then(
      result=>{
        console.log(result.data)
        setAllMovies(result.data)
      }
    ).catch(err =>{console.log(err)})
    }

    useEffect(() => {

      


    fetchData()

    // console.log('Data:',allMovies[0].moviename)
      }
    , [])
    

  return (
    <div>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Movie Name</th>
      <th>Movie Bought Date</th>
      <th>Genre</th>
      <th>Duration</th>
      <th>Year</th>


    </tr>
  </thead>
  <tbody>
{ allMovies.map((val)=>{
   return (<tr>
      <td>{val.moviename}</td>
      <td>{val.movieboughtdate}</td>
      <td>{val.genre}</td>
      <td>{val.duration}</td>
      <td>{val.year}</td>
    </tr>)
})
  
}   
  </tbody>
</Table>
    </div>
  )
}

export  {ListMovie}




