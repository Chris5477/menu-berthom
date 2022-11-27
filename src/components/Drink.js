import { getAllPrices } from "../utils/functions";

const Drink = ({ drink }) => {
  const { name, volume, prices, strength, tags } = drink;
  return (
    <article className="pad-big">
      <h2 className="name-drink">{name.toUpperCase()}</h2>
      {strength && <h3>{strength} %</h3>}
      {tags && <p>{tags.join(" ")}</p>}
      <p>{volume} cl</p>
      {getAllPrices(prices)}
    </article>
  );
};

export default Drink;
