import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import AddNewMovie from '../Components/movie'
import {ListMovie} from '../Components/movie'
import ListCustomers from '../Components/customerlist'
import AddShowTime from '../Components/showTime'

import './admin.css'
export default function admin() {


  
    return (
        <div className='adminBlk'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Movies" title="Add New Movies">
    <AddNewMovie />
  </Tab>
  <Tab eventKey="movie_list" title="Movie's List">
    <ListMovie />
  </Tab>
  <Tab eventKey="customer" title="Customers's List">
    <ListCustomers/>
  </Tab>
  <Tab eventKey="Shows" title="Add Show Time">
    <AddShowTime />
  </Tab>
</Tabs>
        </div>
    )
}
