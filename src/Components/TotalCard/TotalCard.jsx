export default function TotalCard({ product_price, quantity }) {
    function formatCurrency(price) {
        const formattedPrice = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
        return formattedPrice;
    }
    return (
        <div className="w-full h-[120px] border-2 ml-3 rounded-xl pt-3 overflow-y-auto no-scrollbar">
            <div className="pl-5 pt-3 text-xl">
                <div className="pb-3 font-bold text-blue-800">
                    Total Price = {formatCurrency(product_price)}
                </div>
                <div className="pb-3 font-bold text-blue-800">
                    Total Items = {quantity} {quantity === 1 ? "Item" : "Items"}
                </div>
            </div>
        </div>
    );
}
