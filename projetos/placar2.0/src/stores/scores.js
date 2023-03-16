import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('placar', () => {
  const users = ref([])
  const addUser = ref(false)
  const edit = ref(false)
  const usersSorted = computed(() => {
    return users.value.sort((a, b) => b.score - a.score)
  })
  function addNewUser(user, avatar) {
    users.value.push({
      id: users.value.length? users.value[users.value.length - 1].id + 1 : 0,
      name: user,
      score: 0,
      avatar: avatar
    })
    //console.log(users.value[users.value.length - 1].avatar)
    toggleAddUser()
  }
  function updateScore(id, op) {
    var user = users.value[id]
    if (op === 'add') {
      user.score++
    } else {
      if (user.score > 0) {
        user.score--
      }
    }

  }
  function updateUser(username, index) {
    var user = users.value[index]
    user.name = username
    toggleEdit()
  }
  function toggleAddUser() {
    addUser.value = !addUser.value
  }
  function toggleEdit() {
    edit.value = !edit.value
  }
  function removeUser(id) {
    users.value.splice(id, 1)
    if (users.value.length == 0) {
      toggleEdit()
    }
  }
  function resetScores() {
    
    users.value.forEach(user => {
      user.score = 0
    });
  }
  return { addUser, users, usersSorted, addNewUser, updateScore, toggleAddUser, edit, toggleEdit, removeUser, updateUser, resetScores }
}, {
  persist: true
}
)
