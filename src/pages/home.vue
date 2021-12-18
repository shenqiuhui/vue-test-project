<template>
  <h1>首页</h1>
  <TodoList />
  <transition name="fade">
    <h2 v-if="showTitle">子标题</h2>
  </transition>
  <button @click="toggleTitle">显示/隐藏标题</button>
  <h1>你的评分是 {{score}}</h1>
  <!-- <Rate :value="score" @update-rate="update" /> -->
  <Rate v-model:value="score">商品评分</Rate>
  <Rate :value="3.5" theme="green">物流评分</Rate>
  <Rate :value="2" theme="blue">描述评分</Rate>
  <div>{{x}}, {{y}}</div>
  <button @click="toggle">toggle</button>
  <Count />
</template>

<script setup>
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import TodoList from '../components/TodoList.vue'
import Count from '../components/Count.vue'
import Rate from '../components/Rate.vue'
import useMouse from '../utils/mouse'

const { x, y } = useMouse()
const { isFullscreen, enter, exit, toggle } = useFullscreen()

const showTitle = ref(true);
const score = ref(3)

function update(num) {
  score.value = num
}

function toggleTitle() {
  showTitle.value = !showTitle.value;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
