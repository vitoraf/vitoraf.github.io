<template>
    <button
        class="px-4 py-0 md:p-10 rounded-lg  bg-slate-200 border border-slate-900 hover:bg-slate-300 flex-auto transition-all text-3xl text-slate-700"
        @click="numClick(props.number)">
        {{ number }}


    </button>
</template>
<script setup>
import { useCalcStore } from '@/stores/calc.js'
const store = useCalcStore()
const props = defineProps({
    number: String
})
function numClick(n) {

    if (n === ',') {
        if (store.number.includes('.')) {
            return
        }

        // Se o número atual for 0, substitui por 0.
        // Caso contrário, adiciona a vírgula no final do número atual
        store.number =
            store.number === 0 ? '0.' : store.number + '.';
        //store.number = Number(store.number).toFixed(1)
    } else {

        store.number += Number(n)
    }


}
</script>