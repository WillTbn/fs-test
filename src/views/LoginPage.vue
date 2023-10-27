<template>
    <ion-toast
    
      position="top"
      position-anchor="header"
      :message="this.message"
      :duration="2000"
      :isOpen="this.alert"
      
    ></ion-toast>
   
    <div class="layer-2">
        <form class="content-form" @submit.prevent="authLogin()">
            <h5>Faça seu login</h5>
            <ion-input
                label="E-mail"
                label-placement="floating"
                fill="outline"
                placeholder="digite seu e-mail"
                v-model="this.user.email"
            ></ion-input>

            <ion-input
            type="password"
                label="Senha"
                label-placement="floating"
                fill="outline"
                placeholder="****"
                v-model="this.user.password"
            ></ion-input>
            <ion-button type="submit" expand="full" color="success">acessar conta</ion-button>
        </form>
    </div>
    
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue';
import {
    IonCol, IonGrid, IonRow, IonContent, IonPage, IonImg, IonInput, IonButton, IonToast, 
} from '@ionic/vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


// import useNotify from '../config/composables/notify/useNotify.js'
export default defineComponent({
    components: { IonCol, IonGrid, IonRow,IonContent, IonPage, IonImg,IonInput, IonButton, IonToast },
    setup(){
        // const {successNotify, ErroNotify} = useNotify()
        const route = useRouter();
        const store = useStore();
        // const env = import.meta.env
        const user = ref({
            email:"",
            password:"",
        })
        const responseApi = ref({})
        const alert = ref(false)
        const message = ref('danger')
        const toastColor = ref('info')
        const authLogin = async() => {
            alert.value = false
            axios.post('auth/login', user.value)
                .then(json=>{
                    console.log(json)
                    alert.value = true
                    message.value = 'Tudo certo!'
                    toastColor.value = 'success'
                    store.dispatch('user/AuthUser', json.data)
                    route.push({path:'/'}).then(() => {
                        window.location.reload();
                    })
                })
                .catch(e=>{
                    alert.value = true
                    message.value = e.response.data.message
                    // responseApi.value = ErroNotify(e.response.data.message)
                    
                })
                .finally(()=>console.log('finally'))
        }
    
        return{
            authLogin,
            user,
            alert,
            message,
            responseApi
        }
    
    }
});

</script>
<style scoped>

.layer-1{
    background-color: #000;
    display: grid;
    align-content: center;
    justify-content: center;
    height: 50vh;
}
.layer-2{
    display: grid;
    align-content: start;
    padding:2rem;
    /* justify-content: center; */
    height: 50vh;
    background-color: #fff;
}
.content-form{
    margin-top:-8rem;
    
}
.content-form h5{
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    color: #fff;
}
ion-button{
    --ion-grid-padding-xs: 20px;
    padding-top:5rem;
}
ion-input{
    padding: 16px, 342px, 16px, 20px;
    color: #000;
    margin-top: 2rem;
}
ion-grid {
    --ion-grid-padding: 20px;

    --ion-grid-padding-xs: 20px;
    --ion-grid-padding-sm: 20px;
    --ion-grid-padding-md: 20px;
    --ion-grid-padding-lg: 20px;
    --ion-grid-padding-xl: 20px;

    --ion-grid-column-padding: 30px;

    --ion-grid-column-padding-xs: 30px;
    --ion-grid-column-padding-sm: 30px;
    --ion-grid-column-padding-md: 30px;
    --ion-grid-column-padding-lg: 30px;
    --ion-grid-column-padding-xl: 30px;
}

ion-col {
    text-align: center;
}
</style>