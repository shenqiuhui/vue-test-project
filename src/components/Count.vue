<template>
  <h1 class="count" @click="add">
    {{count}} {{double}}
  </h1>
  <button @click="asyncAdd">Async add</button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
// import { useStore } from '../store/cvuex'

const store = useStore()
const count = computed(() => store.state.count)
const double = computed(() => store.getters.double)
const color = ref('red')

function add() {
  color.value = Math.random() > 0.5 ? 'red' : 'blue'
  store.commit('add');
}

function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>

<style scope>
.count {
  color: v-bind(color);
}
</style>
