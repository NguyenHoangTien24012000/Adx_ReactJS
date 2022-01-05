import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from './pages/Login';
import Admin from './pages/Admin';




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/admin" element={<Admin/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;