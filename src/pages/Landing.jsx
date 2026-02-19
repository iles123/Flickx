import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
// import Learn from '../components/Learn';
// import Studio from '../components/Studio';
// import Talent from '../components/Talent';
import Fund from '../components/Fund';
// import CreativeBase from '../components/CreativeBase';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import Partners from '../components/Partners';
import Ecosystem from '../components/Ecosystem';
import Profile from '../components/Profile';
import Blogs from '../components/Blogs';
import CTACard from '../components/CTACard';
import Corevalues from '../components/ui/Corevalues';
import Mission from '../components/ui/Mission';
import Whychooseflickx from '../components/ui/Whychooseflickx';

function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleCloseAuth = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <main className="pt-24 w-full overflow-x-hidden"> {/* Add padding-top to account for fixed header height */}
      <Header onLoginClick={handleShowLogin} />
      <Home />
      <Partners/>
      <AboutUs />
      <Ecosystem/>
      <Profile/>
      <Corevalues/>
      <Mission/>
      <Whychooseflickx/>
      <Blogs/>
      <Fund />
      <CTACard/>
      {/* <Learn />
      <Studio />
      <Talent />
      <CreativeBase onAuthClick={handleShowLogin} /> */}
      <Footer />

      {showLogin && (
        <LoginForm
          onSwitchToSignup={handleShowSignup}
          onClose={handleCloseAuth}
        />
      )}

      {showSignup && (
        <SignupForm
          onSwitchToLogin={handleShowLogin}
          onClose={handleCloseAuth}
        />
      )}
    </main>
  );
}

export default Landing;