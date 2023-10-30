<template>
    <div class="">

        <ion-grid :fixed="true" class="layout-2 control-bg">
            <ion-row class="">
                <ion-col class="">
                    <ion-searchbar></ion-searchbar>
                </ion-col>
            </ion-row>
            <ion-row>
                
                <modal-form
                    titlePage="Permissões"
                    textButton="Cria Nova Permissão"
                    description="Registre funcão na sua conta para facilitar organização"
                    title="Novo permissão"
                >
                    <form-permissions/>
                </modal-form>
                <!-- <ion-item>
                    <ion-button color="success">
                        Criar nova permissão
                    </ion-button>
                </ion-item> -->
            </ion-row>
            <!-- <ion-row > -->
                <list-data
                    v-for="(persons, index) in list" :key="index"
                    :name="persons.name"
                    :id="persons.id"
                    url="user"
                ></list-data>
            <!-- </ion-row> -->
        </ion-grid>
    </div>
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

/* 
.layer-2{
    padding:2rem;
    justify-content: center; 
    height: 55vh;
    
    background-color: #fff;
    color: #000;
    
}
*/
/*
.layer-2{
     background-color: #000;
    display: grid;
    align-content: center;
    justify-content: center;
    height: 50vh; 
}
*/
.control-bg{
    background: linear-gradient(to bottom, black 15%, transparent 15%);
}
</style>