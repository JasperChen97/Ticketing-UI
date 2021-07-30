import React, { useState, useEffect } from 'react';
import { AppWrap, BodyWrap } from './AppStyle.js'
import Header from './components/header/Header.js';
import TicketContent from './components/ticketcontent/TicketContent.js';
import TicketList from './components/ticketlist/TicketList.js';
import Data from './tickets.json'

function App() {
  const [ticketListings, setTicketListings] = useState(Data.tickets);
  const [ticketInfo, setTicketInfo] = useState(ticketListings[0]);

  const switchTicketInfoDisplay = (id) => {
    for (let ticket of ticketListings) {
      if (ticket.id === id) {
        setTicketInfo(ticket);
        break;
      }
    }
  }


  return (
    <AppWrap>
      <Header />
      <BodyWrap>
        <TicketList ticketListings={ticketListings} switchTicket={switchTicketInfoDisplay} />
        <TicketContent ticketInfo={ticketInfo} />
      </BodyWrap>
    </AppWrap>
  );
}

export default App;