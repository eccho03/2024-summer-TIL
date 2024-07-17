const Button = ({text, color, children}) => {
    return (<button style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};

Button.defaultProps = { // default가 있어야 잘못 호출 시에 발생 가능한 오류를 최소화할 수 있다.
    color: "black",
}
export default Button;
