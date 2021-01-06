import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { aboutObj } from '../components/InfoSection/Data';
import Expertise from '../components/Expertise';
import MyWork from '../components/MyWork';
import Contact from '../components/Contact';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...aboutObj} />
      <Expertise />
      <MyWork />
      <Contact />
    </>
  );
};

export default Home;
