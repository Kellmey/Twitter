import React from 'react';
import Tweet from './Tweet';

function App(){

  return (

<div className= "app">
  <h1>Twitter</h1>
  <Tweet name = "Kelly Meyer" message = "What a great day for LFC" likes = " 1000 likes"/>
  <Tweet name = "Mo Salah" message = "I play for my team" likes = "2000 likes"/>
  <Tweet name = "Jurgen Klopp" message = "Wow" likes = "1000 likes"/>
  <Tweet name = "Roberto Firmino" message = "Great win boys" likes = "2500 likes"/>
</div>


  );
}

export default App;