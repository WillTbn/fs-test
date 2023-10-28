import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default function useFetch(){
    const store = useStore();
    const route = useRouter();
    const json = localStorage.getItem('__mojo__token')
    const token = JSON.parse(json)
    
  
    const getAll = async () => {
        let res = ""
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try{
            res = await axios.get('local')
            store.commit('local/setData', res.data.data.locals)
        }catch(err){
            res = "Erro ao obter informações da API."
        }
        return res
    }

    return {
        getAll
    }

}