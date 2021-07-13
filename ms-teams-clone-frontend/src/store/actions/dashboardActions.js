export const DASHBOARD_SET_USERNAME = 'DASHBOARD.SET_USERNAME';
export const DASHBOARD_SET_ONLINE_USERS = 'DASHBOARD.SET_ONLINE_USERS';
export const DASHBOARD_SET_GROUP_CALL_ROOMS = 'DASHBOARD.SET_GROUP_CALL_ROOMS';

export const setUsername = (username) => {
  return {
    type: DASHBOARD_SET_USERNAME,
    username
  };
}
;

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: DASHBOARD_SET_ONLINE_USERS,
    onlineUsers
  };
}
;

export const setGroupCalls = (groupCallRooms) => {
  return {
    type: DASHBOARD_SET_GROUP_CALL_ROOMS,
    groupCallRooms
  };
}
;
