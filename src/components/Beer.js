import { getAllPrices } from "../utils/functions";

const Beer = ({ beer }) => {
  const { name, alt, brewery, from, specificity, characteristic, volume, dominance, tags, strength, prices } = beer;
  return (
    <article className="pad-big">
      <h2 className="name-drink">
        {name.toUpperCase()} {characteristic && "| " + characteristic}
      </h2>
      <h3>
        {brewery} . {from} | {specificity} | {strength} %
      </h3>
      <p>{alt}</p>
      <p>{tags.join(" ")}</p>
      <p>{volume} cl</p>
      {getAllPrices(prices) + "€"}
    </article>
  );
};

export default Beer;
