import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import useStorage from './storage'

const useTotos = () => {
  const title = ref('')
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

  function addTodo() {
    const uuid = uuidv4();

    todos.value.push({
      id: uuid,
      title: title.value,
      done: false
    })

    title.value = ''
  }

  return { title, todos, active, all, allDone, clear, addTodo }
}

export default useTotos
