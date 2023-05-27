import React from 'react';
import { useState, useEffect } from 'react';

function Detail(props) {

    // const {id} = props;
    // console.log("id: ", id);
    var url = window.location.pathname;
    // console.log(url);
    
    const id = url.substring(18, 26);
    console.log(id);

    const [data, setData] = useState({});

    useEffect(() => {

        const APIcall = async() => {
          const url = "https://api.tvmaze.com/shows/" + id;
          const data = await fetch(url);
          const parsedData = await data.json();
          setData(parsedData);
        }
        APIcall();
      }, []);

    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    const [year, monthNum, day] = data.premiered?data.premiered.split("-"):"";
    const month = months[monthNum - 1];

  return (
    <div id="detail-page"> 
        <div id="detail-img">
            {data.image?<img src={data.image.original}></img>:"no-image"}
        </div>
        
        <div>
            <h3>ID : {data.id}</h3>
            <h3>URL : {data.url}</h3>
            <h3>Name : {data.name}</h3>
            <h3>Type : {data.type}</h3>
            <h3>Language : {data.language}</h3>
            <h3>Genres : {data?.genres?.map(item => {
                            return <h4 style={{display: "inline"}}>{item}&nbsp;</h4>
                        })}
            </h3>
            <h3>Status : {data.status}</h3>
            <h3>Runtime : {data.runtime}</h3>
            <h3>Premiered : {day}th {month}, {year}</h3>
            <h3>Ended : {data.ended}</h3>
            {data?.rating?.average?<h3>Rating : {data.rating.average}</h3>:<h3>Rating : null</h3>}
            {data?.network?.country?<h3>Country : {data.network.country.name}</h3>:<h3>Country : null</h3>}
            <h3>Summary : {data.summary}</h3>
        </div>
    </div>
  )
}

export default Detail