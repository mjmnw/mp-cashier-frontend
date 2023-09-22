const ProductCard = () => {
  return (
    <button className=" flex flex-col h-60 w-40 bg-slate-200 justify-between rounded-lg">
      <div className="">
        <img src="https://vivregourmet.com/wp-content/uploads/2020/07/81.png" className="object-fit w-full rounded-t-lg"/>
      </div>
      <div className="flex flex-col pb-3 px-2 font-bold">
        <span>Nama produk</span>
        <span className="text-blue-500">Harga Produk</span>
      </div>
    </button>
  );
};

export default ProductCard;