import Legend from "./Legend";
import MenuBar from "./MenuBar";
import Navigation from "./Navigation";
import { indicator } from "../utils/indicator";
import Beer from "./Beer";

const Main = ({ resultSearchBeer, setSearchBeer }) => {
  return (
    <main className='container flex-center'>
      <Navigation setSearchBeer={setSearchBeer} />
      {resultSearchBeer.length === 0 ? (
        <MenuBar />
      ) : (
        <section className='container section-menu pad-big'>
          <h2 className='menu-subtitle bg-light color--red'>Résultat</h2>
          {resultSearchBeer.map((beer) => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </section>
      )}
      <section className='container legend-section'>
        <h2 className='txt-center pad-big'>Légende</h2>
        <div className='legend container'>
          {indicator.map(({ id, source, txtAlt, legend }) => (
            <Legend key={id} source={source} alt={txtAlt} content={legend} w={40} h={40} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
