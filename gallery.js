// pages/gallery.js
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { searchGifs } from '../lib/Giphy';

const Gallery = () => {
  const [user] = useAuthState(auth);
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    const results = await searchGifs(query);
    setGifs(results);
  };

  return (
    <div>
      <h2>GIF Gallery</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
          <div>
            {gifs.map((gif) => (
              <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
          </div>
        </div>
      ) : (
        <p>Please log in to view the gallery.</p>
      )}
    </div>
  );
};

export default Gallery;
