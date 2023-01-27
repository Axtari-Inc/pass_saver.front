import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  // @ts-ignore
  const count = useSelector(state=>state.count)

  function clickHandler(count:number) {
    dispatch({type:'SWITCH_COUNT',payload:count+1});
  }

  return (
<> {count}
  <button onClick={()=>clickHandler(count)}>+</button></>
  );
}

export default App;
