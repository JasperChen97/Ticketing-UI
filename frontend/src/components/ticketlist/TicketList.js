import React, { useState, useEffect } from 'react';
import { TicketListWrap, TicketWrap } from './TicketListStyle.js';

function TicketList({ ticketListings, switchTicket}) {

  return (
    <TicketListWrap>
      {ticketListings.map((ticket, index) => (
        <TicketItem ticket={ticket} index={index} switchTicket={switchTicket} key={ticket.id}/>
      ))}
    </TicketListWrap>
  );
}


const TicketItem = ({ ticket, index, switchTicket }) => {
  return (
    <TicketWrap>
      {ticket.name}
    </TicketWrap>
  )
}

export default TicketList;