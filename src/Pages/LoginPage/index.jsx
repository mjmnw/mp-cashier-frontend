import { MdLockOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import axiosInstance from "../../config/api";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Reducer/auth";

export default function LandingPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleResetPassword = () => {
        navigate("/resetpassword");
    };

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
            loginHandler(values);
        },
    });

    const loginHandler = async (form) => {
        try {
            const res = await axiosInstance.post(`/auth/login`, {
                username: form.username,
                password: form.password,
            });

            Cookies.set("user_token", res.data.result.tokens);
            Cookies.set("user_data", JSON.stringify(res.data.result.user));
            dispatch(login(res.data.result.user));

            if (res.data.result.user.users_roles_id === 1) {
                navigate("/admin/dashboard");
            } else {
                navigate("/cashier/home");
            }
        } catch (error) {
            if (error.response.data.isError === true) {
                const mes = "No User Found!"
                alert(error.response.data.message);
            } else {
                console.log(error);
            }
        }
    };

    return (
        <div className="flex flex-col bg-white w-full h-screen place-items-center pt-4">
            <img
                src="/image/Lucy_Sky-removebg-preview.png"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-contain"
                alt=""
            />
            <div className="bg-gradient-to-r from-yellow-950 to-yellow-700 flex flex-col pb-2 mt-8 w-[380px] sm:w-[550px] sm:h-[300px]  xl:w-[600px] xl:h-[400px] rounded-xl place-items-center">
                <h1 className="text-white pt-2 sm:pt-4 text-3xl">Login</h1>
                <div className="text-white pt-2 text-s text-center">
                    Welcome back! Please input your email and password to access
                    this app!
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <AiOutlineUser className="text-neutral-700" />
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
                            <p className="text-red-300 m-0 text-xs">
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
                            <p className="text-red-300 m-0 text-xs">
                                {formik.errors.password}
                            </p>
                        </label>
                    </div>
                    <button
                        className="border border-black text-white rounded-md w-[175px] h-[30px] xl:w-[250px] xl:h-[45px] mt-8 bg-yellow-500 font-bold ml-32"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <button
                    className="mt-2 sm:mt-5 text-yellow-500"
                    onClick={handleResetPassword}
                >
                    Forgot your password?
                </button>
            </div>
        </div>
    );
}
