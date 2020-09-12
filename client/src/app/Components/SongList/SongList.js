import React from 'react';
import { useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';

export default function SongList() {
  const user = useSelector((store) => store.user);
  const columns = [
    {
      dataField: 'artist',
      text: 'Artist',
    },
    {
      dataField: 'title',
      text: 'Song Title',
    },
  ];

  return <BootstrapTable bootstrap4 keyField={'id'} data={user.songs} columns={columns} />
}
