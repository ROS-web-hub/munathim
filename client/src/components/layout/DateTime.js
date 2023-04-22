import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const DateTime = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);
export default DateTime;