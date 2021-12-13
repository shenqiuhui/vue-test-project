import { ref, reactive, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import useStorage from './storage'

const useTotos = () => {
  const title = ref('')
  const showModal = ref(false)
  const animate = reactive({
    show: false,
    el: null
  })
  const todos = useStorage('todos', [])

  const active = computed(() => {
    return todos.value.filter((v) => !v.done).length
  })

  const all = computed(() => {
    return todos.value.length
  })

  const allDone = computed({
    get() {
      return active.value === 0
    },
    set(value) {
      todos.value.forEach((v) => {
        v.done = value
      })
    }
  })

  function clear() {
    todos.value = todos.value.filter((v) => !v.done)
  }

  function remove(e, i) {
    animate.el = e.target
    animate.show = true
    todos.value.splice(i, 1)
  }

  function addTodo() {
    if (!title.value) {
      showModal.value = true

      setTimeout(() => {
        showModal.value = false
      }, 1500);

      return
    }

    const uuid = uuidv4();

    todos.value.push({
      id: uuid,
      title: title.value,
      done: false
    })

    title.value = ''
  }

  function beforeEnter(el) {
    const dom = animate.el
    const rect = dom.getBoundingClientRect()
    const x = window.innerWidth - rect.left - 60
    const y = rect.top - 10
    el.style.transform = `translate(-${x}px, ${y}px)`
  }

  function enter(el, done) {
    document.body.offsetHeight
    el.style.transform = `translate(0, 0)`
    el.addEventListener('transitionend', done)
  }

  function afterEnter(el) {
    animate.show = false
    el.style.display = 'none'
  }

  return {
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
  }
}

export default useTotos
