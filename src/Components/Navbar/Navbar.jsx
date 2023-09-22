import { IoMdQrScanner } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="flex  ml-20 my-6 items-start w-4/6 justify-between items-center">
            <div className="flex flex-col gap-1">
                <span className="text-xl text-blue-500 font-bold">
                    Nama Toko
                </span>
                <span className="font-semibold text-sm">The Brezze Gop 9</span>
                <span className="text-neutral-600 text-sm">Tanggal</span>
            </div>
            <div className="">
                <input className="h-10 w-80 border border-neutral-300 rounded-xl"></input>
            </div>

            <button className="flex items-center bg-green-400 py-3 px-8 gap-2 text-white rounded-xl">
                <IoMdQrScanner />
                <span className="font-bold">Scan</span>
            </button>
        </div>
    );
};

export default Navbar;
