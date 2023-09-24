import { CgSearchLoading } from "react-icons/cg";
import logo from "../../Assets/Logo/Lucy_Sky-removebg-preview.png";
import { AiOutlineDelete } from "react-icons/ai";
import axiosInstance from "../../config/api";
import { useSelector } from "react-redux";

const TopBarCashier = ({onNameChange, refreshTotal}) => {
    const userSelector = useSelector((state) => state.auth);

    const clearCartHandler = async () => {
        try {
            const res = await axiosInstance.delete(`/cart/delete-cart/user=${userSelector.id}`)
            refreshTotal()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col my-6 justify-between pl-20">
            <div className="flex flex-row">
                <div className="flex flex-row mr-20">
                    <img src={logo} className="h-24 pl-5" alt="" />
                    <label className="relative block m-8 ml-28">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CgSearchLoading className="text-neutral-700" />
                        </span>
                        <input
                            className="placeholder:italic placeholder:text-neutral-700 block bg-white w-[347px] rounded-md  py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border"
                            placeholder="Search products . . ."
                            type="text"
                            name="search"
                            onChange={(e) => onNameChange(e.target.value)}
                        />
                    </label>
                </div>
                <div className="flex flex-row gap-20 p-6 ml-9 w-[248px]">
                    <button className="text-neutral-700 rounded-xl p-3 text-xs border border-gray shadow-sm focus:outline-none hover:border-neutral-950 hover:ring-neutral-950 hover:ring-1">
                        Reset Category
                    </button>
                </div>
                <div className="ml-64 w-[600px] pr-60 items-center pt-5 pl-14">
                    <div className="flex items-center bg-red-600 rounded-md p-2 pl-6 text-white">
                        <AiOutlineDelete className="pr-3" size={40} />
                        <button className="text-xl" onClick={clearCartHandler}>Clear Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBarCashier;
