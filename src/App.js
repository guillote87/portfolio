import './App.css';
import { About } from './components/About/About';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Categories } from './components/Categories/Categories';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
