import { useState } from "react";
import "./App.css";
import BeerContext from "./components/BeerContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {

  const [searchBeer, setSearchBeer] = useState([])
  return (
    <BeerContext.Provider value={searchBeer}>
      <div className='container'>
        <Header  />
        <Main resultSearchBeer={searchBeer} setSearchBeer={setSearchBeer}/>
        <Footer />
      </div>
    </BeerContext.Provider>
  );
};

export default App;
