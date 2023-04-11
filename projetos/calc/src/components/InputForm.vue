<script setup>
import { ref, computed } from 'vue';
import { useCalcStore } from '@/stores/calc.js'

const store = useCalcStore()
const operator = ref('')
function handleKeyDown(event) {
    let op = event.key
    console.log(op)
    if (op === "+" || op === "-" || op === "/" || op === "*") {
        event.preventDefault()
        store.addTerm(op)
    } else if (op === 'Enter') {
        store.addTerm('=')
    }
}
</script>

<template>
    <form @submit.prevent="store.calculate(operator)" class="w-full pt-4 relative">
        <input v-model="store.number" class="w-full px-4 py-8 md:p-10  rounded-lg border border-slate-900 text-3xl"
            @keydown="handleKeyDown">
        <span class="block absolute right-4 top-4 text-lg">
            {{ store.term }}{{ store.operator }}{{ store.term2 }}
        </span>
    </form>
</template>

<style scoped></style>
