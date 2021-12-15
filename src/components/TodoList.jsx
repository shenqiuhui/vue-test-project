import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(props) {
    const title = ref('')
    const todos = ref([
      { title: '学习 Vue3', done: true },
      { title: '睡觉', done: false }
    ])

    function addTodo() {
      if (!title.value) return

      todos.value.push({
        title: title.value,
        done: false
      })

      title.value = ''
    }

    return () => (
      <div>
        <input type="text" vModel={title.value} />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.value?.length ? todos.value.map((todo) => {
            return (
              <li>{todo.title}</li>
            )
          }) : (
            <div>No data</div>
          )}
        </ul>
      </div>
    )
  }
})
