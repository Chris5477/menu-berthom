import MenuBar from "./MenuBar";
import Navigation from "./Navigation";
import ResultSearch from "./ResultSearch";

const Main = ({ resultSearchBeer, setSearchBeer }) => {
  return (
    <main className="container flex-center">
      <Navigation setSearchBeer={setSearchBeer} />
      {resultSearchBeer.length === 0 ? (
        <MenuBar />
      ) : (
        resultSearchBeer.map((beer) => <ResultSearch key={beer.id} beer={beer} />)
      )}
    </main>
  );
};

export default Main;
