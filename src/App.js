// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetals from './BlogDetails';
import NoPage from './NoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create/>}/>
            <Route path="/blogs/:id" element={<BlogDetals/>}/>
            <Route path='*' element={<NoPage/>}/>
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
