import logo from "../../images/logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <input type="checkbox" id="checkbox-nav" />
        <img src={logo} alt="" className="header__logo" />
        <nav className="header__nav">
          <a href="/">How we work</a>
          <a href="/">Blog</a>
          <a href="/">Account</a>
          <a href="/" className="header__nav-button">
            View plans
          </a>
        </nav>
        <label htmlFor="checkbox-nav" className="header__nav-hamburger"></label>
      </div>
    </header>
  );
};

export default Header;
