import React from 'react'
 
const BeerList = ({beers}) =>
    beers.map(beer => 
        <div className="card mb-2" style={{width: '220px'}} key={beer.id}>
            <div className="card-header">
                <img src={beer.image_url} className="img-fluid p-5" alt="." /> 
            </div>
            <div className="card-body"> 
                <h5 className="card-title">{beer.name}</h5>
                <div className="card-text d-flex flex-column justify-content-between">
                    <small>Содержание алкоголя: {beer.abv}%</small> <br/>
                    <small>Описание: {beer.description}</small> <br/><br/>
                    <small>Аттенюация пива: {beer.attenuation_level}</small> <br/><br/>
                    <small>Производитель: {beer.contributed_by}</small>
                </div>
            </div>
        </div>
    )
 
export default BeerList