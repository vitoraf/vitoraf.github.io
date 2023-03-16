<template>
    <label for="avatar" class="rounded-full border-2 border-slate-700 bg-cover bg-center p-5 inline-block cursor-pointer shadow hover:shadow-lg hover:bg-slate-300 transition-all" title="Adicionar imagem de perfil" :style=" `background-image:url(${avatarFile})`">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

    </label>
    <input type="file" name="avatar" id="avatar" accept="image/jpg, image/png, image/gif" @change="setUpload" class="hidden">
</template>
<script setup>
import { ref} from 'vue';
const avatarImg = ref()
const avatarFile = ref('')
const emits = defineEmits(["uploadImg"])
function setUpload(event) {
    avatarImg.value = event.target.files[0]
    getBase64(avatarImg.value)
}

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        avatarFile.value = (reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
    
    emits('uploadImg', avatarFile)
}
</script>