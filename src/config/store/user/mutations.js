export function setUser(state, payload){
    state.user = payload
    state.auth = true
}
export function setAuth(state, payload){
    state.auth = payload
}
export function setPermissions(state, payload)
{
    state.permissions = payload
}

