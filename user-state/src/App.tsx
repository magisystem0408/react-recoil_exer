import React from 'react';
import './App.css';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "./globalState/userAtom";

const App =() =>{
  // 読み込み
  const user =useRecoilValue(userState())

  //書き込み用
  const setUser =useSetRecoilState(userState())

  //読み込み書き込み両方
  const [user2,setUser2] =useRecoilState(userState())
  return (
    <div className="App">
    </div>
  );
}

export default App;
