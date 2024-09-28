import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./StarShipCard"
function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships();
        console.log(data.results)
        setStarships(data.results);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStarships();
  }, []);

  return (
    <>
        {starships.map((item) => {
          return <StarshipCard key={item.created}data={item}></StarshipCard>
     
        })}
   
    </>
  );
}

export default App;
