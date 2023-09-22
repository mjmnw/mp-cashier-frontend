import CategoryBar from "../../Components/CatregoryBar/CategoryBar";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Sidebar from "../../Components/SideBar/SideBar";
import TransactionBar from "../../Components/TransactionBar/TransactionBar";
import MultiActionAreaCard from "../../Components/ProductBar";

export default function LandingPage() {
    return (
        <div className="">
            <Sidebar />
            <Navbar />
            <TransactionBar />
            <div className="border ml-20 flex w-[1075px] h-[590px] flex-col gap-5 overflow-y-scroll p-3">
                <div className="flex h-[250px] gap-10">
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                </div>
                <div className="flex h-[250px] gap-10">
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                </div>
                <div className="flex h-[250px] gap-10">
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                </div>
            </div>
        </div>
    );
}
