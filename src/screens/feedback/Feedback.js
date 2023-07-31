import Logo from '../../assets/img/logo.svg';

function Feedback() {
  return (
    <header id="header">
      <div className="container header__container">
        <a className="header__logo" href="/">
          <img className="header__logo-img" src={Logo} alt="Website Logo" width={24} height={24} />
        </a>
        <p>6 Suggestions</p>
      </div>
    </header>
  )
}

export default Feedback