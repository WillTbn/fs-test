<template>
     <ion-page style="text-color:#000">
        
        <ion-grid>
            <ion-row>
                <ion-item>
                    <ion-searchbar></ion-searchbar>
                </ion-item>
            </ion-row>
            <ion-row>
                <modal-form
                    textButton="Cria nova Local"
                    description="Cadastre um novo local para seus eventos, este cadastro é direcionado a localização"
                    title="Cria novo local"
                >
                   <form-locals></form-locals>
                </modal-form>
                <!-- <ion-item>
                    <ion-button color="success">
                        Criar nova permissão
                    </ion-button>
                </ion-item> -->
            </ion-row>
            <ion-row v-for="(locals, index) in list" :key="index">
                <list-data
                    :name="locals.name"
                ></list-data>
            </ion-row>
        </ion-grid>

    </ion-page>
</template>

<script>
import {IonPage, IonCard, IonContent, IonRow, IonGrid,IonCol, IonButton, IonSearchbar, IonItem, IonList} from '@ionic/vue'
import { defineComponent,onMounted, ref, computed} from 'vue';
import useFetch from '@/config/composables/locals/useFetch'
import { useStore } from 'vuex';
import ModalForm from '../components/ModalForm.vue'
import ListData from '../components/ListData.vue';
import FormLocals from '../components/FormLocals.vue';


export default defineComponent({
    name:"LocalsPage",
    components:{IonPage, IonCard, IonContent, IonRow, IonGrid,IonCol,IonButton,IonSearchbar, IonItem, IonList, ModalForm, ListData,FormLocals},
    setup() {
        const store = useStore()
        const {getAll} = useFetch()
        const list = computed(() => store.state.local.local)
        const error = ref('')


        // const dismiss = () => modal.value.$el.dismiss();


        const getLocals = async() =>{
            try {
               const data = await getAll();
               console.log(data)
            } catch (e) {
                console.log(e);
            } finally {
                console.log("finally moon");
            }
        }
        onMounted(() => {
            getLocals()
        })

        return{
            list,
            error
        }
    }
})
</script>