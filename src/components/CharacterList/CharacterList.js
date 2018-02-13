import React, { Component } from 'react';
import characterData from './CharacterData';
import CharacterSheet from './CharacterSheet/CharacterSheet.js';

class CharacterList extends React.Component {
  state = {characterData};

  render(){
    console.log(this.state);
    return (
      <ul className="character-list">
        {
          this.state.characterData.map((character, i) => {
            return (
              <CharacterSheet
                key = {i}
                character = {character}
              />
            );
          })
        }
      </ul>
    );
  }
}

export default CharacterList;
