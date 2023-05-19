import "./Contact.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import placeholder from "../assets/placeholder.jpg";
function Offers() {
  return (
    <div>
      <Navbar />
      <div>
        Oferty
        <img src={placeholder}></img>
      </div>
      <Footer />
    </div>
  );
}

export default Offers;
