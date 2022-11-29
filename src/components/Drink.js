import { getAllPrices } from "../utils/functions";

const Drink = ({ drink }) => {
  const { name, volume, prices, strength, tags } = drink;
  return (
    <article className='bottle-beer'>
      <h2 className='name-drink'>
        {name.toUpperCase()} {volume} cl  {strength ? " . " + strength + "%" : ""}
      </h2>

      {tags && <p className='tag'>{tags.join(", ")}</p>}
      <div className='price'>{Array.isArray(prices) ? getAllPrices(prices)[0] : getAllPrices(prices)} </div>
    </article>
  );
};

export default Drink;
