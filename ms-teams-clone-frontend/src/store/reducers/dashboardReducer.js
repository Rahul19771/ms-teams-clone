import * as dashboardActions from '../actions/dashboardActions';

const initState = {
  username: '',
  onlineUsers: [],
  groupCallRooms: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case dashboardActions.DASHBOARD_SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case dashboardActions.DASHBOARD_SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers
      };
    case dashboardActions.DASHBOARD_SET_GROUP_CALL_ROOMS:
      return {
        ...state,
        groupCallRooms: action.groupCallRooms
      };
    default:
      return state;
  }
}
;

export default reducer;
