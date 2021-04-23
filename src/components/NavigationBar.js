import React from 'react'
import RegistrationForm from './registration-modal.js'

const NavBar = ({ term, data, update }) => {
  const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter(beer => {
        return beer.name.toLowerCase().includes(value);
    });
    
    update ({
        beers: filter,
        filter: value
    });
  }

  return <nav className="navbar navbar-light bg-light d-flex justify-content-between flex-md-row flex-column align-items-center">
    <form className="form-inline ">
      <input className="form-control" type="search" placeholder="Search" onChange={dataSearch} aria-label="Search" />
    </form>
    
    <button className="btn btn-primary my-md-0 my-2 " 
      data-toggle="modal" 
      data-target="#registrationModal">
      Зарегистрироваться
    </button>
    <RegistrationForm />
  </nav>
}
  

export default NavBar