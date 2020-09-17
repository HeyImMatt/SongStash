import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../Actions/song';
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

export default function SongList({ songs, getLyrics }) {
  // Note: pass in songs from My Songs or Search containers and then remove user line below
  const userSongs = useSelector((store) => store.song.songs);
  const history = useHistory();
  const dispatch = useDispatch();
  const columns = [
    {
      dataField: 'artist',
      text: 'Artist',
      sort: true,
    },
    {
      dataField: 'title',
      text: 'Song Title',
      sort: true,
    },
  ];
  const defaultSorted = [{
    dataField: 'artist',
    order: 'asc',
  }]
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      if (songs) {
        dispatch(getLyrics(row));
      } else dispatch(setCurrentSong(row));
      history.push('/song');
    }
  };

  return <BootstrapTable 
  bootstrap4 
  keyField={songs ? 'mmId' : 'id'} 
  data={songs || userSongs} 
  columns={columns} 
  defaultSorted={defaultSorted} 
  rowEvents={rowEvents}
  />
}
