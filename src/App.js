import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/index";
import SentResetPasswordPage from "./Pages/SentResetPasswordPage";
import HomePageCashier from "./Pages/HomePage/Cashier/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageCashier />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/resetpassword" element={<SentResetPasswordPage />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
