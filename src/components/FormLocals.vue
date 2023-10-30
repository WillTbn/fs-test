<template>
    <ion-loading 
        :trigger="true" 
        message="Loading..." 
        spinner="circles"
        duration="3000"
        :isOpen="loading"
    ></ion-loading>
    <ion-grid >
        <form  @submit.prevent="createLocals()">
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Nome do local" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="local.name"
                    ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Cep" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="local.zip_code"
                        
                    ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="City" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="local.city"
                    ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Rua" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="local.street"
                    ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Número" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="local.number"
                    ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-button type="submit" color="success">
                        Criar novo local
                    </ion-button>
                </ion-col>
            </ion-row>
        </form>
    </ion-grid>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { 
    IonButtons,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonLoading,
    toastController,
} from '@ionic/vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
export default defineComponent({
    name:"Formlocals",
    components:{
        IonButtons,
        IonGrid,
        IonRow,
        IonCol,
        IonInput,
        IonLoading,
        toastController,
    },
    setup(){
        const router = useRouter()
        const loading = ref(false)
        const local = ref({
            name:"",
            zip_code:"",
            city:"",
            street:"",
            number:""
        })
        const presentToast = async(msg, status) => {
            const toast = await toastController.create({
                message: msg,
                duration: 1500,
                position: 'middle',
                cssClass: status,
                color:status
            });

            await toast.present();
        }
        const createLocals = () =>{
            
            loading.value = true
            axios.post('local', local.value).then(json => {
                presentToast('Local cadastrado!', 'success')
                router.push({path:'/locals'}).then(() => {
                    window.location.reload();
                })
            }).catch(e => {
                presentToast(e.response.data.message, 'danger')
            }).finally(()=>{
                loading.value = false
            })
            console.log('ola -> ', local.value)
        }
        return {
            local,
            createLocals
        }

    }
});

</script>
<style scoped>
ion-input{
    padding: 16px, 342px, 16px, 20px;
    color: #000;
    margin-top: 2rem;
}
</style>