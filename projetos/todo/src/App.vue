<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <!-- Todo spinner -->
      <TodoSpinner v-if="loading" />
      <!--/ Todo spinner -->
      <template v-else>
        <!-- Todo form -->
        <TodoForm />
        <!--/ Todo form -->

        <!-- Todo items -->
        <TodoItems />
        <!--/ Todo items -->

        <!-- Todo empty -->
        <TodoEmpty v-if="$store.state.todos.length == 0" />
        <!--/ Todo empty -->
        
      </template>
    </div>
  </div>
  <!--/ Content -->
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import TodoEmpty from './components/TodoEmpty.vue';
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoForm,
    TodoItems,
    TodoEmpty
  },
  setup() {
    const loading = ref(false)
    const store = useStore()
    loading.value = true
    store.dispatch('getTodos').finally(() => {
      loading.value = false
    })
    return {
      loading,
    }
  }
}
</script>


