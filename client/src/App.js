import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/register" element={<RegisterPage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
