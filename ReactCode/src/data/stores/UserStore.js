//for receiving actions via dispatcher
import dispatcher from '../Dispatcher'
//for emitting events to UI components concerned with this store
import { EventEmitter } from 'events'
import UserActionTypes from '../../action_types/UserActionTypes'

class UserStore extends EventEmitter {
    constructor(props) {
        super(props)

        this.state = { user: {} }
    }

    getAll(){
        return this.state
    }

    createUser(user){
        //this.state.user = user
        this.emit("change")
    }

    loginUser(user){
      console.log(user)
        this.state.user = user
        this.emit("change")
    }

    logOut(){
        this.state.user = {}
        this.emit("change")
    }

    handleActions(action) {
      switch (action.type) {
        case UserActionTypes.CREATE_USER:
            this.createUser(action.user);
            break
        case UserActionTypes.LOGIN_USER:
            this.loginUser(action.user);
            break
        case UserActionTypes.LOG_OUT:
            this.logOut();
            break

        }
    }
}

/*
create new instance of this store type to export
files importing TestStore get this new instance of TestStore
*/
const userStore = new UserStore
//register dispatcher to this store to handle action passing
dispatcher.register(userStore.handleActions.bind(userStore))
export default userStore