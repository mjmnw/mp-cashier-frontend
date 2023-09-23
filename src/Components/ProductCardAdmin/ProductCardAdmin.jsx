const ProductCardAdmin = (props) => {
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
            <div className="static h-[385px] w-[250px] border pl-5 pr-5 flex flex-col border-green-600 rounded-xl shadow-xl">
                <div className="rounded-xl h-[180px]">
                    <img
                        className="w-[210px] h-[150px] rounded-xl border mt-4"
                        src={props.product_image}
                        alt="Product"
                    />
                </div>
                <div className="font-black text-md h-[60px] break-words">
                    {props.product_name}
                </div>

                <div className="text-xs break-words pb-6">{props.product_description}</div>

                <div className="flex flex-col justify-between">
                    <div className="flex items-center text-2xl justify-center">
                        {formatCurrency(props.product_price)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardAdmin;
