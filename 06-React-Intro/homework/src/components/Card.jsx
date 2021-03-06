import React from 'react';
import s from '../styles/Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
  <div className={s.card}>
    <button onClick={props.onClose} className={`${s.btn} ${s.btnColor}`}>X</button>
    <h4>{props.name}</h4>
    <div className={s.middleDiv}>
      <p>Min</p>
      <p>{props.min}</p>
      <p>Max</p>
      <p>{props.max}</p>
    </div>
  <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img no cargada"}/>
  </div>
  )
};