<template>
            
        <div class="layer-2">
            teste
        </div>
    
  
</template>
<script setup lang="ts">
import { 
    IonButtons, IonContent, IonHeader, IonMenu, 
    IonMenuButton, IonPage, IonItem, IonLabel, IonIcon, 
    IonCol, IonImg, IonRow, IonGrid, IonRouterOutlet

} from '@ionic/vue';
// import { ellipse, square, triangle } from 'ionicons/icons';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();

const user = computed(() => store.state.user.user);
</script>
<style scoped>
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