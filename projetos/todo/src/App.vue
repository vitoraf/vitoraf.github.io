<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <!-- Todo spinner -->
      <TodoSpinner />
      <!--/ Todo spinner -->

      <!-- Todo form -->
      <TodoForm />
      <!--/ Todo form -->

      <!-- Todo items -->
      <TodoItems />
      <!--/ Todo items -->

      <!-- Todo empty -->
      <TodoEmpty />
      <!--/ Todo empty -->
    </div>
  </div>
  <!--/ Content -->
</template>

<script>
import TodoEmpty from './components/TodoEmpty.vue';
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import axios from 'axios';

export default {
  name: "App",
  components: { TodoSpinner, TodoForm, TodoItems, TodoEmpty },
  data() {
    return {
      todos: []
    }

  },
  created() {
    axios.get('http://localhost:3000/todos').then((response) => {
      this.todos = response.data
    })
    console.log(this.todos)
  }
}
</script>


