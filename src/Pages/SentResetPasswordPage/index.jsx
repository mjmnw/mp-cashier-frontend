import { MdOutlineMailOutline } from "react-icons/md";

export default function SentResetPasswordPage() {
    return (
        <div className="flex flex-col bg-yellow-900 w-full h-screen place-items-center pt-4">
            <img
                src="/image/Lucy_Sky-removebg-preview.png"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-contain"
                alt=""
            />
            <div className="flex flex-col pb-2 mt-8 w-[380px] sm:w-[550px] sm:h-[300px]  xl:w-[600px] xl:h-[400px] rounded-xl bg-yellow-950 place-items-center">
                <h1 className="text-white pt-2 sm:pt-4 text-3xl">
                    Input Your Email!
                </h1>
                <div className="text-white pt-2 text-s text-center">
                    Please input your email! We will send an email to reset your
                    password!
                </div>
                <form>
                    <div>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MdOutlineMailOutline className="text-neutral-700" />
                            </span>
                            <input
                                className="placeholder:italic placeholder:text-neutral-700 block w-[350px] sm:w-[420px] xl:w-[510px] h-[30px] xl:h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-4 xl:mt-8"
                                placeholder="Username"
                                type="text"
                                name="username"
                            />
                        </label>
                    </div>
                    <button
                        className="border border-black text-white rounded-md w-[175px] h-[30px] xl:w-[250px] xl:h-[45px] mt-8 bg-yellow-500 font-bold ml-32"
                        type="submit"
                    >
                        Sent Email
                    </button>
                </form>
            </div>
        </div>
    );
}
