import CartQuantitiy from "../CartQuantity/CartQuantitiy";
import { AiTwotoneDelete } from "react-icons/ai";

const TransactionBar = () => {
    return (
        <>
            <div className="cart bg-neutral-100 ">
                <div className="mt-2 mb-12 flex justify-between items-center">
                    <div>
                        <h2 className="text-start text-2xl font-bold">
                            Transaction
                        </h2>
                        <h2 className="text-lg">id:transaction</h2>
                    </div>
                    <div className="flex items-center bg-red-400 rounded-md p-2">
                        <AiTwotoneDelete />
                        <button className="">Clear Cart</button>
                    </div>
                </div>
                <div className="grid gap-2 mb-12">
                    <CartQuantitiy />
                    <CartQuantitiy />
                    <CartQuantitiy />
                </div>
                <div className="place-items-end">
                    <div className="gap-1">
                        <div className="flex justify-between">
                            <span>Items</span>
                            <span>12</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>Rp.130.000</span>
                        </div>
                        <div className="flex justify-between mt-2 border border-transparent border-t-neutral-400 text-lg font-semibold text-blue-700">
                            <span>Total</span>
                            <span>Rp.130.000</span>
                        </div>
                        <button className="items-center mt-6 bg-blue-500 rounded-md p-2 text-center text-lg font-bold text-white w-full">
                            Process Transaction
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransactionBar;
