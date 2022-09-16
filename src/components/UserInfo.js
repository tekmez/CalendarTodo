import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const name = useSelector((state) => state.userName);

  return <div className="user-info">Welcome {name}</div>;
};

export default React.memo(UserInfo);
