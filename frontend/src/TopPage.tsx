import React from 'react';
import { Link } from 'react-router-dom';

export const TopPage: React.FC = () => {
  return (
    <>
      <h2>管理TOP</h2>
      <Link to={'/fruits/'}>果物マスタ管理</Link>
      <Link to={'/sales/'}>販売情報管理</Link>
      <Link to={'/sold/'}>販売統計情報</Link>
    </>
  );
};
