import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import Profile from "./Components/Profile";
import MotionWrapper from "./Components/MotionWrapper";
import Navbar from './Components/Navbar';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/home" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/profile" element={<MotionWrapper><Profile /></MotionWrapper>} />
        <Route path="/About" element={<MotionWrapper><About /></MotionWrapper>} />
        <Route path="/Skills" element={<MotionWrapper><Skill /></MotionWrapper>} />
        <Route path="/Project" element={<MotionWrapper><Project /></MotionWrapper>} />
        <Route path="/Contact" element={<MotionWrapper><Contact /></MotionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
