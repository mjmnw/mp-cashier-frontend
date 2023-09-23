const RoundButton = (props) => {
    return (
        <div>
            <button
                onClick={props.onClick}
                className={`btn w-[33px] h-[28px] items-center font-black rounded-xl text-md text-white bg-yellow-500 hover:bg-gray-800 ${props.style}`}
            >
                {props.text}
            </button>
        </div>
    );
};

export default RoundButton;
