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
export function setLoading(state, payload)
{
    state.loadind = payload
}

export function removeLocal(state, payload){
    
    let el = state.permissions.filter(i => i.id === payload)
    let remove = state.permissions.filter(e => e.id != el[0].id)


   state.permissions = remove
}
