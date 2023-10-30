<template>
    <ion-row class="ion-justify-content-center">
        <ion-col size="4">
            {{ name }}
        </ion-col>
        <ion-col class="status" size="4">
            <ion-button  shape="round" v-if="status != null">{{status}}</ion-button>
        </ion-col>
        <ion-col size="4">
            <ion-button button-type="autline" color="medium">
                <ion-icon :icon="createOutline"></ion-icon>
            </ion-button>
            <ion-button button-type="autline" color="medium" @click="removeItem(url, id)">
                <ion-icon :icon="trash"></ion-icon>
            </ion-button>
        </ion-col>
    </ion-row>
</template>
<script>
import { defineComponent,ref } from 'vue';
import {  trash, createOutline } from 'ionicons/icons';
import { 
  IonList, IonGrid, IonCol, IonButton, IonRow,toastController,
  IonIcon

} from '@ionic/vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default defineComponent({
    name:"ListData",
    components:{
        IonList, IonGrid, IonCol, IonButton,IonRow,toastController,IonIcon
    },
    props:{
        name:{type:String},
        status:{type:Boolean},
        id:{type:String, required:true},
        url:{type:String, required:true}
    },
    data(){
        const store = useStore()
        const router = useRouter()
        const loading = ref(false)
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
        const removeItem = (url,id) =>{
            loading.value = true
            axios.delete(`${url}/${id}`)
            .then(json=>{
                presentToast( json.data.message , 'success')
                store.commit(`${url}/removeLocal`, id)
                
            }).catch(e=>{
                console.log(e)
                presentToast(e.response.data.message, 'danger')
            })
            .finally(() => loading.value = false)
            // store.commit(`${url}/removeLocal`, id)
            
        }   

        return{
            removeItem,
            trash,
            createOutline
        }
    }
})
</script>
<style scoped>
ion-col{
    -webkit-text-fill-color: #000;
}
 ion-button{
    /* --ion-grid-padding-xs: 20px;
    --border-radius: 0;
    --border-style: solid;
    --padding-top: 10px;
    --padding-bottom: 10px;
    --border-width: 1px; */
    --background: #00f349;
    --background-hover: #9ce0be;
    --background-activated: #88f4be;
    --background-focused: #88f4be;

    --color: #fff;

    --border-color: #00f349;
    text-transform: none;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --ripple-color: deeppink;

}
</style>