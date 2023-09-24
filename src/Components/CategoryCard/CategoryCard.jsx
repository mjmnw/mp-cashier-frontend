import Button from "../Button/Button";

const CategoryCard = ({ id, name, onClick, }) => {
    return (
        <div>
            <div className="flex justify-center">
                <Button
                    style={`btn bg-yellow-500 text-bold text-md text-white w-[100px] h-[40px] rounded-full ml-10 hover:bg-gray-800 shadow-md`}
                    onClick={() => onClick(id)}
                    text={name}
                />
            </div>
        </div>
    );
};

export default CategoryCard;
