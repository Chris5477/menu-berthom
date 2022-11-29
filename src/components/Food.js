import { getAllPrices } from "../utils/functions";

const Food = ({ food }) => {
  const { name, prices, weight } = food;
  return (
    <article className='item pad-big'>
      <h2 className='name-food'>
        {name.toUpperCase()} . {weight} g
      </h2>
      <div> {getAllPrices(prices)} </div>
    </article>
  );
};

export default Food;
