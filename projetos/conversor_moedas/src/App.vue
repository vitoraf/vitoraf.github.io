<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useExchangeStore } from "../src/stores/store.js";
import IconSwap from "@/components/icons/iconSwap.vue"
const store = useExchangeStore()
const { finalResult, currencyFrom, symbols, currencyTo, rawAmount, formattedAmount} = storeToRefs(store);
onMounted(() => {
    store.getSymbols();
})

</script>

<template>
    <div class="w-1/4 bg-white p-5 rounded-lg shadow-2xl" v-if="!store.isLoading">
        <form action="" @submit.prevent="store.getCurrency">
            <div class="grid grid-cols-3 gap-y-2">
                <div class="relative w-full col-auto flex items-center">
                    <label for="amount"  class="absolute left-2">{{ currencyFrom }}</label>
                    <input v-model="rawAmount" type="text" pattern="\d*" placeholder="9.99"
                    class="p-2 rounded-l border-y border-l border-indigo-900 bg-white text-indigo-900 outline-indigo-500 w-full pl-11"
                    id="amount" >
                </div>
                <select name="currencyFrom" id="currencyFrom" v-model="currencyFrom"
                    class=" w-full p-2 rounded-r border border-indigo-900 bg-white text-indigo-900 outline-indigo-500 col-span-2" @change="store.changeCurrency">
                    <template v-for="(symbol, key) in symbols" :key="key">
                        <option :value="key">{{ symbol }} ({{ key }})</option>
                    </template>
                </select>
                <span class="result p-2 rounded bg-white text-indigo-900 outline-indigo-500 col-auto">{{ currencyTo }} {{ finalResult
                }}</span>
                <select name="currencyTo" id="currencyTo" v-model="currencyTo"
                    class="p-2 rounded border border-indigo-900 bg-white text-indigo-900 outline-indigo-500 col-span-2" @change="store.changeCurrency">
                    <template v-for="(symbol, key) in symbols" :key="key">
                        <option :value="key">{{ symbol }} ({{ key }})</option>
                    </template>
                </select>
            </div>
            <button type="button" @click="store.invertOperation" class="w-full p-1 mt-2 flex justify-center items-center bg-indigo-600 shadow text-white" title="Inverter">
                <IconSwap class="text-white"/>
            </button>
        </form>
    </div>
    <div class="relative rounded-xl overflow-auto p-8" v-else>
        <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
    </div>
    {{ formattedAmount }}
</template>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style> 
