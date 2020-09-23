import React from 'react';
import {CardComponent} from "../card/card.component";
import './card-list.styles.css'


export const CardList = props => {
  return <div className="card-list">
    {props.monsters.map(monster =>
      <CardComponent key={monster.id} monster={monster} />)}
  </div>
}
