import About from './Pages/about';
import Home from './Pages/Home';
import Van from './Pages/Van';
import Header from './Pages/Header';
import Header2 from './Pages/Header2';
import Container from './Pages/Container';
import FavoriteColor from './Pages/FavoriteColor';
import CarModule from './Pages/CarModule';
import Timer from './Pages/Timer';
import Component1 from './components/Component';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Van" element={<Van />} />
          <Route exact path="/Header" element={<Header favcol="green" />} />
          <Route exact path="/Header2" element={<Header2 />} />
          <Route exact path="/Container" element={<Container />} />
          <Route exact path="/FavoriteColor" element={<FavoriteColor />} />
          <Route exact path="/CarModule" element={<CarModule />} />
          <Route exact path="/Timer" element={<Timer />} />
          <Route exact path="/Component1" element={<Component1 />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;