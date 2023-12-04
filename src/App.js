
import Labs from './Labs';
//import logo from './logo.svg';
// import './App.css';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";

function App() {
  return (
    
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/project" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
          <Route path="/project/*" element={<Project />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
