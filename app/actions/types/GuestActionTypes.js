/*
this file will contain all valid action types
that can be sent from view components
*/

const GuestActionTypes = {
  //Log actions
  GET_LOG_STATE: 'GET_LOG_STATE',
  GET_USER_TYPE: 'GET_USER_TYPE',
  LOG_IN_ORG: 'LOG_IN_ORG',
  LOG_IN_USER: 'LOG_IN_USER',
  //display actions
  DISPLAY_HOME: 'DISPLAY_HOME',
  DISPLAY_LOGIN: 'DISPLAY_LOGIN',
  DISPLAY_REGISTER: 'DISPLAY_REGISTER',
  DISPLAY_ABOUT: 'DISPLAY_ABOUT',
  DISPLAY_CONTACT: 'DISPLAY_CONTACT',
  //data request actions
  CAT_ZIP_SEARCH: 'CAT_ZIP_SEARCH'
}

export default GuestActionTypes