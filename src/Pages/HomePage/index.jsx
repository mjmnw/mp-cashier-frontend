import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import NavbarCashier from "../../Components/NavbarCashier/NavbarCashier";
import TopBar from "../../Components/TopBarCashier";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import CartCard from "../../Components/CartCard/CartCard";
import "./index.css";
import { useSelector } from "react-redux";
import axiosInstance from "../../config/api";
import { useNavigate } from "react-router-dom";

export default function HomePageCashier() {
    const navigate = useNavigate();
    const [categories, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const userSelector = useSelector((state) => state.auth);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [carts, setCarts] = useState([]);

    const handleSearchProduct = useCallback(
        _.debounce((value) => {
            setUserInput(value);
        }, 1500),
        []
    );

    const getCategories = async () => {
        try {
            const categories = await axiosInstance.get(`/product/category/`);
            setCategory(categories.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const getProducts = async () => {
        try {
            const res = await axiosInstance.get(`/product`, {
                params: {
                    selectedCategory: selectedCategory,
                    searchProduct: userInput,
                },
            });
            setProducts(res.data.result.rows);
        } catch (error) {
            console.log(error);
        }
    };

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

    // console.log(carts)

    const createTransaction = async () => {
        try {
            for (let i = 0; i < carts.length; i++) {
                await axiosInstance.post("/transaction/add-new-transaction", {
                    users_id: userSelector.id,
                    transaction_total_price: totalCartValue,
                    transaction_status: "PENDING",
                    cart_quantity: carts[i].cart_quantity,
                    products_id: carts[i].product.id,
                });
                navigate("/transaction");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (userSelector.id) {
            getCarts();
        }
    }, [userSelector.id]);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        getProducts();
    }, [selectedCategory, userInput]);

    return (
        <div className="border bg-white h-[715px]">
            <NavbarCashier />
            <TopBar onNameChange={handleSearchProduct} />
            <div>
                <div className="ml-20 flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-5 overflow-x-auto style-scrollbar h-[60px] w-[924px] text-black">
                            {categories.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <CategoryCard
                                            id={value.id}
                                            name={value.product_category}
                                            onClick={setSelectedCategory}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-2 h-[485px] w-[1000px]">
                            <div className="grid grid-cols-3 gap-5 p-5 h-[490px] overflow-y-auto no-scrollbar w-full font-xs">
                                {products.map((value, index) => {
                                    return (
                                        <div key={index}>
                                            <ProductCard
                                                product_id={value.id}
                                                product_name={
                                                    value.product_name
                                                }
                                                product_image={
                                                    value.product_image
                                                }
                                                product_description={
                                                    value.product_description
                                                }
                                                product_price={
                                                    value.product_price
                                                }
                                                refreshCart={getCarts}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-2 ml-3 rounded-xl pt-3">
                        {carts.map((value, index) => {
                            return (
                                <CartCard
                                    key={value.id}
                                    product_id={value.product.id}
                                    product_image={value.product.product_image}
                                    product_name={value.product.product_name}
                                    product_price={value.product.product_price}
                                    quantity={value.cart_quantity}
                                />
                            );
                        })}
                    </div>
                    <button
                        onClick={createTransaction}
                        className="bg-blue-500 p-3 rounded-xl"
                    >
                        Process Transaction
                    </button>
                </div>
            </div>
        </div>
    );
}
