import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {characters} from "./assets/characters";
import {Character} from "./components/Character";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      {characters.map(character=><Character key={character.id} character={character}/>)}
  </>
);

