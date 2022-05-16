import './App.css';
import { About } from './components/About/About';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
