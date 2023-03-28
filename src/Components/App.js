import React from 'react';
import './App.css';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchResults from '../Components/SearchResults/SearchResults';
import Playlist from '../Components/Playlist/Playlist';
import Spotify from '../util/Spotify';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      playListName: 'New Playlist',
      playListTracks: [],
      term: ''
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
    Spotify.savePlayList(this.state.playListName, trackUris).then(() => {
      this.setState({
        playListName: 'New Playlist',
        playListTracks: []
      })
    });
  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})
    });
   // console.log(searchTerm.value);
  }

  componentDidMount() {
    window.addEventListener('load', () => {Spotify.getAccessToken()});
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
