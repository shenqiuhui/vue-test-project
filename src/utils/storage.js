import { ref, watchEffect } from 'vue'

const useStorage = (name, value) => {
  const data = ref(JSON.parse(localStorage.getItem(name)) || value)

  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  })

  return data
}

export default useStorage
