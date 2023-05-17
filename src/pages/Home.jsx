import "./Home.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import placeholder from "../assets/placeholder.jpg";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="pageWidth">
        <div>
          <p>
            Jesteśmy osobami z pasją. Wykonujemy swoją pracę z zamiłowania i
            dużym zaangażowaniem. Profesjonalna wiedza, którą zdobywaliśmy przez
            lata pozwala nam na rozwiązywanie wszelkich problemów z dziedziny
            informatyki i teleinformatyki.
          </p>
          <img src={placeholder}></img>
        </div>
        <div>
          <img src={placeholder}></img>
          <p>
            Naszą mocną stroną jest indywidualne podejście do klientów.
            Dokonujemy wycen oraz doboru sprzętu z uwzględnieniem ich potrzeb i
            wymagań. Większość diagnoz uszkodzonego sprzętu dokonujemy na
            poczekaniu i bezpłatnie.
          </p>
        </div>
        <div>
          <p>
            Oferujemy dojazd do klienta w dogodnym czasie mając na względzie
            seniorów oraz osoby mające ograniczoną mobilność.
          </p>
          <img src={placeholder}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
