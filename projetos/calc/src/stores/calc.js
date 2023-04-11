import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalcStore = defineStore('calc', () => {
  const number = ref([])
  const term = ref()
  const operator = ref('')
  const term2 = ref()
  const result = ref()
  function addTerm(op) {
    switch (op) {
      case 'AC':
        number.value = ''
        operator.value = ''
        term.value = ''
        term2.value = ''
        break;
      case 'C':
        number.value = ''
        break;
      case '=':
        if (term2.value !== '') {
          term.value = number.value
        } else {
          term2.value = number.value
        }
        calculate()
        break;
      default:
        term.value = number.value
        term2.value = ''
        operator.value = op
        number.value = ''
        break;
    }
  }
  function calculate() {
    switch (operator.value) {
      case '+':
        result.value = Number(term.value) + Number(term2.value)
        break;
      case '-':
        result.value = Number(term.value) - Number(term2.value)
        break;
      case '/':
        result.value = Number(term.value) / Number(term2.value)
        break;
      case '*':
        result.value = Number(term.value) * Number(term2.value)
        break;
    }
    number.value = result.value
  }


  return { number, addTerm, term, term2, operator, calculate, result }
})
