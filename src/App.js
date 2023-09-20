import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
