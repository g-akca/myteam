import logo from "/assets/logo.svg";
import facebookIcon from "/assets/icon-facebook.svg";
import pinterestIcon from "/assets/icon-pinterest.svg";
import twitterIcon from "/assets/icon-twitter.svg";

function Footer() {
  return (
    <footer className="grow bg-teal-950 py-16 px-6 flex flex-col gap-6 items-center text-center font-semibold">
      <div className="flex flex-col gap-6 items-center">
        <img src={logo} alt="" className="h-6" />

        <div className="flex gap-6 items-center lowercase">
          <a href="">Home</a>

          <a href="">About</a>
        </div>
      </div>

      <p className="opacity-60">
        987  Hillcrest Lane<br />Irvine, CA<br />California 92714<br />Call Us : 949-833-7432
      </p>

      <div className="flex flex-col gap-4 items-center">
        <div className="grid grid-cols-[repeat(3,24px)] gap-4 items-center">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img src={facebookIcon} alt="" />
          </a>

          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <img src={pinterestIcon} alt="" />
          </a>

          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
            <img src={twitterIcon} alt="" />
          </a>
        </div>

        <p className="opacity-60">Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;