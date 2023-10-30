<template>
    <ion-loading 
      :trigger="true" 
      message="Loading..." 
      spinner="circles"
      duration="3000"
      :isOpen="loading"
    ></ion-loading>
    <ion-grid>
       
        <form  @submit.prevent="createUser()">
            <ion-row>
                <ion-col>
                    <ion-input 
                        label="Nome" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Enter text"
                        v-model="user.name"
                        
                    ></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <!-- <ion-input 
                        label="Email" 
                        label-placement="floating" 
                        fill="outline" 
                        placeholder="Digite o e-mail"
                        v-model="user.email"
                       
                        helper-text="Enter a valid email"
                        error-text="Invalid email"
                        @ionInput="validate"
                        @ionBlur="markTouched"
                    ></ion-input> -->
                    <ion-input
                        v-model="user.email"
                        ref="input"
                        type="email"
                        fill="outline" 
                        label="Email"
                        label-placement="floating"
                        helper-text="Enter a valid email"
                        error-text="Invalid email"
                        @ionInput="validate"
                        @ionBlur="markTouched"
                    >

                    </ion-input>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="4" offset="0" style="color:black">
                    <p>
                        <ion-title>
                            Função
                        </ion-title>
                    </p>
                </ion-col>
            </ion-row>

            <ion-row style="color:black">
                <ion-col>
                    <ion-radio-group v-model="user.role_one" allow-empty-selection="true" value="success"  >
                        <ion-radio color="success" aria-label="success" v-model="user.local"></ion-radio>
                        <ion-label position="fixed">Criar novo local</ion-label>
                    </ion-radio-group>
                </ion-col>
            </ion-row>
            <ion-row style="color:black" >
                <ion-col>
                    <ion-radio-group v-model="user.role_two" allow-empty-selection="true" value="success" alignment="center">
                        <ion-radio  color="success" aria-label="success" v-model="user.permissions"></ion-radio>
                        <ion-label position="fixed">Acessar permissões</ion-label>
                    </ion-radio-group>
                </ion-col>
            </ion-row>
            <ion-row style="color:black">
                <ion-col>
                    <ion-button type="submit" color="success">
                        enviar solicitação de permissão
                    </ion-button>
                </ion-col>
            </ion-row>
        </form>
    </ion-grid>
</template>
<script>
import { defineComponent, onMounted, ref, computed } from 'vue';
import { 
    IonButtons,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonTitle,
    IonRadio,
    IonButton,
    IonLabel,
    IonRadioGroup,
    toastController,
    IonLoading
} from '@ionic/vue'
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
    name:"FormPermissions",
    components:{
        IonButtons,
        IonButton,
        IonGrid,
        IonRow,
        IonCol,
        IonInput,
        IonTitle,
        IonRadio,
        IonLabel,
        IonRadioGroup,
        toastController,
        IonLoading
    },
    methods:{
        validateEmail(email) {
            return email.match(
            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            );
        },

        validate(ev) {
            const value = ev.target.value;

            this.$refs.input.$el.classList.remove('ion-valid');
            this.$refs.input.$el.classList.remove('ion-invalid');

            if (value === '') return;

            this.validateEmail(value)
            ? this.$refs.input.$el.classList.add('ion-valid')
            : this.$refs.input.$el.classList.add('ion-invalid');
        },

        markTouched() {
            this.$refs.input.$el.classList.add('ion-touched');
        },
    },
    setup(){
        const store = useStore()
        const router = useRouter()
        const loading = ref(false)
        const msgForm = ref('')
        const  generatePassword = () => {
            let height = 9;
            let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+|}{[]:;?><,./-="
            let teste = "";
            for (var i = 0, n = charset.length; i < height; ++i) {
                teste += charset.charAt(Math.floor(Math.random() * n));
            }
            user.value.password = teste
            user.value.password_confirm = teste
        }

        const verifyPermissions = () =>{
            if(
                (typeof user.value.role_one  === 'undefined') && 
                (typeof user.value.role_two  === 'undefined')
            )
            {
                console.log('AMIGO ESTOU AQUI 1')
                msgForm.value = 'Tem que selecionar uma Função'
                return false;
            }
            else if((user.value.role_one && user.value.role_two) == true)
            {
                console.log('AMIGO ESTOU AQUI 2')
                msgForm.value = 'Tem que selecionar uma Função'
                return false;
            }else if(typeof user.value.role_one  === 'undefined' && user.value.role_two === true){
                console.log('AMIGO ESTOU AQUI 3')
                msgForm.value = 'Tem que selecionar uma Função'
                return false;
            }else if(typeof user.value.role_two  === 'undefined' && user.value.role_one === true){
                onsole.log('AMIGO ESTOU AQUI 4')
                msgForm.value = 'Tem que selecionar uma Função'
                return false;
            }
            console.log('AMIGO ESTOU AQUI 5')
            return true
        }
        //poderia usar uma computed
        const verifyValue = (value) => {
            if(typeof value === "undefined" || value){
                return false
            }
            return true
        }
        const roleId = () =>{
            if( verifyValue(user.value.role_one) && verifyValue(user.value.role_two)){
                return user.value.role_id = "1"
            }else if(verifyValue(user.value.role_one) && !verifyValue(user.value.role_two)){
                return user.value.role_id = "2"
            }else if(!verifyValue(user.value.role_one) && verifyValue(user.value.role_two)){
               return  user.value.role_id = "3"
            }
        }

        const presentToast = async(msg, status) => {
            const toast = await toastController.create({
                message: msg,
                duration: 1500,
                position: 'middle',
                cssClass: status,
                color:status
            });

            await toast.present();
        }
        const user = ref({
            name:"",
            email:"",
            password: "",
            password_confirm: "",
            local:false,
            permissions:false,
            role_one:true,
            role_two:true,
            role_id:""
        })
       

        const createUser = () =>{
            const json = JSON.parse(localStorage.getItem('__mojo__token'))
            axios.defaults.headers.common['Authorization'] = `Bearer ${json}`
            if(!verifyPermissions()){
               
                return  presentToast(msgForm.value, 'danger')
            }else{
                roleId()
                loading.value = false
                axios.post('auth/register', user.value)
                .then(e=>{
                    presentToast('Usuário cadastrado!', 'success')
                    router.push({path:'/'}).then(() => {
                        window.location.reload();
                    })
                })
                .catch(e=>{
                    console.log(e)
                    presentToast(e.response.data.message, 'danger')
                })
                .finally(()=>loading.value = true)

            }
        }
        onMounted(()=>{
            generatePassword()
        })
        return {
            user,
            loading,
            generatePassword,
            createUser
        }

    }
});
</script>
<style scoped>
ion-input{
    padding: 16px, 342px, 16px, 20px;
    color: #000;
    margin-top: 2rem;
}
ion-radio {
    /* --border-radius: 4px;
    --inner-border-radius: 4px; */
    
    --color: #ddd;
    --color-checked: #6815ec;
}
</style>