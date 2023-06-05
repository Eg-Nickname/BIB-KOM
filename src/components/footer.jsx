import telephone from "../assets/telephone.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import contact from "../assets/contact.png";

function Footer() {
  return (
    <footer className="flexblock">
      <div className="flexblock pageWidth">
        <ul>
          <li className="flexblock">
            <img className="footer__location" src={location} />
            Kościuszki&nbsp;1D Rabka&nbsp;-&nbsp;Zdrój 34&#8288;-&#8288;700
          </li>
          <li className="flexblock">
            <img src={phone} className="footer__phone" />
            736061062
          </li>
          <li className="flexblock">
            <img src={telephone} className="footer__telephone" />
            736061061
          </li>
          <li className="flexblock">
            <img className="footer__telephone" src={contact} />
            kontakt@bibkom.pl
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
