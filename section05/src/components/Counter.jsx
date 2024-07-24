import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return(
  <div>
        {/* <Button {...buttonProps}/>
        <Button text={"카페"}/>
        <Button text={"블로그"}>
          <div>자식요소</div>
          <Header/>
        </Button> */}
        <h1>{count}</h1>
        <button onClick={ ()=> {
          setCount(count + 1);
        }}  >
          +
        </button>
        </div>
    );
  }

  export default Counter;