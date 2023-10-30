<template>
     <!-- <ion-page style="text-color:#000"> -->
        
        <ion-grid fixed class="control-bg">
            <ion-row class="ion-justify-content-center ion-align-items-center">
                <ion-col size="8" class="">
                    <ion-searchbar></ion-searchbar>
                </ion-col>
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
            
            <list-data
                v-for="(locals, index) in list" :key="index"
                :name="locals.name"
                :id="locals.id"
                url="local"
            ></list-data>
            
        </ion-grid>

    <!-- </ion-page> -->
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
<style scoped>
.control-bg{
    background: linear-gradient(to bottom, black 8%, transparent 8%);
}
ion-grid {
    --ion-grid-width: 100%;

    --ion-grid-width-xs: 50%;
    --ion-grid-width-sm: 288px;
    --ion-grid-width-md: 384px;
    --ion-grid-width-lg: 480px;
    --ion-grid-width-xl: 570px;
}
</style>