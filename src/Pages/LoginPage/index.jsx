import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";

export default function LandingPage() {
    return (
        <div className="flex flex-col bg-yellow-900 w-full h-[715px] place-items-center pt-20">
            <div className="flex flex-col w-[200px] h-[100px] border">Logo</div>
            <div className="flex flex-col mt-14 w-[600px] h-[400px] rounded-xl bg-yellow-950 place-items-center">
                <h1 className="text-white pt-8 text-3xl">Login</h1>
                <div className="text-white pt-2 text-s">
                    Welcome back! Please input your email and password to access
                    this app!
                </div>
                <div>
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdOutlineMailOutline className="text-neutral-700" />
                        </span>
                        <input
                            className="placeholder:italic placeholder:text-neutral-700 block w-[510px] h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-12"
                            placeholder="Email"
                            type="text"
                            name="search"
                        />
                    </label>
                </div>
                <div>
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdLockOutline className="text-neutral-700" />
                        </span>
                        <input
                            className="placeholder:italic placeholder:text-neutral-700 block w-[510px] h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-4"
                            placeholder="Password"
                            type="text"
                            name="search"
                        />
                    </label>
                </div>
                <button className="border border-black bg-white rounded-xl w-[250px] h-[45px] mt-8 p-2 bg-yellow-500 font-bold">
                    Login
                </button>
                <span className="mt-7 text-yellow-500">
                    Forgot your password?
                </span>
            </div>
        </div>
    );
}
