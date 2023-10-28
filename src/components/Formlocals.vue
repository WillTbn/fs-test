<template>
     <ion-grid>
        <ion-row>
            <ion-col>
                Formulário
            </ion-col>
        </ion-row>
        <form  @submit.prevent="createLocals()">
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Nome do local" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        :model-value="local.name"
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
                        :model-value="local.zip_code"
                        
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
                        :model-value="local.city"
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
                        :model-value="local.street"
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
                        :model-value="local.number"
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
    IonInput
} from '@ionic/vue'
export default defineComponent({
    name:"FormLocals",
    components:{
        IonButtons,
        IonGrid,
        IonRow,
        IonCol,
        IonInput
    },
    setup(){
        const local = ref({
            name:"",
            zip_code:"",
            city:"",
            street:"",
            number:""
        })

        const createLocals = () =>{
            console.log('ola -> ', local.value)
        }
        return {
            local,
            createLocals
        }

    }
});

</script>