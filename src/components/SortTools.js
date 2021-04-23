import React, { Component } from 'react'

export default class SortTools extends Component {
   sort(type) {
    const { update, data } = this.props;

    const sortedBeers = [].slice.call(data).sort(function(obj2, obj1) {
      if(obj1[type] < obj2[type]) return 1;
      if(obj1[type] > obj2[type]) return -1;
      return 0;
    });

    update({
      beers: sortedBeers
    })
  }

  render() { 
    return <div className="d-flex justify-content-around mt-2"> 
      <div className="form-check">
        <input type="radio" name="type" value="name" className="form-check-input" id="nameRB" onChange={ () => this.sort('name') }/>
        <label className="form-check-label" htmlFor="nameRB"> 
          Название
        </label>
      </div>  
      <div className="form-check ">
        <input type="radio" name="type" value="abv" className="form-check-input" id="abvRB" onChange={ () => this.sort('abv') }/>
        <label className="form-check-label" htmlFor="abvRB"> 
          Содержание алкоголя
        </label>
      </div>
      <div className="form-check">
        <input type="radio" name="type" value="attenuation_level" className="form-check-input" id="attRB" onChange={ () => this.sort('attenuation_level') }/>
        <label className="form-check-label" htmlFor="attRB"> 
          Аттенюация пива
        </label>
      </div>
    </div>
  } 
}