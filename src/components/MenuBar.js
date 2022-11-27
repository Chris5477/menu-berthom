import { filterBeer } from "../utils/functions";
import { alcohol, cocktails, draft, food, freeAlcohol, rhum, whiskies } from "../utils/menu";
import Beer from "./Beer";
import DraftBeer from "./DraftBeer";
import Drink from "./Drink";
import Food from "./Food";

const MenuBar = () => {
  return (
    <div className='menu-bar container' role='region' aria-label='carte du bar'>
      <section id='nibble' className='section-menu'>
        <h2 className='menu-subtitle bg-light color--red'>A Grignoter</h2>
        {food.map((feed) => (
          <Food key={feed.id} food={feed} />
        ))}
      </section>
      <section className='section-menu' id='draft'>
        <h2 className='menu-subtitle color--blue'>Bières pressions </h2>
        <p className='volume-beer container'>
          <span className='pad-small'>DEMI</span>
          <span className='pad-small'>PINTE</span>
          <span className='pad-small'>HAPPY <br/>HOUR</span>
        </p>
        {draft.map((beer) => (
          <DraftBeer key={beer.id} name={beer.name} prices={beer.prices} strength={beer.strength} />
        ))}
      </section>
      <section className='section-menu' id='acidulous'>
        <h2 className='menu-subtitle color--yellow'>Bières Acidulées</h2>
        {filterBeer("Acidulée").map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </section>
      <section className='section-menu' id='sweet'>
        <h2 className='menu-subtitle color--red'>Bières Sucrées</h2>
        {filterBeer("Sucrée").map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </section>
      <section className='section-menu' id='fresh'>
        <h2 className='menu-subtitle color--blue'>Bières Douces</h2>
        {filterBeer("Douce").map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </section>
      <section className='section-menu' id='bitter'>
        <h2 className='menu-subtitle color--yellow'>Bières Amères</h2>
        {filterBeer("Amère").map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </section>
      <section className='section-menu' id='alcohol'>
        <h2 className='menu-subtitle color--red'>Rhums</h2>
        {rhum.map((drink) => (
          <Drink key={drink.id} drink={drink} />
        ))}
      </section>
      <section className='section-menu'>
        <h2 className='menu-subtitle color--blue'>Whiskies</h2>
        {whiskies.map((drink) => (
          <Drink key={drink.id} drink={drink} />
        ))}
      </section>
      <section className='section-menu'>
        <h2 className='menu-subtitle color--yellow'>Cocktails</h2>
        {cocktails.map((drink) => (
          <Drink key={drink.id} drink={drink} />
        ))}
      </section>
      <section className='section-menu'>
        <h2 className='menu-subtitle color--red'>Alcools</h2>
        {alcohol.map((drink) => (
          <Drink key={drink.id} drink={drink} />
        ))}
      </section>
      <section id='free-alcohol' className='section-menu'>
        <h2 className='menu-subtitle color--blue'>Sans alcool</h2>
        {freeAlcohol.map((drink: any) => (
          <Drink key={drink.id} drink={drink} />
        ))}
      </section>
    </div>
  );
};

export default MenuBar;