<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const el = ref()
const amount = ref()
const currencyFrom = ref('USD');
const currencyTo = ref('BRL');
const result = ref();
const finalResult = ref();
const symbols = ref('')
const apiKey = "SPJLKPgpMm9y34OqNm3QZL15PnMP91ZI";
const isLoading = ref(false)
onMounted(
  () => {
    getSymbols()
    el.value.focus()
  })

async function getSymbols() {
  isLoading.value = true
  try {
    const response = await axios.get('https://api.apilayer.com/exchangerates_data/symbols', {
      headers: {
        apikey: apiKey
      }
    });
    symbols.value = response.data.symbols;
    isLoading.value = false
  } catch (error) {
    console.log('error', error);
    isLoading.value = false
  }
  return {
    symbols
  }
}
async function getCurrency() {
  isLoading.value = true
  try {
    const response = await axios.get('https://api.apilayer.com/exchangerates_data/convert', {
      params: {
        to: currencyTo.value,
        from: currencyFrom.value,
        amount: amount.value
      },
      headers: {
        apikey: apiKey
      }
    });
    result.value = response.data.result;
    finalResult.value = result.value.toFixed(2)
    isLoading.value = false
  } catch (error) {
    console.log('error', error);
    isLoading.value = false
  }
}

</script>


<template>
  <div v-if="isLoading">
    carregandocd.
  </div>
  <div v-else>
    <form action="" @submit.prevent="getCurrency">
      <input type="number" v-model="amount" ref="el">
      <select name="currencyFrom" id="currencyFrom" v-model="currencyFrom" @change="getCurrency">
        <template v-for="symbol, key in symbols" :key="key">
          <option :value="key">{{ key }} - {{ symbol }}</option>
        </template>
      </select>
      <br>
      <span>{{ finalResult }} </span>
      <select name="currencyTo" id="currencyTo" v-model="currencyTo" @change="getCurrency">
        <template v-for="symbol, key in symbols" :key="key">
          <option :value="key">{{ key }} - {{ symbol }}</option>
        </template>
      </select>
    </form>

  </div>
</template>

<style scoped></style>
