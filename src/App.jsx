// App.js

import React from 'react';
import MovieTitleCard from './movie';
import MyQuote from './assets/quote';
import TextToSpeech from './assets/test';

function App() {
  const quotesId = 1;
  return (
    <div className="">
      {/* <MovieTitleCard
        movieId={123} // Pass movieId instead of movieName
        title="A journey through space and time"
      /> */}
      <MyQuote
      quotesId={quotesId} /> 
      {/* <TextToSpeech /> */}
    </div>
  );
}

export default App;
