<template>
  <div>
    <h1 @click="add">{{count}}</h1>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">
      清空
    </button>
    <ul v-if="todos.length">
      <li :key="todo.id" v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">
          {{todo.title}}
        </span>
      </li>
    </ul>
    <div v-else>
      暂无数据
    </div>
    <div v-if="all > 0">
      全选
      <input type="checkbox" v-model="allDone">
      <span>{{active}} / {{all}}</span>
    </div>
    <div>{{x}}, {{y}}</div>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import useTotos from '../utils/todos'
import useMouse from '../utils/mouse'

const { title, todos, active, all, allDone, clear, addTodo } = useTotos()
const { isFullscreen, enter, exit, toggle } = useFullscreen()
const { x, y } = useMouse()
const count = ref(0)
const color = ref('red')

function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'red' : 'blue'
}
</script>

<style scope>
h1 {
  color: v-bind(color);
}

ul {
  list-style: none;
}

.done {
  color: grey;
  text-decoration: line-through;
}
</style>
