<script setup>
import { ref } from 'vue';
import AppBoard from './components/appBoard.vue';
import InputForm from './components/InputForm.vue';
</script>

<template>
  <div class="container mx-auto h-screen flex flex-col p-2 md:p-0">
    <InputForm />
    <AppBoard class="flex-1"></AppBoard>
  </div>
</template>

<style scoped></style>
