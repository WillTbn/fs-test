export function setData ( context, data ) {
    console.log('data locals -> ',data)
    context.commit('setLocal',data.locals )
}
