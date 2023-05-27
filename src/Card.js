import React from 'react'

function Card(props) {

    const {name} = props;
    
  return (
    <div id="card">
        <h3>Name : {name}</h3>
    </div>
  )
}

export default Card