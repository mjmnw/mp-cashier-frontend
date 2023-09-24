import { useSelector } from "react-redux";
import axiosInstance from "../../config/api";

const ProductCard = ({
    product_id,
    product_image,
    product_description,
    product_name,
    product_price,
    refreshCart
}) => {
    const userSelector = useSelector((state) => state.auth);

    function formatCurrency(price) {
        const formattedPrice = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
        return formattedPrice;
    }

    const addToCartHandler = async () => {
        try {
            const res = await axiosInstance.post("/cart/add-to-cart", {
                users_id: userSelector.id,
                products_id: product_id,
                cart_quantity: 1,
            });
            refreshCart()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="static h-[385px] w-[250px] border pl-5 pr-5 flex flex-col border-yellow-500 rounded-xl shadow-xl">
                <div className="rounded-xl h-[180px]">
                    <img
                        className="w-[210px] h-[150px] rounded-xl border mt-4"
                        src={product_image}
                        alt="Product"
                    />
                </div>
                <div className="font-black text-md h-[60px] break-words">
                    {product_name}
                </div>

                <div className="text-xs break-words pb-6">
                    {product_description}
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex items-center text-2xl justify-center">
                        {formatCurrency(product_price)}
                    </div>
                    <button
                        className="flex items-center w-[125px] h-[30px] rounded-xl border justify-center ml-10 mt-3 bg-yellow-500 hover:bg-gray-800 text-white text-xs"
                        onClick={addToCartHandler}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
