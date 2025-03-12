
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Aboutx from './components/Aboutx/Aboutx';
import Servicex from './components/Servicex/Servicex';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/Faq';
import Review from './Review/Review';
import Book from './components/Book/Book';


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
     <ScrollToTop />
      <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Aboutx />}/>
        <Route path='/Service' element={<Servicex />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Pricing' element={<Pricing />}/>
        <Route path='/FAQ' element={<FAQ />}/>
        <Route path="/review" element={<Review />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    <ScrollToTopButton />
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
