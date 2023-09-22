import CategoryBar from "../../Components/CatregoryBar/CategoryBar";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Sidebar from "../../Components/SideBar/SideBar";
import TransactionBar from "../../Components/TransactionBar/TransactionBar"

export default function LandingPage() {
    return (
        <div className="">
            <Sidebar/>
            <Navbar/>
            <TransactionBar/>
           
            <main className="w-[cacl(100%-3.37rem)] ml-auto bg-black">
                <div className="2xl:container mx-auto space-y-6">
                    <div className="h-16 "></div>
                    <div className="px-6 lg:px-12 mx-6">
                        <div className="h-96 flex justify-center items-center rounded-2xl border border-dashed border-gray-300/40">
                            <span className="text-gray-900">
                                <ProductCard/>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
