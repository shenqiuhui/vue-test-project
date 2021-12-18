<template>
  <div :style="fontStyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span :key="num" v-for="num in 5" @mouseover="mouseOver(num)" >☆</span>
      <span class="hollow" :style="fontWidth">
        <span :key="num" v-for="num in 5" @mouseover="mouseOver(num)" @click="onRate(num)">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  value: Number,
  theme: {
    type: String,
    default: 'orange'
  }
})

const width = ref(props.value)

const themes = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#F5222D',
  orange: '#FA541C',
  yellow: '#FADB14',
  green: '#73D13D',
  blue: '#40A9FF'
}

const fontStyle = computed(() => {
  return `color: ${themes[props.theme]};`
})

const fontWidth = computed(() => {
  return `width: ${width.value}em`
})

// const emits = defineEmits('update-rate')
const emits = defineEmits(['update:value'])

function mouseOver(i) {
  width.value = i
}

function mouseOut() {
  width.value = props.value;
}

function onRate(num) {
  emits('update:value', num)
}

// const rate = computed(() => {
//   return '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value)
// })
</script>

<style>
.rate {
  position: relative;
  display: inline-block;
}

.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>

