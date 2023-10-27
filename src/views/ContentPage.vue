<template>
    <ion-page>    

    <header-container
        :name="user.name"
    >
        <ion-router-outlet></ion-router-outlet>
    
    </header-container>

       
        <ion-footer translucent class="control-footer" >
            <ion-toolbar>
                <ion-title>
              
                </ion-title>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>
<script>
import {IonRouterOutlet, IonPage, IonContent, IonFooter, IonTitle, IonToolbar} from '@ionic/vue'
import {  defineComponent } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import HeaderContainer from '../components/HeaderContainer.vue';

export default defineComponent({
    name:'ContentPage',
    components:{HeaderContainer,IonPage, IonRouterOutlet, IonContent, IonFooter, IonTitle, IonToolbar},
    setup(){
        const store = useStore();
        const user = computed(() => store.state.user.user);
        const UserLogged = user != null ? true : false
        return{
            user,
            UserLogged
        }
    }

})
</script>
<style>
.control-footer{
    background-color: #fff !important;
}
</style>