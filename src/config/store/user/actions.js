import axios from "axios"

export function AuthUser (context, data) {
    console.log('Estou na modules', data)
    
    context.commit('setUser', data.user)
    context.commit('setAuth', true)
    // context.commit('setToken', json.data.authorisation.token)

    localStorage.setItem('__mojo__token', JSON.stringify(data.token))
}

export function removeAuth(context){
    const json = JSON.parse(localStorage.getItem('__mojo__token'))

    axios.defaults.headers.common['Authorization'] = `Bearer ${json}`

    axios.post('auth/logout').then(e=>console.log(e)).catch(e=>console.log(e))
    context.commit('setUser', null)
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('__mojo__token')

}
