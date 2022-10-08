import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";
import Properties from "./components/properties/Properties";
import Contact from "./components/contact_us/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
