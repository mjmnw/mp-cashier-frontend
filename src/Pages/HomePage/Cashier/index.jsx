// import NavbarAdmin from "../../../Components/NavbarAdmin/NavbarAdmin";
import { useEffect, useState } from "react";
import NavbarCashier from "../../../Components/NavbarCashier/NavbarCashier";
import TopBar from "../../../Components/TopBarCashier";
import axios from "axios";
import CategoryCard from "../../../Components/CategoryCard/CategoryCard";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import CartCard from "../../../Components/CartCard/CartCard";
import "./index.css";

export default function HomePageCashier() {
    const [categories, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    const getCategories = async () => {
        try {
            const categories = await axios.get(
                `http://localhost:5000/product/category/`
            );
            console.log(categories.data.result);
            setCategory(categories.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const getProducts = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/product/?_limit=12&_page=1&_sortBy=product_price&_sortDir=DESC&minPrice=0&maxPrice=&minStock=0&maxStock=100&selectedCategory=&searchProduct=`
            );
            console.log(res.data.result.rows);
            setProducts(res.data.result.rows);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    return (
        <div className="border bg-white h-[715px]">
            <NavbarCashier />
            <TopBar />
            <div className="ml-20 flex flex-row">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-5 overflow-x-auto style-scrollbar h-[60px] w-[924px] text-black">
                        {categories.map((value, index) => {
                            return (
                                <div key={index}>
                                    <CategoryCard
                                        name={value.product_category}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-2 h-[485px] w-[1000px]">
                        <div className="grid grid-cols-3 gap-5 p-5 h-[490px] overflow-y-auto no-scrollbar w-full">
                            {products.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <ProductCard
                                            product_name={value.product_name}
                                            product_image={value.product_image}
                                            product_description={
                                                value.product_description
                                            }
                                            product_price={value.product_price}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full border-2 ml-3 rounded-xl pt-3">
                    <CartCard />
                </div>
                {/* <NavbarAdmin /> */}
            </div>
        </div>
    );
}
