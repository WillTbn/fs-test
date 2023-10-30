<template>
    
    <ion-col size="12">
        <ion-title color="dark">{{titlePage}}</ion-title>
    </ion-col>

    <ion-col size="12" >
        <ion-button id="open-custom-dialog" expand="block" class="control-button">{{textButton}}</ion-button>
    </ion-col>
    <!-- <ion-content> -->

        <ion-modal ref="modal" id="example-modal" trigger="open-custom-dialog">
            <div class="wrapper">
                <ion-row class="ion-justify-content-between ion-align-items-center">
                    <ion-col size="10">
                        <ion-title color="dark">
                            <h2 >{{ title }}</h2>

                        </ion-title>
                    </ion-col>
                    <ion-col size="2" offset="">
                        <!-- <ion-buttons slot="end"> -->
                            <ion-button size="small"  @click="dismiss()" fill="clear">
                                <ion-icon :icon="close" size="small"></ion-icon>
                            </ion-button>
                        <!-- </ion-buttons> -->
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="10" offset="1">
                        <p>
                            <ion-text style="color: black;">
                                {{ description }}
                            </ion-text>
                        </p>
                    </ion-col>
                </ion-row>
                <slot/>
            </div>
            <!-- <ion-content>
                <ion-toolbar>
                    <ion-title>{{ title }}</ion-title>
                    <ion-text>
                       {{description}}
                    </ion-text>
                    <ion-buttons slot="end">
                        <ion-button @click="dismiss()">
                            <ion-icon :icon="close"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                
            </ion-content> -->
        </ion-modal>
    <!-- </ion-content> -->
   
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
    IonText,
    IonCol,
    IonIcon,
    IonRow,


} from '@ionic/vue'
export default defineComponent({
    name:'CreatedPermissions',
    props:{
        textButton:{type:String, required:true},
        title:{type:String, required:true},
        description:{type:String, required:true},
        titlePage:{type:String}
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
        IonText,
        IonCol,
        IonIcon,
        IonRow
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
<style scoped>
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
ion-button.control-button {
    --ion-grid-padding-xs: 20px;
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
ion-title {
    -webkit-text-fill-color: #000;
    font-weight: bold;
}
ion-modal#example-modal {
    --width: fit-content;
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }

  ion-modal#example-modal h1 {
    margin: 20px 20px 10px 20px;
  }

  ion-modal#example-modal ion-icon {
    margin-right: 6px;

    width: 48px;
    height: 48px;

    padding: 4px 0;

    color: #aaaaaa;
  }

  ion-modal#example-modal .wrapper {
    margin-bottom: 10px;
  }
</style>
