import './App.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/About/About';
import BlogPage from './Pages/BlogPage/BlogPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
