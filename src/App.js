import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { Route, Routes, Navigate } from "react-router-dom";
import Detail from "./Detail";

function App() {

  const [data, setData] = useState({});
  const[id, setId] = useState(0);

  console.log("appid: "+ id);

  useEffect(() => {

    const APIcall = async() => {
      const url = "https://api.tvmaze.com/search/shows?q=avengers";
      const data = await fetch(url);
      const parsedData = await data.json();
      setData(parsedData);
    }
    APIcall();
  }, []);


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/tv-shows/avengers" />}></Route>
        <Route path="/tv-shows/avengers" 
          element={
            <div id="container">
              {data[0]?data.map((item, index) =>  {
                return <Card data={item.show} key={index} setId={setId} />
              }):""}
            </div>}>
        </Route>

        <Route path={"/tv-shows/details/*"} element={<Detail id={id} />}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
