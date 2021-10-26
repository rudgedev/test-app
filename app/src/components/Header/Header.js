import logo from '../../images/logo.png';

import './Header.css';

function Header() {
  return (
    <div className="container">
      <header className="header">
        <nav className="menu">
          <ul className="menu__items">
            <li className="menu__item">
              <a className="menu__item-link" href="#">Home</a>
            </li>
            <li className="menu__item">
              <a className="menu__item-link" href="#">Message</a>
            </li>
            <li className="menu__item">
              <a className="menu__item-link" href="#">Notyfication</a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <a className="logo__link">
            <img className="logo__img" src={logo} alt="logo" />
          </a>
        </div>

        <div className="profile">
          <form className="search__form">
            <input className="search__field" type="text" placeholder="Search" />
            <button className="search__button" type="submit">
              <i className="flaticon-search" />
            </button>
          </form>

          <a className="profile__link" href="#">
            <figure className="profile__item">
              <img className="profile__photo" src={logo} alt="photo" />
            </figure>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;