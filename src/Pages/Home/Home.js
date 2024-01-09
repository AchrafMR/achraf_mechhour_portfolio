import React from 'react'
import './Home.css'
// files
import About from '../../sections/About/About'
import HireMe from '../../sections/HireMe/HireMe';
import Hero from '../../sections/Hero/Hero';
import Projects from '../../sections/Projects/Projects';
import Skills from '../../sections/Skills/Skills';
import MoveToNextPage from '../../sections/MoveToNextPage/MoveToNextPage';

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Skills />
        <HireMe />
        <Projects />
        <MoveToNextPage move_title="About Me" move_link="/AboutMe" />
    </>
  )
}

export default Home