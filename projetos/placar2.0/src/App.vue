<script setup>

import { useScoreStore } from './stores/scores'
import appPlayer from './components/appPlayer.vue'
import appFormModal from './components/appFormModal.vue';

const store = useScoreStore()

</script>

<template>
  <div class="container h-full mx-auto px-4 md:px-0 bt-5 ">
    <h1 class="text-indigo-600 text-4xl font-bold mb-5 pt-5 text-center">Placar</h1>
    <appFormModal v-if="store.addUser" />
    <appPlayer v-for="user, index in store.usersSorted" :key="user.id" :name="`${user.name}`" :score="`${user.score}`"
      :index="`${index}`" :userid="user.id" :avatar="`${user.avatar ? user.avatar : ''}`" />
                  <div class="flex justify-center my-4 flex-col md:flex-row">
                    <button @click="store.toggleAddUser"
                                class="bg-indigo-600 px-5 py-2 mr-4 rounded shadow-md text-white hover:shadow-lg hover:bg-indigo-400 flex justify-center transition flex-1 md:flex-none mb-4 md:mb-0 w-full md:w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                  class="w-6 h-6 mr-2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Adicionar Jogador
                      </button>
                      <button @click="store.toggleEdit"
                                class="bg-slate-600 px-5 py-2 rounded shadow-md text-white hover:shadow-lg hover:bg-slate-400 flex justify-center transition flex-1 md:flex-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                          Editar Jogadores
                      </button>
    </div>

  </div>
  <button class="absolute bottom-4 right-4 bg-indigo-600 px-5 py-2 mr-4 rounded shadow-md text-white hover:shadow-lg hover:bg-indigo-400 flex justify-center transition flex-1 md:flex-none" @click="store.resetScores">Resetar</button>
</template>

<style scoped></style>
