import {
    MdOutlineLiquor,
    MdOutlineSpaceDashboard,
    MdOutlineHistory,
} from "react-icons/md";
import Logo from "../../Assets/Logo/Lucy_Sky-removebg-preview.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function NavbarCashier() {
    const navigate = useNavigate();

    const logoutHandler = () => {
        Cookies.remove("user_token");
        navigate("/login");
    };

    return (
        <>
            <aside className="compact-nav fixed group overflow-hidden left-0 top-0 z-10 h-screen w-[calc(3.73rem)] bg-color-5 hover:w-56 hover:shadow-2xl shadow-2xl">
                <div className="h-full flex flex-col justify-between">
                    <div className="">
                        <div className="h-16 border-b border-gray-300/40 flex items-center">
                            <a
                                href="/cashier/home"
                                className="block w-max px-2.5 flex items-center gap-3 text-color-1 text-l font-bold"
                            >
                                <img src={Logo} class="h-11" alt="" />
                                <span className="text-black">Lucy Sky</span>
                            </a>
                        </div>
                        <div className="mt-6">
                            <ul className="px-1 -ml-px space-y-4 font-medium tracking-wide text-color-1">
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a
                                        href="/cashier/home"
                                        className="block py-3 w-[52px] rounded-full bg-yellow-500 group-hover:w-full hover:bg-gray-800"
                                    >
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <MdOutlineLiquor
                                                className="h-7 w-7"
                                                color="white"
                                            />
                                            <span className="text-white">
                                                Menu
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a
                                        href="/cashier/home"
                                        className="block py-3 w-[52px] rounded-full bg-yellow-500 group-hover:w-full hover:bg-gray-800"
                                    >
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <MdOutlineSpaceDashboard
                                                className="h-7 w-7"
                                                color="white"
                                            />
                                            <span className="text-white">
                                                Dashboard
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a
                                        href="/"
                                        className="block py-3 w-[52px] rounded-full bg-yellow-500 group-hover:w-full hover:bg-gray-800"
                                    >
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <MdOutlineHistory
                                                className="h-7 w-7"
                                                color="white"
                                            />
                                            <span className="text-white">
                                                Transactions
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4 border-t px-2 border-gray-300/40">
                        <a href="/">
                            <div className="w-max flex items-center gap-4">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg"
                                    alt=""
                                />
                                <div>
                                    <button
                                        className="h6 text-gray-600 px-5"
                                        onClick={logoutHandler}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}
