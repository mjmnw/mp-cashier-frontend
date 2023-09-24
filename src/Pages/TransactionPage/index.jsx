import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import TopBarCashier from "../../Components/TopBarCashier";
import axiosInstance from "../../config/api";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { BiArrowBack } from "react-icons/bi";
import CartCard from "../../Components/CartCard/CartCard";

export default function TransactionPage({ products }) {
    const navigate = useNavigate();
    const userSelector = useSelector((state) => state.auth);
    const [carts, setCarts] = useState([]);
    const [change, setChange] = useState(0);

    function formatCurrency(price) {
        const formattedPrice = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
        return formattedPrice;
    }

    const getCarts = async () => {
        try {
            const res = await axiosInstance.get(
                `/cart/get-cart/${userSelector.id}`
            );

            setCarts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const totalCartValue = carts.reduce((accumualtor, cart) => {
        return parseInt(accumualtor) + parseInt(cart.product.product_price);
    }, 0);

    const createTransaction = async () => {
        try {
            for (let i = 0; i < carts.length; i++) {
                if (parseInt(inputValue) < totalAll) {
                    alert("Transaction Failed: Insufficient funds");
                    return;
                }

                await axiosInstance.post("/transaction/add-new-transaction", {
                    users_id: userSelector.id,
                    transaction_total_price: totalCartValue,
                    transaction_status: "PENDING",
                    cart_quantity: carts[i].cart_quantity,
                    products_id: carts[i].product.id,
                });

                await axiosInstance.delete(
                    `/cart/delete-cart/user=${userSelector.id}`
                );
                navigate("/cashier/home");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const calculateChange = (inputValue) => {
        let changes = 0;
        changes = totalAll - parseInt(inputValue);
        setChange(changes);
    };

    useEffect(() => {
        if (userSelector.id) {
            getCarts();
        }
    }, [userSelector.id]);

    const fetchTransactionItems = async () => {
        try {
            const res = await axiosInstance.get(
                `/transaction/get-details/${userSelector.id}`
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userSelector.id) {
            fetchTransactionItems();
        }
    }, [userSelector.id]);

    const goHomePage = () => {
        navigate("/cashier/home");
    };

    let totalProductPrice = 0;
    let totalQuantity = 0;

    carts.forEach((value) => {
        totalProductPrice +=
            parseInt(value.product.product_price) * value.cart_quantity;
        totalQuantity += value.cart_quantity;
    });

    let totalPPN = totalProductPrice / 10;

    let totalAll = totalProductPrice + totalPPN;
    let inputValue = "";

    return (
        <div className="w-screen h-screen">
            <div className="w-full border border-transparent border-b-neutral-300">
                <button className="flex items-center gap-2 m-8 ">
                    <BiArrowBack
                        className="text-neutral-500"
                        onClick={goHomePage}
                    />
                    <span className="text-blue-500 font-bold ">
                        Transaction Detail
                    </span>
                </button>
            </div>
            <div className="grid grid-cols-5 ">
                <div className="col-span-3">
                    <section className="my-4 mx-8">
                        <span className="text-blue-500 font-bold text-lg">
                            Summary
                        </span>
                    </section>
                    <section>
                        <div className="flex justify-between mx-8 border border-transparent border-b-black pb-4 mb-4">
                            <div>Item Name</div>
                            <div>Quantity</div>
                            <div>Price</div>
                        </div>
                        <div className="flex flex-col gap-2 h-full border border-transparent border-b-black pb-4 mb-4 mx-8">
                            {carts.map((value, index) => {
                                return (
                                    <div className="flex flex-col bg-neutral-200 py-4 rounded-lg p-2">
                                        <div
                                            className="flex justify-between bg-neutral-200 py-4 rounded-lg p-2"
                                            key={value.id}
                                        >
                                            <div>
                                                {value.product.product_name}
                                            </div>
                                            <div>{value.cart_quantity}</div>
                                            <div>
                                                {value.product.product_price}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <section className="flex flex-col gap-2 border border-transparent border-b-black pb-4 mb-4 mx-8">
                        <div className="flex justify-between ">
                            <span>Quantity</span>
                            <span>{totalQuantity}</span>
                        </div>
                        <div className="flex justify-between ">
                            <span>PPN 10%</span>
                            <span>{formatCurrency(totalPPN)}</span>
                        </div>
                        <div className="flex justify-between ">
                            <span>Subtotal</span>
                            <span>{formatCurrency(totalProductPrice)}</span>
                        </div>
                    </section>
                    <section className="flex flex-col mx-8">
                        <div className="flex justify-between text-blue-500 font-bold text-lg">
                            <span>Total</span>
                            <span>{formatCurrency(totalAll)}</span>
                        </div>
                    </section>
                </div>
                <div className="col-span-2 border border-neutral-300 bg-neutral-100">
                    <section className="my-4 mb-4 mx-8">
                        <span className="text-blue-500 font-bold text-4xl">
                            Payment
                        </span>
                    </section>
                    <section>
                        <div className="flex flex-col mx-6 my-4 gap-2 px-2 border border-transparent border-b-neutral-300 pb-4">
                            <span className="text-blue-500 font-bold text-lg">
                                Cash
                            </span>
                            <span>Input Amount</span>
                            <TextField
                                onChange={(e) => (inputValue = e.target.value)}
                            />
                        </div>
                    </section>
                    {/* <div className="flex flex-row ml-6 font-bold">
                        Change:
                        {!isNaN(change) && (
                            <section className="ml-5">
                                <Typography>
                                    {formatCurrency(change)}
                                </Typography>
                            </section>
                        )}
                    </div> */}
                    <section className="mx-6 my-4">
                        <button
                            className="w-full bg-blue-500 p-2 rounded-lg text-white font-bold"
                            onClick={createTransaction}
                        >
                            Pay
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
}
