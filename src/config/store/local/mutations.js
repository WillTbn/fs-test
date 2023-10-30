export function setLocal (state, payload) {
    state.local = payload
}
export function removeLocal(state, payload){
    let el = state.local.filter(i => i.id === payload)
    let remove = state.local.filter(e => e.id != el[0].id)


   state.local = remove
}