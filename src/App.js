import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/index";
import SentResetPasswordPage from "./Pages/SentResetPasswordPage";
import HomePageCashier from "./Pages/HomePage";
import DashboardAdmin from "./Pages/DashboardPage/Admin";
import UserDataPage from "./Pages/UserDataPage";
import EditUserDataPage from "./Pages/EditUserDataPage";
import ProductsListPage from "./Pages/AdminProductsListPage";
import TransactionPage from "./Pages/TransactionPage";
import BiodataPage from "./Pages/BiodataPage";
import { Provider } from "react-redux";
import { store } from "../src/Redux/Store";
import KeepLogin from "./Providers/KeepLogin";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <KeepLogin>
                    <div className="App">
                        <Routes>
                            <Route
                                path="/cashier/home"
                                element={<HomePageCashier />}
                            />
                            <Route path="/" element={<LoginPage />} />
                            <Route
                                path="/resetpassword"
                                element={<SentResetPasswordPage />}
                            />
                            <Route
                                path="/admin/dashboard"
                                element={<DashboardAdmin />}
                            />
                            <Route
                                path="/admin/users"
                                element={<UserDataPage />}
                            />
                            <Route
                                path="/admin/users/edit"
                                element={<EditUserDataPage />}
                            />
                            <Route
                                path="/admin/products"
                                element={<ProductsListPage />}
                            />
                            <Route
                                path="/transaction"
                                element={<TransactionPage />}
                            />
                            <Route
                                path="/biodata"
                                element={<BiodataPage />}
                            />
                            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                        </Routes>
                    </div>
                </KeepLogin>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
