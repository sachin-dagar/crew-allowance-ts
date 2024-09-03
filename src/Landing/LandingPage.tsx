import './LandingPage.css';
import LandingMain from "../assets/LandingMain.svg";
import Navbar from './NavbarLanding';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="background-image">
        <img src={LandingMain} alt="Background" className="background-logo" />
      </div>
    </div>
  );
};

export default LandingPage;
