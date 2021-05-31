import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import AddNewMovie from '../Components/movie'
import {EnhancedTable} from '../Components/movie'


import './admin.css'
export default function admin() {
    return (
        <div className='adminBlk'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Movies" title="Add Movies">
    <AddNewMovie />
  </Tab>
  <Tab eventKey="movie_list" title="Movie List">
    <EnhancedTable />
  </Tab>
  <Tab eventKey="customer" title="Customers">
  </Tab>
  <Tab eventKey="administrator" title="Administrator">
  </Tab>
</Tabs>
        </div>
    )
}
