<template>
  <ion-app>
    <content-page></content-page>
  </ion-app>
</template>
<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onMounted,computed } from 'vue';
import { useStore } from 'vuex';
import useAuth from './config/composables/auth/useAuth';
import ContentPage from './views/ContentPage.vue';

const {validateToken} = useAuth();
const store = useStore();
        
const user = computed(() => store.state.user.user);
const UserLogged = user != null ? true : false
        
onMounted(() =>{
  validateToken()
})
</script>
