import React, {useState,useEffect} from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
// react router
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
// import ContactForm from './sections/ContactForm/ContactForm';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollLineBar from './components/ScrollLineBar/ScrollLineBar';
import Services from './Pages/Services/Services';

import GetInTouch from './components/GetInTouch/GetInTouch';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ProjectsDetails from './Pages/ProjectsDetails/ProjectsDetails';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (<Loader />) : (
        <Router>
          <ScrollLineBar />
          <Navbar />
      
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Skills' element={<SkillsPage />} />
            <Route path='/Projects' element={<ProjectsPage />} />
            <Route path='/Projects/:projectId' element={<ProjectsDetails/>} />

            <Route path='/Contact' element={<ContactPage />} />
          </Routes>
          <GetInTouch />
          <Footer />
          <ScrollToTop />
        </Router>
      )}
    </>
  );
 

}

export default App;
