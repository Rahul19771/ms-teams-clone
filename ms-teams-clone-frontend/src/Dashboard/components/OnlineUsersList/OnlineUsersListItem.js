import React from 'react';
import userAvatar from '../../../resources/userAvatar.png';
import { callToOtherUser } from '../../../utils/webRTC/webRTCHandler';
import { callStates } from '../../../store/actions/callActions';

const OnlineUsersListItem = (props) => {
  const { onlineUser, callState } = props;

  const handleListItemPressed = () => {
    if (callState === callStates.CALL_AVAILABLE) {
      callToOtherUser(onlineUser);
    }
  };

  return (
    <div className='online_user_list_item' onClick={handleListItemPressed}>
      <div className='online_user_list_image_container'>
        <img className='online_user_list_image' src={userAvatar} />
      </div>
      <span className='online_user_list_text'>{onlineUser.username}</span>
    </div>
  );
};

export default OnlineUsersListItem;
