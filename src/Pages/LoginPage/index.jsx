import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import axiosInstance from "../../config/api";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LandingPage() {
    const navigate = useNavigate();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("Username is Required"),
            password: yup.string().required("Password is Required"),
        }),
        onSubmit: (values) => {
            login(values);
        },
    });

    const login = async (form) => {
        try {
            const res = await axiosInstance.post(`/auth/login`, {
                username: form.username,
                password: form.password,
            });

            Cookies.set("user_token", res.data.result.tokens);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        navigate("/");
    }, []);

    return (
        <div className="flex flex-col bg-yellow-900 w-full h-screen place-items-center pt-4">
            {/* <div className="flex flex-col w-[200px] h-[100px] border"> */}
            <img
                src="/image/Lucy_Sky-removebg-preview.png"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-contain"
                alt=""
            />
            {/* </div> */}
            <div className="flex flex-col pb-2 mt-8 w-[380px] sm:w-[550px] sm:h-[300px]  xl:w-[600px] xl:h-[400px] rounded-xl bg-yellow-950 place-items-center">
                <h1 className="text-white pt-2 sm:pt-4 text-3xl">Login</h1>
                <div className="text-white pt-2 text-s text-center">
                    Welcome back! Please input your email and password to access
                    this app!
                </div>
                <form onSubmit={formik.handleSubmit}>
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
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        "username",
                                        event.target.value
                                    )
                                }
                                value={formik.values.username}
                            />
                            <p className="text-red-300 m-0">
                                {formik.errors.username}
                            </p>
                        </label>
                    </div>
                    <div>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MdLockOutline className="text-neutral-700" />
                            </span>
                            <input
                                className="placeholder:italic placeholder:text-neutral-700 block w-[350px] sm:w-[420px] xl:w-[510px] h-[30px] xl:h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-4 "
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        "password",
                                        event.target.value
                                    )
                                }
                                value={formik.values.password}
                            />
                            <p className="text-red-300 m-0">
                                {formik.errors.password}
                            </p>
                        </label>
                    </div>
                    <button
                        className="border border-black text-white rounded-md w-[175px] h-[30px] xl:w-[250px] xl:h-[45px] mt-8 bg-yellow-500 font-bold"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <span className="mt-2 sm:mt-5 text-yellow-500">
                    Forgot your password?
                </span>
            </div>
        </div>
    );
}
