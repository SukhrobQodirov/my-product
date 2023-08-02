import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import "./header.scss";
import Container from "../container/container";
import SelectSort from "../select-sort/select-sort";

function Header() {
  return (
    <header id="header">
      <div className="header__inner">
        <Link className="header__logo-link" to={"/"}>
          <img className="header__logo" src={Logo} alt="Logo Icon" width="24px" height="24px" />
        </Link>
        <h1 className="header__title">6 Suggestions</h1>
      </div>
      <div className="header__inner">
        <SelectSort/>
      </div>
    </header>
  );
}

export default Header;
