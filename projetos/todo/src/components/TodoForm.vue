<template>
    <form class="flex items-center px-4 bg-gray-900 h-15 
rounded-sm border-l-2 border-green-400 mb-3" @submit.prevent="addTodo">
        <input v-model="title" placeholder="Adicione um novo item ..." type="text"
            class="bg-gray-900 placeholder-gray-500 text-gray-500 
font-light focus:outline-none block w-full appearance-none leading-normal 
py-3 pr-3"
>


<button class="emoji-button" @click.stop.prevent="showEmojiToggle" type="button">
    <fa :icon="['far', 'face-smile']"></fa>
</button>
        <button class="text-green-400 text-xs font-semibold 
focus:outline-none" type="submit" >
            ADICIONAR
        </button>
    </form>
    <EmojiPicker v-if="showEmoji" @emoji_click="addEmoji"/>
</template>
<script>

import EmojiPicker from '@/components/EmojiPicker.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        EmojiPicker
    },
    setup() {
        const title = ref('')
        const store = useStore()
        const showEmoji = ref(false)
        const addTodo = () => {
            if (!title.value) {
                return false
            }
            if (showEmoji.value) {
                showEmojiToggle()
            }
            store.dispatch('addTodo', {
                title: title.value,
                completed: false
            }).finally(() => {
                title.value = ''
            })

        }
        const showEmojiToggle = () => {
            showEmoji.value = !showEmoji.value
        }

        const addEmoji = (emoji) => {
            title.value += emoji
        }
        return {
            title,
            showEmoji,
            addTodo,
            showEmojiToggle,
            addEmoji,
        }
    },
    methods: {
    }
}
</script>
<style scoped>
form {
    position: relative;
}

.emoji-button {
    margin: 0 8px;
    color: #e9e9e9;
}

.emoji-picker {
    background: url('@/assets/img/happy.png');
}
</style>