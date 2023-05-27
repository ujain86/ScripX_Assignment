import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {

  const [data, setData] = useState({});

  useEffect(() => {

    const APIcall = async() => {
      const url = "https://api.tvmaze.com/search/shows?q=avengers";
      const data = await fetch(url);
      const parsedData = await data.json();
      setData(parsedData);
    }
    APIcall();
  }, []);

  console.log("data: ", data);

  return (
    <div className="App">
      <Navbar />
      {data.map((item, index) =>  {
        return <Card name={item.show.name} />
      })}

    </div>
  );
}

export default App;
