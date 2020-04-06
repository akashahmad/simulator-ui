import React from 'react';
import './Assets/Style/style.css'
import Header from './Components/Header/header'
// import StartSimulation from './Components/StartSimulation/startSimulation'
import Signin from './Container/Signin/index'

export default () => {
  return (
    <>
        <Header/>
        <Signin/>
    </>
  );
}
