// change code below this line
const LOGOUT='LOGOUT';
const LOGIN = 'LOGIN';
// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN 
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT 
  }
};
