<template>
  <h1>首页</h1>
  <TodoList />
  <h1>你的评分是 {{score}}</h1>
  <!-- <Rate :value="score" @update-rate="update" /> -->
  <Rate v-model:value="score">商品评分</Rate>
  <Rate :value="3.5" theme="green">物流评分</Rate>
  <Rate :value="2" theme="blue">描述评分</Rate>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import Rate from '../components/Rate.vue'

const score = ref(3)

function update(num) {
  score.value = num
}
</script>
