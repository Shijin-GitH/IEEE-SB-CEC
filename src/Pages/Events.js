import React, { useState } from 'react'
import Sidetitle from '../Components/Sidetitle/Sidetitle'
import EventTile from '../Components/Event/EventTile'
import Heading from '../Components/Heading/Heading'
import Line from '../Components/Line/Line'
import "./Styles/Events.css"
import details from "../Pages/details"
function Events() {
  return (
    <div className="container-fluid">
      <div className="row m-5 events">
        <Heading title='EVENTS' />
        <Line />
      </div>
      <div data-aos="fade-up" className='row mx-5' >
        {  details.event.map((events,i)=>
        <EventTile  title={events.title} link={events.image} /> )}
        </div> 
      
    
      <div><Sidetitle title="EVENTS" /></div>
    </div>
  )
}

export default Events
