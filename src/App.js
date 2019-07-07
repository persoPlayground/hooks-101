import React, { useState } from 'react';

import Joke from './Joke';
import Stories from './Stories'
import Tasks from './Tasks';
import Gallery from './Gallery';
import Matrix from './Matrix';
const App = () => {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = ({target}) => setUserQuery(target.value);
  const handleKeyPress = (event) => event.key === 'Enter' ? searchQuery(): null;
  const searchQuery = () => window.open(`https://www.google.com/search?q=${userQuery}`, '_blank')
  const toggleShowGallery = () => setShowGallery(!showGallery)

  return (
    <div className="App">
      <h1>App</h1>
      {/* <div className="form">
        <input  value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery} >Search</button>
      </div> */}
      <hr />
        {/* <Joke /> */}
    <hr />
    {/* <Stories /> */}
    <hr />
    <Tasks />
    <hr />
    <div>
    {showGallery && <Gallery />}
      <button onClick={toggleShowGallery}>toggle</button>
      </div>
 
    <hr />
    <Matrix />
    </div> 
  );
}

export default App;
