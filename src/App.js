import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Header/Header';
import Tools from './Components/Tools/Tools';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div id="top" className="App">
      <Header/>
      <Tools/>
      <main className="content-container">
      <AboutMe/>
      <Portfolio/>
      <Contact />
      </main>
      <a id='back-to-top' href="#top">Back to Top</a>
      <Footer/>
    </div>
  );
}

export default App;
