<template>
   
    <ion-button id="open-modal" expand="block" color="success">{{textButton}}</ion-button>

    <ion-modal ref="modal" trigger="open-modal">
        <ion-content>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
                <ion-text>
                   {{description}}
                </ion-text>
                <ion-buttons slot="end">
                    <ion-button color="light" @click="dismiss()">
                        <ion-icon :icon="close"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
            <slot/>
        </ion-content>
    </ion-modal>
   
  </template>
<script>
import { ref } from 'vue';
import {  defineComponent,computed } from 'vue';
import {  close } from 'ionicons/icons';
import { IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonAvatar,
    IonImg,
    IonLabel, 
    IonText
} from '@ionic/vue'
export default defineComponent({
    name:'CreatedPermissions',
    props:{
        textButton:{type:String, required:true},
        title:{type:String, required:true},
        description:{type:String, required:true}
    },
    components:{
        IonButtons,
        IonButton,
        IonModal,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonItem,
        IonList,
        IonAvatar,
        IonImg,
        IonLabel,
        IonText
    },

    setup(){

        const modal = ref();

        const dismiss = () => modal.value.$el.dismiss();
        return{
            modal,
            close,
            dismiss
        }
    }
    
});
</script>
<style>
  ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }
</style>
