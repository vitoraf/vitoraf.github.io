
<script setup>
import ProfileAvatar from 'vue-profile-avatar'
import { ref } from 'vue'
import { useScoreStore } from '@/stores/scores'
const store = useScoreStore()
const props = defineProps({
    name: String,
    score: String,
    index: String,
    avatar: String
})

const userName = ref(props.name)


</script>
<template>
    <div class="flex w-full px-5 py-4 my-5  text-lg justify-between rounded-md bg-slate-100">
        <div class="flex items-center justify-between mr-4">
            <div>
                            <ProfileAvatar :username="props.name" :image="this.avatar" size="s" color-type="pastel">
                            </ProfileAvatar>
                        </div>
                        <form action="" @submit.prevent="store.updateUser(userName, this.index)" class="px-4">
                            <input type="text" v-model="userName" class=" rounded w-full border-0 transition"
                                :class="{ 'border-0 bg-transparent': !store.edit, 'bg-white shadow-lg focus:ring-0 focus:shadow-md': store.edit }"
                                :disabled="!store.edit
                                ">
                        </form>
                        <button @click="store.removeUser(this.index)"
                            class="bg-red-600 p-1 rounded shadow-md  text-white hover:bg-red-400 transition"
                            :class="{ 'invisible': !store.edit }" title="remover">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex items-center w-fit" v-show="!store.edit">
                        <button @click="store.updateScore(this.index, 'sub')"
                            class="bg-indigo-600 md:p-1 p-2 rounded-full shadow-md text-white hover:shadow-lg hover:bg-indigo-400 transition"
                            title="Remover ponto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
            </button>
            <span class="mx-2">
                {{ score }}
            </span>
            <button @click="store.updateScore(this.index, 'add')"
                class="bg-indigo-600 md:p-1 p-2 rounded-full shadow-md text-white hover:shadow-lg hover:bg-indigo-400 transition"
                title="Adicionar ponto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        </div>
    </div>
</template>
