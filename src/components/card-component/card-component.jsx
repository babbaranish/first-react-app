import React, { Component } from 'react';
import "./card.styles.css.css";
export const Card = (props) => ( 
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
            <h1 className="card-text"> {props.monster.name} </h1>
            <h1 className="card-text"> {props.monster.email} </h1>
        </div>
 
)