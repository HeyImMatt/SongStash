import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUserSong } from '../../Actions/song';
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

export default function SongList({ songs }) {
  // Note: pass in songs from My Songs or Search containers and then remove user line below
  const user = useSelector((store) => store.user);
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
      dispatch(setCurrentUserSong(row));
      history.push('/song');
    }
  };

  return <BootstrapTable 
  bootstrap4 
  keyField={songs ? 'mmId' : 'id'} 
  data={songs || user.songs} 
  columns={columns} 
  defaultSorted={defaultSorted} 
  rowEvents={rowEvents}
  />
}
