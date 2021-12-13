<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">
      清空
    </button>
    <transition-group v-if="todos.length" name="flip-list" tag="ul">
      <li :key="todo.id" v-for="todo in todos">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">
          {{todo.title}}
        </span>
        <button class="remov-btn" @click="remove($event, i)">
          删除
        </button>
      </li>
    </transition-group>
    <div v-else>
      暂无数据
    </div>
    <div v-if="all > 0">
      全选
      <input type="checkbox" v-model="allDone">
      <span>{{active}} / {{all}}</span>
    </div>
  </div>
  <transition name="modal">
    <div class="info-wrapper" v-if="showModal">
      <div class="info">
        你什么都没输入！
      </div>
    </div>
  </transition>
  <div class="dustbin">
    🗑
  </div>
  <div class="animate-wrap">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="animate" v-show="animate.show">
        📋
      </div>
    </transition>
  </div>
</template>

<script setup>
import useTotos from '../utils/todos'

const {
  title,
  todos,
  active,
  all,
  allDone,
  showModal,
  animate,
  clear,
  remove,
  addTodo,
  beforeEnter,
  enter,
  afterEnter
} = useTotos()
</script>

<style scope>
ul {
  list-style: none;
}

.done {
  color: grey;
  text-decoration: line-through;
}

.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}

.info {
  padding: 20px;
  color: #FFFFFF;
  background: #D88986;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.flip-list-move {
  transition: transform 0.8s ease;
}

.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.dustbin {
  position: fixed;
  right: 10px;
  top: 10px;
}

.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 99;
  transition: all 0.5s linear;
}
</style>
