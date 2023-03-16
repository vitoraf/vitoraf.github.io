import { defineStore } from 'pinia'
import { ref, computed} from "vue"
import axios from 'axios'


export const useExchangeStore = defineStore('currency', () => {
  const currencyTo = ref('BRL');
  const currencyFrom = ref('USD');
  const currencyTemp = ref('AAA')
  const amount = ref();
  const result = ref();
  const finalResult = ref(0)
  const symbols = ref('');
  const apiKey = "SPJLKPgpMm9y34OqNm3QZL15PnMP91ZI";
  const url = 'https://api.apilayer.com/exchangerates_data/convert';
  const url2 = 'https://api.apilayer.com/exchangerates_data/symbols';
  const isLoading = ref(false);
  const rawAmount = ref('');

  const formattedAmount = computed(() => {
    let value = rawAmount.value.replace(/[^\d.]/g, ''); // remove non-numeric characters except decimal point
    value = value.replace(/^0+/, ''); // remove leading zeros
    let [integerPart, decimalPart] = value.split('.'); // split the value into integer and decimal parts
    integerPart = integerPart.replace(/(\d)(?=(\d{3})+$)/g, '$1,'); // add thousands separator to the integer part
    if (decimalPart) {
      decimalPart = decimalPart.slice(0, 2); // limit decimal part to two decimal places
      value = `${integerPart}.${decimalPart}`; // combine the integer and decimal parts
    } else {
      value = integerPart; // use just the integer part if there is no decimal part
    }
    return value;
  });

  async function getCurrency() {
    console.log(formattedAmount)
    if(typeof amount.value === 'number' &&  amount.value > 0){
      isLoading.value = true
      try {
        const response = await axios.get(url, {
          params: {
            to: currencyTo.value,
            from: currencyFrom.value,
            amount: formattedAmount
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
  }
  async function getSymbols() {
    isLoading.value = true
    try {
      const response = await axios.get(url2, {
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
  }
  function invertOperation(){
    currencyTemp.value = currencyFrom.value;
    currencyFrom.value = currencyTo.value;
    currencyTo.value = currencyTemp.value;
    getCurrency();
  }
  function changeCurrency(){
    getCurrency();
  }

  return { finalResult, currencyFrom, currencyTo, amount, url, getCurrency, getSymbols, invertOperation, changeCurrency, symbols, isLoading, formattedAmount, rawAmount}
})


