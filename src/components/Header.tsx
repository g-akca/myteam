import logoImg from "/assets/logo.svg";
import menuIcon from "/assets/icon-hamburger.svg";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logoImg} alt="" className="h-8" />

      <button>
        <img src={menuIcon} alt="" className="h-5" />
      </button>
    </header>
  )
}

export default Header;