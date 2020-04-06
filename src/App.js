import React from 'react';
import './Assets/Style/style.css'
import Header from './Components/Header/header'
import StartSimulation from './Components/StartSimulation/startSimulation'
import Signin from './Container/Signin/index'
import Pool from './Components/Pool/pool'
export default () => {
  return (
    <>
        <Header/>
        <Pool/>
    </>
  );
}
