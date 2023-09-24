import { BiArrowBack } from "react-icons/bi";

const TableBiodata = () => {
    return (
        <div className="w-auto h-auto rounded-lg">
            <button className="flex items-center gap-2 m-4 mb-8">
                <BiArrowBack />
                <span className="font-bold text-red-500">Back</span>
            </button>
            <div className="w-screen h-screen flex flex-col items-center text-white font-semibold">
                <div className="flex w-4/12 justify-between bg-blue-500 p-4 border-b-white border border-transparent">
                    <span>Name</span>
                    <span className="text-green-300">Nama Cashier</span>
                </div>
                <div className="flex w-4/12 justify-between bg-blue-500 p-4  border-b-white border border-transparent">
                    <span>Email</span>
                    <span className="text-green-300">Email Cashier</span>
                </div>
                <div className="flex w-4/12 justify-between bg-blue-500 p-4  border-b-white border border-transparent">
                    <span>Phone</span>
                    <span className="text-green-300">Nomer telpon Cashier</span>
                </div>
                <div className="flex w-4/12 justify-between bg-blue-500 p-4  border-b-white border border-transparent">
                    <span>Address</span>
                    <span className="text-green-300">Alamat si Cashier</span>
                </div>
                <div className="flex w-4/12 justify-between bg-blue-500 p-4  border-b-white border border-transparent">
                    <span>Status</span>
                    <span className="text-green-300">Status aktif atau deaktif</span>
                </div>
            </div>
        </div>
    );
};

export default TableBiodata;
