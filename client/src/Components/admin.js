import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import Movie from '../Components/movie'
import './admin.css'
export default function admin() {
    return (
        <div className='adminBlk'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Movies" title="Movies">
    <Movie />
  </Tab>
  <Tab eventKey="customer" title="Customers">
  </Tab>
  <Tab eventKey="administrator" title="Administrator">
  </Tab>
</Tabs>
        </div>
    )
}
