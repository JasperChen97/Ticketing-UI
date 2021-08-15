import React, { useState } from 'react';
import { ContentWrap } from './TicketContentStyle.js';

function TicketContent({ ticketInfo }) {
  let [availableSeats, setAvailableSeats] = useState([]);
  let availabilityInfo = ticketInfo.availability;
  let eventTimeAndLocation = Object.keys(availabilityInfo);

  const changeSelectedTimeAndLocation = () => {
    var e = document.getElementById("eventLocationInfo")
    if (e.value === 'Select One') {
      setAvailableSeats([]);
    } else {
      setAvailableSeats(availabilityInfo[e.value]);
    }
  }


  return (
    <ContentWrap>
      <div className='imgWrap'>
        <img className='ticketImg' src={ticketInfo.img_url} alt='singing'/>
      </div>
      <div className='titleInfo'>
        {ticketInfo.name} <br />
        {ticketInfo.category}
      </div>
      <div>
        Choose the Time and Date!
        <select onChange={changeSelectedTimeAndLocation} id="eventLocationInfo">
          <option selected="selected">Select One</option>
          {eventTimeAndLocation.map((timeAndLocation, index) => (
            <option value={timeAndLocation} key={index}>{timeAndLocation}</option>
          ))}
        </select>
        <br/><br/>

        Choose the seat!
        <select id="eventSeatingInfo">
          <option selected="selected">Select One</option>
          {availableSeats.map((seat, index) => (
            <option value={seat} key={index}>{seat}</option>
          ))}
        </select>
      </div>
    </ContentWrap>
  );
}

export default TicketContent;