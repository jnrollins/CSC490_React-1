/*
this file will contain actions for UI components to emit
*/
import dispatcher from '../data/Dispatcher'
import UserActionTypes from '../action_types/UserActionTypes'

export function logOut(){
    //remove the token from local storage
    return new Promise((resolve, reject) =>{
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')

      dispatcher.dispatch({
          type: UserActionTypes.LOG_OUT
      })
  })
}

//return more info about selected volop for user view
export function viewVolopUser(){
    dispatcher.dispatch({
        type: UserActionTypes.VIEW_VOLOP_USER
    })
}

//return t/f on volop saved
export function saveVolop(){
    dispatcher.dispatch({
        type: UserActionTypes.SAVE_VOLOP
    })
}

export function shareVolop(){
    dispatcher.dispatch({
        type: UserActionTypes.SHARE_VOLOP
    })
}

export function editPrefs(){
    return new Promise((resolve, reject) => {
    let myReq = new Request('/api/users/'+user._id, {method:'PUT', body: JSON.stringify(user),
        headers: {"Content-Type": "application/json"}})
    fetch(myReq)
        .then(function(res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })

    dispatcher.dispatch({
        type: UserActionTypes.EDIT_PREFS,
        user: user
    })
  })
}

export function createUser(user){
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('post', '/auth/signup');
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
              //send to dispatcher
              dispatcher.dispatch({
                  type: UserActionTypes.CREATE_USER,
                  user: xhr.response.user
              })
          }
      });
      xhr.send(JSON.stringify(user))
  })
}

export function loginUser(user){
  //make API call to login user
  //return promise to login in Login
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/loginuser');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            // success so save the token
            localStorage.setItem('token', xhr.response.token);
            localStorage.setItem('userInfo', JSON.stringify(xhr.response.user))
            //send to dispatcher
            dispatcher.dispatch({
                type: UserActionTypes.LOGIN_USER,
                user: xhr.response.user
            })
        }
    });
    xhr.send(user)
  })
}

export function addToCal(volOpID){

}

/**
user._id needs to be defined.  This is the Mongo id of the user
*/
export function editUser(user){
  return new Promise((resolve, reject) => {
    let myReq = new Request('/api/users/'+user._id, {method:'PUT', body: JSON.stringify(user),
        headers: {"Content-Type": "application/json"}})
    fetch(myReq)
        .then(function(res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })

    dispatcher.dispatch({
        type: UserActionTypes.EDIT_PREFS,
        user: user
    })

  })
}


export function initFBState(token,user){
  return new Promise((resolve, reject) => {
              // success so save the token
              localStorage.setItem('token', token);
              localStorage.setItem('userInfo', JSON.stringify(user))

              //send to dispatcher
              dispatcher.dispatch({
                  type: UserActionTypes.INIT_FBUSER,
                  user: user

              })
    })
}

export function populateFromLocalStorage(){
  return new Promise((resolve, reject) => {
    let savedUserState = localStorage.getItem('userInfo') || false
    if(savedUserState){
      dispatcher.dispatch({
        type: UserActionTypes.POPULATE_FROM_LOCAL_STORAGE,
        user: savedUserState
      })
    }
  })
}
