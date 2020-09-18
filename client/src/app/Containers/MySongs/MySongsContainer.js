import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import SongList from '../../Components/SongList/SongList';

export default function MySongsContainer() {
  const songs = useSelector( store => store.song.songs );
  const stashes = useSelector( store => store.stash.stashes );
  const stashedSongs = [];

  function filteredSongs(songIds){
    songIds.forEach(id => {
      if (!stashedSongs.includes(id)) {
        stashedSongs.push(id);
      };
    });
    return songs.filter(song => songIds.includes(song.id));
  }



  return (
    <Col md={8} className="text-center mx-auto">
      <div className="my-3">
        <h2>My Songs</h2>
        {!songs && <h5>You don't have any songs yet. Click Song Search or Create Song to add some new ones!</h5>}
      </div>
      {
        stashes.map(stash => (
        <>
          <hr />
          <h5>{stash.name}</h5>
          <SongList songs={filteredSongs(stash.song_ids)} />
        </>
        ))
      }
      <hr />
      <h5>Unstashed Songs</h5>
      <SongList songs={songs.filter(song => !stashedSongs.includes(song.id))} />
    </Col>
  )
}