import { useEffect, useState } from "react";
import "./App.css";
import BeerContext from "./components/BeerContext";
import Footer from "./components/Footer";
import HappyHour from "./components/HappyHour";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {

  const getHour = new Date().getHours()
  const isHappyHour = getHour >=19 && getHour <=21

  const [searchBeer, setSearchBeer] = useState([])
  const [HH, setHH] = useState(isHappyHour)

  useEffect(() => {setTimeout(() => setHH(false), 5000)},[HH])
 
  return (
    <BeerContext.Provider value={searchBeer}>
      <div className='container'>
        {HH && <HappyHour />}
        <Header  />
        <Main resultSearchBeer={searchBeer} setSearchBeer={setSearchBeer}/>
        <Footer />
      </div>
    </BeerContext.Provider>
  );
};

export default App;
