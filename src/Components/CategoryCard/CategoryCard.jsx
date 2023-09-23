import Button from "../Button/Button";

const CategoryCard = (props) => {
    return (
        <div>
            <div className="flex justify-center">
                <Button
                    style={`btn bg-yellow-500 hover:bg-green-200 text-bold text-md text-white w-[100px] h-[40px] rounded-full ml-10 hover:bg-gray-800 shadow-md`}
                    onClick={props.onClick}
                    text={props.name}
                    item={props.item}
                />
            </div>
        </div>
    );
};

export default CategoryCard;
