import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/index";
import SentResetPasswordPage from "./Pages/SentResetPasswordPage";
import HomePageCashier from "./Pages/HomePage/Cashier/index";
import Dashboard from "./Pages/ReportPage";
import FullFeaturedCrudGrid from "./Pages/ProfilePage/AdminProfilePage";
import CashierProfilePage from "./Pages/ProfilePage/CashierProfilePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageCashier />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/resetpassword" element={<SentResetPasswordPage />} />
                <Route path="/report" element={<Dashboard />} />
                <Route path="/admins" element={<FullFeaturedCrudGrid />} />
                <Route path="/cashier" element={<CashierProfilePage />} />
                
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
