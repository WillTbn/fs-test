import axios from "axios";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default function useFetch(){
    const store = useStore();
    const route = useRouter();
    const user = {
        email:"",
        password:""
    }
    const validateToken = async () => {
        const json = localStorage.getItem('__mojo__token')
        
        if(!json || json === 'undefined'){
            console.log('ESTOU SEM TOKEN')
            console.log('ESTOU SEM TOKEN', json)
            route.push({name: 'login'})
            return
        }
        const token = JSON.parse(json)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const resToken = await axios.post('/auth/validate', token)

        !resToken.data.user 
        ? store.dispatch('user/removeAuth')
        : store.commit('user/setUser', resToken.data.user )
       
        


    }

    // SERÀ USADO NO FUTURO
    const auth = async(email, password) => {
        this.user = {
            email,
            password
        }

        axios.post('auth/login', user).then(json=>{
            store.commit('')
        })

    }

    return {
        validateToken
    }

}