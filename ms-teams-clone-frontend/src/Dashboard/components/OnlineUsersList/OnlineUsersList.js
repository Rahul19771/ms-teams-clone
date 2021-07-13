import React from 'react';
import { connect } from 'react-redux';
import OnlineUsersListItem from './OnlineUsersListItem';

import './OnlineUsersList.css';

const OnlineUsersList = ({ onlineUsers, callState }) => {
  return (
    <div className='online_user_list_container'>
      {onlineUsers.map((onlineUser) =>
        <OnlineUsersListItem
          key={onlineUser.socketId}
          onlineUser={onlineUser}
          callState={callState}
        />)}
    </div>
  );
};

const mapStateToProps = ({ dashboard, call }) => ({
  ...dashboard,
  ...call
});

export default connect(mapStateToProps)(OnlineUsersList);
