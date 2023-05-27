import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {

    const {data} = props;

    const handleClick = () =>  {
      props.setId(data.id);
      routeChange();
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{  
      navigate("/tv-shows/details/" + data.id);
    }

    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    const [year, monthNum, day] = data.premiered.split("-");
    
    const month = months[monthNum - 1];
    

  return (
    <div id="card" onClick={handleClick}>
      <div id="img-div">
        {data.image?<img src={data.image.medium}></img>:"no-image"}
      </div>
      
      <div id="content-div">
        <h3>Name : {data.name}</h3>
        <h3>Language : {data.language}</h3>
        <h3>Genres : {data.genres.map(item => {
          return <h4 style={{display: "inline"}}>{item}&nbsp;</h4>
        })}</h3>
        <h3>Runtime : {data.runtime}</h3>
        <h3>Premiered : {day}th {month}, {year}</h3>
        {data?.rating?.average?<h3>Rating : {data.rating.average}</h3>:<h3>Rating : null</h3>}
        {data?.network?.country?<h3>Country : {data.network.country.name}</h3>:<h3>Country : null</h3>}
      </div>
        
    </div>
  )
}

export default Card