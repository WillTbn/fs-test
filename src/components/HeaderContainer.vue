<template>
    <ion-menu content-id="main-content" menu-id="first-menu">
        <ion-header>
           
                <div class="control-header">
                    <p style="font-size: xx-small;">Bem vindo,</p>
                    <p style="font-size: larger;margin-top: -0.6rem;">{{ name }}</p>

                </div>
          
        </ion-header>
        <ion-content class="ion-padding">
            <div class="">
                <router-link to="/home">
                   <ion-icon :icon="people"></ion-icon>
                   <span  style="padding-left: 0.5rem;">
                       Permission
                   </span>
                </router-link>
              
               <router-link to="/locals">
                   <ion-icon :icon="location"></ion-icon>
                   <span style="padding-left: 0.5rem;">Locals</span>
               </router-link>
            </div>
        </ion-content>
        <ion-footer>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-button fill="outline" @click.prevent="logout()">
                            <ion-icon :icon="logOut"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
            
        </ion-footer>
    </ion-menu>
    <ion-page id="main-content">
        <ion-header>
           <ion-toolbar id="main-content">
               <ion-grid class="layer-1" :class="{'content-control' : !auth}">
                   <ion-row>
                       <ion-col size="2" v-if="auth">
                           <div class="" style="width: 150px;">
                               <ion-buttons slot="start" >
                                   <ion-menu-button></ion-menu-button>
                               </ion-buttons>
                           </div>
                       </ion-col>
   
                       <ion-col offset="2" size="8">
                           <div class="" style="width: 150px;" >
                               <ion-img
                                   class="control-img"
                                   src="../../public/logan.png"
                                   srcset="../../public/logan.png"
                                   alt="The Wisconsin State Capitol building in Madison, WI at night"
                               ></ion-img>
                           </div>
                       </ion-col>
                   </ion-row>
               </ion-grid>
           </ion-toolbar>
        </ion-header> 
    
        <ion-content class="ion-padding">
            <slot/>
        </ion-content>
    </ion-page>

    
</template>
<script lang="ts">
import { 
    IonButtons, IonContent, IonHeader, IonMenu, 
    IonMenuButton, IonPage, IonItem, IonLabel, IonIcon, IonButton,
    IonCol, IonImg, IonRow, IonGrid, IonRouterOutlet, IonToolbar,
    IonFooter

} from '@ionic/vue';
import {  people,location, logOut } from 'ionicons/icons';
import {  defineComponent,computed } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    name:"HeaderContainer",
    props:{
        name:{type:String}
    },
    components:{ IonButtons, IonContent, IonHeader, IonMenu, 
    IonMenuButton, IonPage, IonItem, IonLabel, IonIcon, IonButton,
    IonCol, IonImg, IonRow, IonGrid, IonRouterOutlet, IonToolbar, IonFooter},
    setup(){
        const auth = computed(()=> store.state.user.auth)
        const router = useRouter();
        const route = useRoute()
        const store = useStore();
        const logout = () => {
            store.dispatch('user/removeAuth')
            router.push({path:'/login'}).then(() => {
                window.location.reload();
            })
        }
        
        return {
            people,
            location,
            logOut,
            router,
            auth,
            logout
        }
    }
})
</script>
<style>
router-link {
    display: block;
    text-decoration: none;
}
ion-item{
    padding: 0.4rem
}
ion-buttons{
    right: 0px !important;
    /* display:grid; */
}
ion-toolbar{
    background-color: #000;
    display: grid;
    height: 25vh;
}
.control-header{
    margin: 2rem;
}
.layer-1{
    background-color: #000;
    display: grid;
    align-content: center;
    /* 
    justify-content: center; 
    */
    height: 25vh;
    /* margin-left: -12rem; */
    width: 100%;
    padding-left: auto;
}
.content-control{
    height: 50vh !important;
    justify-content: center !important;
    margin-left: -1.5rem !important;
}
.layer-2{
    display: grid;
    align-content: start;
    padding:2rem;
    /* justify-content: center; */
    height: 55vh;
    background-color: #fff;
    position: relative;
    color: #000;
}
</style>