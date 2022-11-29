import { getAllPrices } from "../utils/functions";


const DraftBeer = ({ name, prices, strength }) => {
  return (
    <article className='draft-beer pad-big'>
      <h2 className='name-draft'>
        {name.toUpperCase()} . {strength} % <div>{getAllPrices(prices)}</div>
      </h2>
    </article>
  );
};

export default DraftBeer;
