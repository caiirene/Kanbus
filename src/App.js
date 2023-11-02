
import Labs from './Labs';
//import logo from './logo.svg';
// import './App.css';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
    
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
