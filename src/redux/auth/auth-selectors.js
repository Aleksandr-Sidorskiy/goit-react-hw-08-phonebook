 const getIsLoggedIn = state => state.auth.isLoggedIn;
 // export const getIsRefreshing = state => state.auth.isRefreshing; 
 const getName = state => state.auth.user.name;
 
 const authSelectors = {
   getIsLoggedIn,
   getName,
  };
export default authSelectors;