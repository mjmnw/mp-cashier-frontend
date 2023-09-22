const CartQuantitiy = () => {
    return (
        <div>
            <div className=" grid grid-cols-3 p-4 gap-1 text-sm rounded-tl-lg rounded-tr-lg  bg-neutral-200">
                <div className="flex items-center justify-center">
                    nama produk
                </div>
                <div className="flex  justify-center">
                <div class="flex flex-row border h- w-20 rounded-lg border-gray-400 relative ">
                    <button class="font-semibold border-r bg-blue-700 hover:bg-blue-600 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
                        <span class="m-auto">-</span>
                    </button>
                    <input
                        type="hidden"
                        class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                        readonly
                        name="custom-input-number"
                    />
                    <div class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                        <span>0</span>
                    </div>

                    <button class="font-semibold border-l  bg-blue-700 hover:bg-blue-600 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
                        <span class="m-auto">+</span>
                    </button>
                </div>
                </div>
                <div className="flex items-center justify-center">harga</div>
            </div>
            <button className="w-full bg-neutral-200 flex items-center justify-center rounded-bl-lg rounded-br-lg border border-t-neutral-400">
                Delete
            </button>
        </div>
    );
};

export default CartQuantitiy;
