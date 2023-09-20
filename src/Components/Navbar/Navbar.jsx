import { TfiMenu } from "react-icons/tfi";
import { TbMoodSearch } from "react-icons/tb";

export default function Navbar() {
    return (
        <>
            <aside className="compact-nav fixed group overflow-hidden left-0 top-0 z-10 h-screen w-[calc(3.73rem)] boreder-r bg-color-1 hover:w-56 hover:shadow-2xl">
                <div className="h-full flex flex-col justify-between">
                    <div className="">
                        <div className="h-16 border-b border-gray-300/40 flex items-center">
                            <a href="" className="block w-max px-2.5">
                            <img src="https://tailus.io/images/logo.svg" class="h-10" alt=""/>
                            </a>
                        </div>
                        <div className="mt-6">
                            <ul className="px-1 -ml-px space-y-4 font-medium tracking-wide text-color-1">
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a href="" className="block py-3 w-[52px] rounded-full bg-color-3 group-hover:w-full">
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <TbMoodSearch className="h-7 w-7"/>
                                            <span className="">Dashboard</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a href="" className="block py-3 w-[52px] rounded-full bg-color-3 group-hover:w-full ">
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <TbMoodSearch className="h-7 w-7"/>
                                            <span className="">Report</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a href="" className="block py-3 w-[52px] rounded-full bg-color-3 group-hover:w-full ">
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <TbMoodSearch className="h-7 w-7"/>
                                            <span className="">Data Cahsier</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a href="" className="block py-3 w-[52px] rounded-full bg-color-3 group-hover:w-full ">
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <TbMoodSearch className="h-7 w-7"/>
                                            <span className="">Data Products</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a href="" className="block py-3 w-[52px] rounded-full bg-color-3 group-hover:w-full ">
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <TbMoodSearch className="h-7 w-7"/>
                                            <span className="">Menu</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="w-max space-y-4 group-hover:w-full">
                                    <a href="" className="block py-3 w-[52px] rounded-full bg-color-3 group-hover:w-full ">
                                        <div className="w-max flex items-center px-3 gap-4">
                                            <TbMoodSearch className="h-7 w-7"/>
                                            <span className="">Transaction</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4 border-t px-2 border-gray-300/40">
                        <a href="">
                            <div className="w-max flex items-center gap-4">
                                <img className="h-10 w-10 rounded-full" src="https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg" alt="" />
                                <div>
                                    <button className="h6 text-gray-600 px-5">Logout</button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </aside>
 
        </>
    );
}
