import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Header/Header';
import Tools from './Components/Tools/Tools';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tools/>
      <main className="content-container">
      <AboutMe/>
      <Portfolio/>
      </main>
    </div>
  );
}

export default App;
