import "./input.css"

const Input = ({text, result}) => {
    return (
        <div className="input-wrapper">
            <div className="result">
                <div>{result}</div>
            </div>
            <div className="text">
                <div>{text}</div>
            </div>
        </div>
    )
};

export default Input