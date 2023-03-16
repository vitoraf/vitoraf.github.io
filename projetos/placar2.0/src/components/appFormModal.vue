<script setup>
import FileInput from './FileInput.vue';
import { ref, onMounted } from 'vue';
import { useScoreStore } from '@/stores/scores'
const store = useScoreStore()
const newUser = ref('')
const avatarImg = ref('')
const el = ref()

onMounted(() => {
    el.value.focus()
})
function handleUpload(avatar){
    avatarImg.value = avatar
}

</script>
<template>
    <div class="fixed w-full h-screen top-0 left-0 bg-slate-800/20 flex justify-center items-center backdrop-blur p-4">

        <div class="bg-slate-100 w-full md:w-1/4 h-fit p-5  rounded-md shadow-lg relative">
            <div class="w-full text-center">
                <FileInput @uploadImg="handleUpload"></FileInput>
            </div>
            <button @click="store.toggleAddUser" class="absolute top-0 right-0 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <form action="" @submit.prevent="store.addNewUser(newUser, avatarImg)">
                
                <label for="newUser">Nome:</label>
                <input type="text" name="newUser" v-model="newUser"
                    class="w-full bg-white rounded shadow-lg border-0 focus:ring-0 mt-2" required ref="el">
                <div class="mt-4 flex">

                    <button
                        class="bg-indigo-600 px-5 py-2 rounded shadow-md text-white hover:shadow-lg hover:bg-indigo-400 flex justify-center flex-1"
                        type="submit">


                        Adicionar
                    </button>
                    <button
                        class="bg-slate-200 px-5 py-2 rounded shadow-md text-indigo-600 border border-indigo-600 mx-4 hover:shadow-lg hover:bg-white flex justify-center flex-1"
                        @click="store.toggleAddUser">

                        Cancelar
                    </button>

                </div>
            </form>
        </div>

    </div>
</template>
