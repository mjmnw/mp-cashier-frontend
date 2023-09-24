import RoundButton from "../RoundButton/RoundButton";

const CartCard = ({
    product_id,
    product_image,
    product_name,
    product_price,
    quantity,
    button,
}) => {

    function formatCurrency(price) {
        const formattedPrice = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
        return formattedPrice;
    }

    return (
        <div>
            <div className="px-5">
                <div className="bg-white shadow-lg rounded-3xl flex border mt-1">
                    <div className="flex items-center p-3">
                        <img
                            className="h-[100px] w-[100px] rounded-xl border"
                            src={product_image}
                            alt=""
                        />
                    </div>

                    <div className="">
                        <div className="mt-2">
                            <div className="font-black text-xs mb-5">
                                {product_name}
                            </div>
                            <div className="text-md">
                                {formatCurrency(product_price)}
                            </div>
                        </div>
                        <div className="flex gap-5 mt-2">
                            <RoundButton text="-" />
                            <div className="flex items-center text-xl">
                                {quantity}
                            </div>
                            <RoundButton text="+" />
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
