<template>
  <ion-app>
    <HeaderContainer :name="user.name">
      <content-page></content-page>

    </HeaderContainer>

  </ion-app>
</template>
<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { onMounted,computed } from 'vue';
import { useStore } from 'vuex';
import HeaderContainer from './components/HeaderContainer.vue';
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
