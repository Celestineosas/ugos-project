
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Aboutx from './components/Aboutx/Aboutx';
import Servicex from './components/Servicex/Servicex';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
// import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
// import About from './components/About/About';
// import Header from './components/Header/Header';
// import Service from './components/Service/Service';
// import Cleaning from './components/Cleaning/Cleaning';
// import Blog from './components/Blog/Blog';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Aboutx />}/>
        <Route path='/Service' element={<Servicex />}/>
      </Routes>
    // <ScrollToTopButton />
     <Footer />
      </Router>
   {/* <Navbar />
   <Header />
   <About />
   <Service />
   <Cleaning />
   <Blog />
   <Footer /> */}
    </div>
  );
}

export default App;
