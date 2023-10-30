<template>
    <ion-toast
    
      position="top"
      position-anchor="header"
      :message="this.message"
      :duration="2000"
      :isOpen="this.alert"
      
    ></ion-toast>
   
    <!-- <div class="layer-2"> -->
        <!-- <ion-grid class="text-login">
            <ion-row>
                <ion-col size="8">
                    <h5 class="">Faça seu login</h5>
                </ion-col>
            </ion-row>
        </ion-grid> -->
        <form class="content-form" @submit.prevent="authLogin()">
            <ion-grid class="control-bg">
                
                <ion-row class="ion-justify-content-center">
                    <ion-col size="12"  class="control-bg ">
                        <ion-title>
                            <h5 class="">Faça seu login</h5>
                        </ion-title>
                    </ion-col>
                </ion-row> 
                
                <ion-row class="ion-justify-content-center control-bg ">
                    <ion-col size="8" class="control-bg">
                        <ion-input
                            label="E-mail"
                            label-placement="floating"
                            fill="outline"
                            placeholder="digite seu e-mail"
                            v-model="this.user.email"
                            class="custom-input"
                        ></ion-input>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-col size="8" >
                        <ion-input
                            type="password"
                            label="Senha"
                            label-placement="floating"
                            fill="outline"
                            placeholder="****"
                            v-model="this.user.password"
                            class="custom-input"
                        ></ion-input>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <ion-col size="8" offset="2">
                        <ion-button type="submit" expand="full"  size="large">acessar conta</ion-button>
                    </ion-col>
                </ion-row>

            </ion-grid>
            
           

            
        </form>
    <!-- </div> -->
    
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue';
import {
    IonCol, IonGrid, IonRow, IonContent, IonPage, IonImg, IonInput, IonButton, IonToast, IonTitle
} from '@ionic/vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


// import useNotify from '../config/composables/notify/useNotify.js'
export default defineComponent({
    components: { IonCol, IonGrid, IonRow,IonContent, IonPage, IonImg,IonInput, IonButton, IonToast,IonTitle },
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
            store.commit('user/setLoading', true)
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
                .finally(
                    ()=>store.commit('user/setLoading', false)
                )
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
 ion-input.custom-input {
    --background: #fff;
    --placeholder-opacity: 0.8;

    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;

 }
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

    
.text-login{
    background: black;
}
.control-bg{
    background: linear-gradient(to bottom, black 55%, transparent 55%);
}
.content-form h5{
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    color: #fff;
}
ion-button{
    --ion-grid-padding-xs: 20px;
    /* padding-top:5rem; */
    /* --color:#fff; */
    --background: #00f349;
    --background-hover: #9ce0be;
    --background-activated: #88f4be;
    --background-focused: #88f4be;

    --color: #fff;

    --border-radius: 0;
    --border-color: #00f349;
    --border-style: solid;
    --border-width: 1px;
    text-transform: none;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --ripple-color: deeppink;

    --padding-top: 10px;
    --padding-bottom: 10px;
    


}
ion-input{
    padding: 16px, 342px, 16px, 20px;
    color: #000;
    margin-top: 2rem;
}
ion-grid {
    --ion-grid-width: 50%;

    --ion-grid-width-xs: 50%;
    --ion-grid-width-sm: 288px;
    --ion-grid-width-md: 384px;
    --ion-grid-width-lg: 480px;
    --ion-grid-width-xl: 570px;
}

ion-col {
    /* background-color: #135d54; */
    background-color: #fff;
   

    color: #fff;
   
}
</style>