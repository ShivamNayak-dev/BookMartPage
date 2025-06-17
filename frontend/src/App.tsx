import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SellerHome from "./pages/SellerHome";
import Auth from './pages/Auth'; 

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/sellerhome" element={<SellerHome />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}


export default App;
