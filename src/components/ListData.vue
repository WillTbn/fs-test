<template>
    <ion-list>
        <ion-grid>
            <ion-col>
                {{ name }}
            </ion-col>
            <ion-col>
                <ion-button v-if="status != null">{{status}}</ion-button>
            </ion-col>
            <ion-col>
                <ion-button button-type="autline">
                    <ion-icon :icon="createOutline"></ion-icon>
                </ion-button>
                <ion-button button-type="autline">
                    <ion-icon :icon="trash"></ion-icon>
                </ion-button>
            </ion-col>

        </ion-grid>
    </ion-list>
</template>
<script>
import { defineComponent } from 'vue';
import {  trash, createOutline } from 'ionicons/icons';
export default defineComponent({
    name:"ListData",
    props:{
        name:{type:String},
        status:{type:Boolean},
    },
    data(){
        return{
            trash,
            createOutline
        }
    }
})
</script>
<style>

</style>