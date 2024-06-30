import { Space } from 'derek-dumi';
import React from 'react';

export default () => {
  return (
    <Space
      className="container"
      direction="horizontal"
      align="end"
      wrap={true}
      size={['large', 'small']}
      split={<div>1</div>}
    >
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
    </Space>
  );
};
