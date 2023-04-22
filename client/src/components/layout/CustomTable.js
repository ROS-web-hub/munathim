import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    // width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'type',
    // width: 100,
    dataIndex: 'type',
    key: 'type',
    fixed: 'left'
  },
  {
    title: 'DateTime',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: 'location',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'description',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'addInfo',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>Join</a>,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '4',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];
const CustomTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1300,
    }}
  />
);
export default CustomTable;