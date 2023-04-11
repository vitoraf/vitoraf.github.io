<template>
    <button class="px-4 py-0 md:p-10  rounded-lg border border-indigo-900 flex-auto transition-all text-3xl "
        :class="[props.operator != '=' ? ' bg-indigo-200  hover:bg-indigo-300 text-slate-700' : ' bg-indigo-600  hover:bg-indigo-800 text-white']"
        @click="addTerm(props.operator)">
        {{ operator }}
    </button>
</template>
<script setup>
import { useCalcStore } from '@/stores/calc.js'
const store = useCalcStore()
const props = defineProps({
    operator: String
})
function addTerm(op) {

    store.addTerm(op)

}
</script>