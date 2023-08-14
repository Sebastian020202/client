import React, { useState } from 'react';
import './Navbar.style.css';
import { getByName } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(searchTerm));
    console.log(event);
  };

  return (
    <div className="nav">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search by Name"
          type="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default Navbar;
