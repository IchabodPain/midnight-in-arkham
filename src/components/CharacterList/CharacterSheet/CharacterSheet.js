import React, { Component } from 'react';

let CharacterSheet = (props) => {
  return (
    <div className="character-sheet">
      <div className="character-name">{props.character.name}</div> 
      <div className="character-class">The {props.character.class}</div>
      <div className="character-stat-block">
        <div className="character-stat-bar character-stat-bar--blue">
          <div className="character-stat-value">Speed: </div>
          <div className="character-stat-matrix">{props.character.min.speed} {props.character.min.speed+1} {props.character.min.speed+2} {props.character.min.speed+3}</div>
        </div>
        <div className="character-stat-bar character-stat-bar--red">
          <div className="character-stat-value">Sneak: </div>
          <div className="character-stat-matrix">{props.character.min.sneak+3} {props.character.min.sneak+2} {props.character.min.sneak+1} {props.character.min.sneak}</div>
        </div>
        <div className="character-stat-bar character-stat-bar--blue">
          <div className="character-stat-value">Fight: </div>
          <div className="character-stat-matrix">{props.character.min.fight} {props.character.min.fight+1} {props.character.min.fight+2} {props.character.min.fight+3}</div>
        </div>
        <div className="character-stat-bar character-stat-bar--red">
          <div className="character-stat-value">Will: </div>
          <div className="character-stat-matrix">{props.character.min.will+3} {props.character.min.will+2} {props.character.min.will+1} {props.character.min.will}</div>
        </div>
        <div className="character-stat-bar character-stat-bar--blue">
          <div className="character-stat-value">Lore: </div>
          <div className="character-stat-matrix">{props.character.min.lore} {props.character.min.lore+1} {props.character.min.lore+2} {props.character.min.lore+3}</div>
        </div>
        <div className="character-stat-bar character-stat-bar--red">
          <div className="character-stat-value">Luck: </div>
          <div className="character-stat-matrix">{props.character.min.luck+3} {props.character.min.luck+2} {props.character.min.luck+1} {props.character.min.luck}</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterSheet;