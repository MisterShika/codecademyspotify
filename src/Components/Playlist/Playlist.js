import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
   
    handleNameChange(e){
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className="Playlist">
            <input defaultValue={this.props.playlistName} onChange={this.handleNameChange} />
            <TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;