import About from '../components/About';
import HeaderQuestions from '../components/HeaderQuestions';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="header" id="header">
        <div className="header_elements">
          <div className="kwt">
            <h1>KWT</h1>
          </div>
          <div className='desc'>
            <p>DOŁĄCZ DO KONKURSU I SPRAWDŹ SWOJĄ WIEDZĘ Z WYBRANEJ PRZEZ CIEBIE DZIEDZINY!</p>
          </div>
          <div className='header_button'>
            <div className="sign">
              <Link to={"/join"}>
                <div className="button">
                  <p>Dołącz</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <About />
      <HeaderQuestions />
    </>
  );
};

export default Home;