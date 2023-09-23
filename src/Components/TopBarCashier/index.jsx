import { TbMoodSearch } from "react-icons/tb";
import logo from "../../Assets/Logo/Lucy_Sky-removebg-preview.png";
import { AiTwotoneDelete } from "react-icons/ai";
import BasicSelect from "../BasicSelect/BasicSelect";

const TopBar = () => {
    return (
        <div className="flex flex-col my-6 justify-between pl-20">
            <div className="flex flex-row">
                <div className="flex flex-row mr-20">
                    <img src={logo} className="h-20 pl-5" alt="" />
                    <label className="relative block m-8 ml-40">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <TbMoodSearch className="text-neutral-700" />
                        </span>
                        <input
                            className="placeholder:italic placeholder:text-neutral-700 block bg-white w-[340px] rounded-md  py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border"
                            placeholder="Search products . . ."
                            type="text"
                            name="search"
                        />
                    </label>
                </div>
                <div className="flex flex-row gap-20 p-6 ml-9 w-[248px]">
                <button className="rounded-xl p-3 text-xs border border-black hover:bg-gray-300">
                    Reset Category
                </button>
                <BasicSelect />
                </div>
                <div className="ml-24 w-full pr-60 items-center pt-5 pl-14">
                    <div className="flex items-center bg-red-400 rounded-md p-2 pl-3">
                        <AiTwotoneDelete className="pr-3" size={40} />
                        <button className="">Clear Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
