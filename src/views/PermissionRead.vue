<template>
    <ion-page style="text-color:#000">
        <!-- <ion-content color="light" :fullscreen="true" class="ion-padding">

            <h1>ESTOU AQUI PASAPSOIDOPAIOS</h1>
            <ion-card color="dark">
                <table>
                    <thead>
                    <tr>
                        <th>Nome</th>
                       
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(pessoa, index) in list" :key="index">
                        <td>{{ pessoa.name }}</td>
                        
                        <td>
                            <p>editar</p>
                            <p>excluir</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                
            </ion-card>
        </ion-content> -->
        
        <ion-grid>
            <ion-row v-for="(persons, index) in list" :key="index">
                <ion-col>
                    {{ persons.name }}
                </ion-col>
                <ion-col>
                    <ion-button>ativo</ion-button>
                </ion-col>
                <ion-col>
                    <ion-button>editar</ion-button>
                    <ion-button>excluir</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>

    </ion-page>
</template>
<script>
import {IonPage, IonCard, IonContent, IonRow, IonGrid,IonCol, IonButton} from '@ionic/vue'
import { defineComponent,onMounted, ref, computed} from 'vue';
import usePermissions from '@/config/composables/permissions/usePermissions'
import { useStore } from 'vuex';
export default defineComponent({
    components:{IonPage, IonCard, IonContent, IonRow, IonGrid,IonCol,IonButton},
    setup() {
        const store = useStore()
        const {getAll} = usePermissions()
        const list = computed(() => store.state.user.permissions)
        const error = ref('')
        
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