import { IconAdd, IconEmail, createFromIconfont } from 'derek-dumi';
import React from 'react';

const IconFont = createFromIconfont(
  '//at.alicdn.com/t/c/font_4603988_elo6n8scby9.js',
);

export default () => {
  return (
    <>
      <IconAdd size="40px"></IconAdd>
      <IconEmail spin></IconEmail>
      <IconEmail style={{ color: 'blue', fontSize: '50px' }}></IconEmail>
      <IconFont
        type="icon-format-doc"
        style={{ color: 'blue', fontSize: '50px' }}
      ></IconFont>
      <IconFont
        type="icon-format-exl"
        style={{ color: 'blue', fontSize: '50px' }}
      ></IconFont>
    </>
  );
};
