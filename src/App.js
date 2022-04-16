import './App.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
