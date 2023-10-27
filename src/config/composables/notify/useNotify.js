import { ref } from "vue"

export default function useNotify(){
    const toast = ref({})
    const successNotify = (message) =>{
        toast.value =  {
            color:'success',
            isOpen:true,
            message: message || 'Tudo certo!'
        }
        return  toast;
    }
    const ErroNotify = (message) =>{
        toast.value =  {
            color:'danger',
            isOpen:true,
            message: message || 'Falhou!'
        }
        return  toast;
    }
    const InfoNotify = (message) =>{
        toast.value =  {
            color:'info',
            isOpen:true,
            message: message || 'Informação adquirida!!'
        }
        return  toast;
    }

    return {
        successNotify,
        ErroNotify,
        InfoNotify
    }
}