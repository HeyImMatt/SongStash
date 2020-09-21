import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

export default function SongList({ songs, getLyrics }) {
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
      if (getLyrics) {
        dispatch(getLyrics(row));
        history.push(`/song/searchresult`);
      } else history.push(`/song/${row.id}`);
    }
  };

  return (
  <>
    {songs.length !== 0 && <BootstrapTable 
    bootstrap4 
    keyField={getLyrics ? 'mmId' : 'id'} 
    data={songs} 
    columns={columns} 
    defaultSorted={defaultSorted} 
    rowEvents={rowEvents}
    rowStyle={{cursor: 'pointer'}}
    hover
    />}
    {songs.length === 0 && <h6>No Songs</h6>}
  </>
  )
};
