import {createStore} from 'vuex'
import user from './user'
import local from './local'

export default createStore({
    modules:{
        user,
        local
    }
});