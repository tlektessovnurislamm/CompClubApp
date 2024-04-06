import React, { useState } from 'react';
import ContainerPage from '../components/ContainerPage';
import NavBar from '../components/navBar';
import {club} from './data'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  const filteredClubs = club.filter((club) => {
    return club.Name.toLowerCase().includes(searchTerm.toLowerCase()); 
  });

  return (
    <main>
      <div className='search'>
        <input type="text" placeholder="поиск" value={searchTerm} onChange={handleSearchChange} /> 
        <button><img src="./search.png" alt="Search" /></button> 
      </div>
      <div>
        {filteredClubs.map((club) => ( 
          <ContainerPage key={club.id} Name={club.Name} Price={club.Price} Place={club.Place} />
        ))}
      </div>
      <NavBar />
    </main>
  );
}