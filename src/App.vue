<template>
  <ion-app>
    <ion-loading 
      :trigger="true" 
      message="Loading..." 
      spinner="circles"
      duration="3000"
      :isOpen="Loading"
    ></ion-loading>
    <HeaderContainer :name="user.name">
      <router-view></router-view>
    </HeaderContainer>

  </ion-app>
</template>
<script setup lang="ts">
import { IonApp, IonLoading } from '@ionic/vue';
import { onMounted,computed } from 'vue';
import { useStore } from 'vuex';
import HeaderContainer from './components/HeaderContainer.vue';
import useAuth from './config/composables/auth/useAuth';
// import ContentPage from './views/ContentPage.vue';

const {validateToken} = useAuth();
const store = useStore();
        
const user = computed(() => store.state.user.user);
const Loading = computed(() => store.state.user.auth);

onMounted(() =>{
  validateToken()
})
</script>
<style>

</style>
