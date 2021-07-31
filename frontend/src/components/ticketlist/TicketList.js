import React, { useState } from 'react';
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
    <TicketWrap onClick={() => {switchTicket(ticket.id)}}>
      <img className='thumbnail' src={ticket.img_url} alt='singing'/>
      <div>
        {ticket.name}
      </div>
    </TicketWrap>
  )
}

export default TicketList;