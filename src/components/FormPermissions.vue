<template>

    <ion-grid>
        <ion-row>
            <ion-col>
                Formulário
            </ion-col>
        </ion-row>
        <form  @submit.prevent="createUser()">
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Nome" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="user.name"
                    ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Email" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="user.email"
                        
                    ></ion-input>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col>
                    Função
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col>
                    <!-- <ion-item> -->
                        <ion-radio v-model="user.local"></ion-radio>
                        <ion-label position="fixed">Radio Label</ion-label>
                    <!-- </ion-item> -->
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <!-- <ion-item> -->
                        <ion-radio v-model="user.permissions"></ion-radio>
                        <ion-label position="fixed">Radio Label</ion-label>
                    <!-- </ion-item> -->
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-button type="submit" color="success">
                        enviar solicitação de permissão
                    </ion-button>
                </ion-col>
            </ion-row>
          
        </form>
    </ion-grid>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue';
import { 
    IonButtons,
    IonGrid,
    IonRow,
    IonCol,
    IonInput
} from '@ionic/vue'
import axios from 'axios';
export default defineComponent({
    name:"FormPermissions",
    components:{
        IonButtons,
        IonGrid,
        IonRow,
        IonCol,
        IonInput
    },
    setup(){
        const  generatePassword = () => {
            let height = 9;
            let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
            let teste = "";
            for (var i = 0, n = charset.length; i < height; ++i) {
                teste += charset.charAt(Math.floor(Math.random() * n));
            }
            user.value.password = teste
            user.value.password_confirm = teste
            
        }

        const user = ref({
            name:"",
            email:"",
            password: "",
            password_confirm: "",
            local:false,
            permissions:false,
            role_id:"2"
        })
       

        const createUser = () =>{
            const json = JSON.parse(localStorage.getItem('__mojo__token'))
            axios.defaults.headers.common['Authorization'] = `Bearer ${json}`
            console.log('ola -> ', user.value)
            axios.post('auth/register', user.value).then(e=>console.log(e)).catch(e=>console.log(e))
        }
        onMounted(()=>{
            generatePassword()
        })
        return {
            user,
            generatePassword,
            createUser
        }

    }
});
</script>