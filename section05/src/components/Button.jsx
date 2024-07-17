const Button = ({text, color, children}) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }
    return (
        <button 
        onClick={onClickButton}
        // onMouseEnter={onClickButton} // 마우스를 갖다댔을 때
        // onClick={()=>{ // 이벤트 핸들러
        //     console.log(text);
        // }} 
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};

Button.defaultProps = { // default가 있어야 잘못 호출 시에 발생 가능한 오류를 최소화할 수 있다.
    color: "black",
}
export default Button;
