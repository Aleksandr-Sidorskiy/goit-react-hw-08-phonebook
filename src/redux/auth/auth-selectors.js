 const getIsLoggedIn = state => state.auth.isLoggedIn;
 // export const getIsRefreshing = state => state.auth.isRefreshing; 
const getName = state => state.auth.user.name;
 const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
 
 const authSelectors = {
   getIsLoggedIn,
   getName,
   getIsFetchingCurrent,
  };
export default authSelectors;