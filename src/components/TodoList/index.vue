<!--  -->
<template>
  <div>
    <h1>Todo-list</h1>
    <todo-item/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './Item.vue';
export default defineComponent(
  {
    name:'TodoList',
    components:{
      TodoItem
    }
  }
) 
</script>

<style scoped>


</style>