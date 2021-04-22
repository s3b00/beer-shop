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

  return <nav className="navbar navbar-light bg-light d-flex justify-content-between">
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={dataSearch} aria-label="Search" />
    </form>
    
    <button className="btn btn-primary" data-toggle="modal" data-target="#registrationModal">Зарегистрироваться</button>
    <RegistrationForm />
  </nav>
}
  

export default NavBar