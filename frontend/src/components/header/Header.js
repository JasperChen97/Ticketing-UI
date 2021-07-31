import React, { useState } from 'react';
import { HeaderWrap } from './HeaderStyle.js';

function Header({ queryChange, query, searchTickets, showAllTickets }) {

  return (
    <HeaderWrap>
      <input type = 'text' className='textBox' value = {query} onChange={queryChange}/>
      <button onClick={()=> {searchTickets()}}>Search</button>
      <button onClick={()=> {showAllTickets()}}>Show All Tickets</button>
    </HeaderWrap>
  );
}

export default Header;