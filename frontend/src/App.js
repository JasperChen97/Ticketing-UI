import React, { useState, useEffect } from 'react';
import { AppWrap, BodyWrap } from './AppStyle.js'
import Header from './components/header/Header.js';
import TicketContent from './components/ticketcontent/TicketContent.js';
import TicketList from './components/ticketlist/TicketList.js';
import Data from './tickets.json';
const axios = require('axios');

function App() {
  const inventory = Data.tickets;
  const [ticketListings, setTicketListings] = useState(inventory);
  const [ticketInfo, setTicketInfo] = useState(ticketListings[0]);
  const [query, setQuery] = useState('');

  const switchTicketInfoDisplay = (id) => {
    for (let ticket of ticketListings) {
      if (ticket.id === id) {
        setTicketInfo(ticket);
        break;
      }
    }
  }

  const queryChange = (e) => {
    setQuery(e.target.value);
  }

  const searchTickets = () => {
    let filteredTickets = [];
    for (let ticket of inventory) {
      if (ticket.name.toLowerCase().includes(query.toLowerCase())) filteredTickets.push(ticket);
    }
    setQuery('');
    setTicketListings(filteredTickets);
    setTicketInfo(filteredTickets[0]);
  }

  const showAllTickets = () => {
    setTicketListings(inventory);
    setTicketInfo(inventory[0]);
  }

  return (
    <AppWrap>
      <Header
        queryChange={queryChange}
        query={query}
        searchTickets={searchTickets}
        showAllTickets={showAllTickets}
      />
      <BodyWrap>
        <TicketList ticketListings={ticketListings} switchTicket={switchTicketInfoDisplay} />
        <TicketContent ticketInfo={ticketInfo} />
      </BodyWrap>
    </AppWrap>
  );
}

export default App;