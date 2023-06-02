import "./Home.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Home() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <div className="cage">
        <div className="grid-wrapper content">
          <div className="grid-text">
            <b>
              Jesteśmy osobami z pasją. Wykonujemy swoją pracę z zamiłowania i
              dużym zaangażowaniem.
            </b>
            &nbsp; Profesjonalna wiedza, którą zdobywaliśmy przez lata pozwala
            nam na rozwiązywanie wszelkich problemów z dziedziny informatyki i
            teleinformatyki.
          </div>
          <div>
            <img className="grid-image" src={img1}></img>
          </div>

          <div className="spacer"></div>

          <div className="smth" id="force-second">
            <img className="grid-image" src={img2}></img>
          </div>
          <div className="grid-text" id="force-first">
          <b>Naszą mocną stroną jest indywidualne podejście do klientów. </b>
            Dokonujemy wycen oraz doboru sprzętu z uwzględnieniem ich potrzeb i
            wymagań. Większość diagnoz uszkodzonego sprzętu dokonujemy na
            poczekaniu i bezpłatnie.
          </div>

          <div className="spacer"></div>

          <div className="grid-text">
            <b>Oferujemy dojazd do klienta</b> w dogodnym czasie mając na
            względzie seniorów oraz osoby mające ograniczoną mobilność.
          </div>
          <div>
            <img className="grid-image" src={img3}></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
