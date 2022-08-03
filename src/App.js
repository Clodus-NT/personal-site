import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import MenuBar from './components/menu-bar/MenuBar';
import MainView from './components/main-view/MainView';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Router>
        <Routes>
            <Route exact path='/' element={ <MainView />} />
            <Route path='/projects' element={ <Projects/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/contact' element={ <Contact/> } />
        </Routes>
      </Router>
      {/* <MainView /> */}
    </div>
  );
}

export default App;
