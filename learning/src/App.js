import About from './Pages/about'; 
import Home from './Pages/Home';
import Van from './Pages/Van';
import Header from './Pages/Header';
import Header2 from './Pages/Header2';
import Container from './Pages/Container';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Van" element={<Van />} />
          <Route exact path="/Header" element={<Header favcol="green"/>} />
          <Route exact path="/Header2" element={<Header2 />} />
          <Route exact path="/Container" element={<Container />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;