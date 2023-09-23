import Button from "../Button/Button";

const CategoryCard = (props) => {
    return (
        <div>
            <div className="flex justify-center">
                <Button
                    style={`btn bg-green-200 hover:bg-green-200 text-bold text-xl w-[100px] h-[40px] rounded-full ml-10`}
                    onClick={props.onClick}
                    text={props.name}
                    item={props.item}
                />
            </div>
        </div>
    );
};

export default CategoryCard;
