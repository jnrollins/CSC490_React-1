/*
this file will contain actions for UI components to emit
*/
import dispatcher from '../data/Dispatcher'
import OrgActionTypes from '../action_types/OrgActionTypes'

//return t/f on loggedIn state
export function getLogState(){
  dispatcher.dispatch({
    //only use actions from ActionTypes - consistent communication!
    type: OrgActionTypes.GET_LOG_STATE
  })
}

//return string on user type state (guest, user, org)
export function getUserType(){
  dispatcher.dispatch({
    type: OrgActionTypes.GET_USER_TYPE
  })
}

//Create a new volop in database
export function createVolop(volOp){
    let myReq = new Request('/api/volOps', {method:'POST', body: JSON.stringify(volOp),
        headers: {"Content-Type": "application/json"}})
    fetch(myReq)
        .then(function(res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })

  dispatcher.dispatch({
    type: OrgActionTypes.CREATE_VOLOP,
    volOp: volOp
  })
}

//delete a volop from database
export function deleteVolop(){
  dispatcher.dispatch({
    type: OrgActionTypes.DELETE_VOLOP
  })
}

//update a volop in database
export function updateVolop(volOp){
    let myReq = new Request('/api/volOps/' + volOp._id, {method:'PUT', body: JSON.stringify(volOp),
        headers: {"Content-Type": "application/json"}})
    fetch(myReq)
        .then(function(res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })

  dispatcher.dispatch({
    type: OrgActionTypes.UPDATE_VOLOP,
    volOp: volOp
  })
}
//view a volop
export function viewVolopOrg(){
  dispatcher.dispatch({
    type: OrgActionTypes.VIEW_VOLOP_ORG
  })
}
//message previous volunteers (probably removing)
export function msgVolunteer(){
  dispatcher.dispatch({
    type: OrgActionTypes.MSG_VOLUNTEER
  })
}
//view org info
export function viewOrgInfo(){
  dispatcher.dispatch({
    type: OrgActionTypes.VIEW_ORG_INFO
  })
}
//edit org info
export function editOrgInfo(){
  dispatcher.dispatch({
    type: OrgActionTypes.EDIT_ORG_INFO
  })
}

//create an organization
export function createOrg(org){
    let myReq = new Request('/api/orgrequests', {method:'POST', body: JSON.stringify(org),
        headers: {"Content-Type": "application/json"}})
    fetch(myReq)
        .then(function(res){
            console.log(res)
            let myReq1 = new Request('/emailRequest', {method: 'POST', body: JSON.stringify(org),
                headers: {'Content-Type': 'application/json'}})
            fetch(myReq1)
                .then(function(res1){
                    console.log(res1)
                })
                .catch(function(err1){
                    console.log(err1)
                })
        })
        .catch(function(err){
            console.log(err)
        })

    dispatcher.dispatch({
        type: OrgActionTypes.CREATE_ORG,
    })
}

export function loginOrg(org){
    //make API call to login user
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/loginorg');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            // success so save the token
            localStorage.setItem('token', xhr.response.token);

            //send to dispatcher
            dispatcher.dispatch({
                type: OrgActionTypes.LOGIN_USER,
                org: xhr.response.org
            })
        }
    });
    xhr.send(org);
}

//return t/f on successful log out
export function logOut(){
    //remove the token from local storage
    localStorage.removeItem('token')

    dispatcher.dispatch({
        type: OrgActionTypes.LOG_OUT
    })
}


/*to export all functions
export default {
  getLogState,
  getUserType,
  logOut,
  createVolop,
  deleteVolop,
  updateVolop,
  viewVolopOrg,
  msgVolunteer,
  VIEW_ORG_INFO,
  editOrgInfo
}
*/