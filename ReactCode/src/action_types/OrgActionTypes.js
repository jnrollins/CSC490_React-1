/*
this file will contain all valid action types
that can be sent from view components
*/

const OrgActionTypes = {
  //Log actions
  LOG_OUT: 'LOG_OUT',
  //org unique actions
  CREATE_VOLOP: 'CREATE_VOLOP',
  DELETE_VOLOP: 'DELETE_VOLOP',
  UPDATE_VOLOP: 'UPDATE_VOLOP',
  VIEW_VOLOP_ORG: 'VIEW_VOLOP_ORG',
  MSG_VOLUNTEER: 'MSG_VOLUNTEER',
  VIEW_ORG_INFO: 'VIEW_ORG_INFO',
  EDIT_ORG_INFO: 'EDIT_ORG_INFO',
  CREATE_ORG: 'CREATE_ORG',
  LOGIN_ORG: 'LOGIN_ORG',
  GET_ALL_VOLOPS_BY_ORG: 'GET_ALL_VOLOPS_BY_ORG',
  GET_VOLOP_BY_ID: 'GET_VOLOP_BY_ID',
  POPULATE_FROM_LOCAL_STORAGE: 'POPULATE_FROM_LOCAL_STORAGE'
}

export default OrgActionTypes
