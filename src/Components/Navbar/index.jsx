import { TfiMenu } from "react-icons/tfi";
import { TbMoodSearch } from "react-icons/tb";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row gap-14 ml-10 pt-6 h-[100px] border">
                <div className="pt-3">
                    <TfiMenu size={60} />
                </div>
                <div className="w-[300px] h-[100px]">
                    <div>Logo</div>
                    <div className="text-xl">Puri Bintaro Sektor 9</div>
                    <div className="text-xs font-bold">
                        Monday, 20-December-2023
                    </div>
                </div>
                <div>
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <TbMoodSearch className="text-neutral-700" />
                        </span>
                        <input
                            className="placeholder:italic placeholder:text-neutral-700 block w-[400px] h-[45px] rounded-md py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 mt-3"
                            placeholder="Cari Menu..."
                            type="text"
                            name="search"
                        />
                    </label>
                </div>
            </div>
        </>
    );
}
