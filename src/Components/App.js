import React from 'react';
import './App.css';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';
import Playlist from '../Components/Playlist/Playlist';
import TrackList from '../Components/TrackList/TrackList';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ]
    }

  }

  render() {
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
