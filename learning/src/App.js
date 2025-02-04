import About from './Pages/about'; 
import Home from './Pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;