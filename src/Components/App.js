import React from 'react';
import './App.css';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';
import Playlist from '../Components/Playlist/Playlist';
// import TrackList from '../Components/TrackList/TrackList';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ],
      playListName: 'Playlist 1',
      playListTracks: [
        {name: 'playlistname1', artist: 'playlistartist1', album: 'playlistalbum1', id: 4},
        {name: 'playlistname2', artist: 'playlistartist2', album: 'playlistalbum2', id: 5},
        {name: 'playlistname3', artist: 'playlistartist3', album: 'playlistalbum3', id: 6}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playListTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playListTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.playListTracks; 
    tracks = tracks.filter(searchTrack => searchTrack.id !== track.id);
    this.setState({playListTracks: tracks});
  }

  updatePlayListName(name){
    this.setState({playListName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playListTracks.map(track => track.uri);
  }

  search(searchTerm){
    console.log(searchTerm);
  }

  render() {
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar onSearch={this.search} />
        <div class="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlayListName} onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
