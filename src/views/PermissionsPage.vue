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
                    textButton="Cria Nova Permissão"
                    description="Registre funcão na sua conta para facilitar organização"
                    title="Cria novo permissão"
                >
                    <form-permissions/>
                </modal-form>
                <!-- <ion-item>
                    <ion-button color="success">
                        Criar nova permissão
                    </ion-button>
                </ion-item> -->
            </ion-row>
            <ion-row v-for="(persons, index) in list" :key="index">
                <list-data
                    :name="persons.name"
                ></list-data>
            </ion-row>
        </ion-grid>

    </ion-page>
  
</template>
<script  lang="ts">
import {IonPage, IonCard, IonContent, IonRow, IonGrid,IonCol, IonButton, IonSearchbar, IonItem, IonList} from '@ionic/vue'
import { defineComponent,onMounted, ref, computed} from 'vue';
import usePermissions from '@/config/composables/permissions/usePermissions'
import { useStore } from 'vuex';
import ModalForm from '../components/ModalForm.vue'
import FormPermissions from '../components/FormPermissions.vue';
import ListData from '../components/ListData.vue';


export default defineComponent({
    name:"PermissionsPage",
    components:{IonPage, IonCard, IonContent, IonRow, IonGrid,IonCol,IonButton,IonSearchbar, IonItem, IonList, ModalForm,FormPermissions,ListData},
    setup() {
        const store = useStore()
        const {getAll} = usePermissions()
        const list = computed(() => store.state.user.permissions)
        const error = ref('')


        // const dismiss = () => modal.value.$el.dismiss();


        const getUsers = async() =>{
            try {
               const data = await getAll('user');
               console.log(data)
            } catch (e) {
                console.log(e);
            } finally {
                console.log("finally moon");
            }
        }
        onMounted(() => {
            getUsers()
        })

        return{
            list,
            error
        }
    }
})
</script>
<style scoped>
.back-with{
    background-color: #fff;
    color: #000;
}
.layer-2{
    padding:2rem;
    /* justify-content: center; */
    height: 55vh;
   
    background-color: #fff;
    color: #000;
    
}
</style>