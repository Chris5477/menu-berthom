import berthomLogo from "../assets/pictures/berthom-logo.png"

const Header = () => {
  return (
    <header className='header-app'>
      <div aria-label='bannière de la page web' className='container bg-dark flex-center pad-small'>
        <img src={berthomLogo} alt='Les berthom' width={180} height={60} />
      </div>
      <div aria-hidden='true' className='overlay bg-dark'></div>
    </header>
  );
};

export default Header;
