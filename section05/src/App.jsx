import './App.css';
import {useState} from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Button from './components/Button';

function App() {  
  // console.log(state);
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
