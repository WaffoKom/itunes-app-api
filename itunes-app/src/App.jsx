import { useState } from "react";
import Music from "./components/music.jsx";
import { url } from "./services/api.js";
import Search from "./search.jsx";

function App() {
  const [musicArtist, setMusicArtist] = useState("");

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);

    const MusicFetch = fetch(`${url}/search?term=${searchData}}&limit=25`);
    Promise.all([MusicFetch])
      .then(async (response) => {
        const MusicResponse = await response[0].json();
        console.log(MusicResponse);

        setMusicArtist({ artistName: searchData.label, ...MusicResponse });
      })
      .catch((error) => console.error(error));
    console.log(musicArtist);
  };

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      {musicArtist && <Music data={musicArtist} />}
    </div>
  );
}
export default App;
