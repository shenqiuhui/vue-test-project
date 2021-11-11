import { ref, onMounted, onUnmounted } from 'vue'

const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  function upload(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', upload)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', upload)
  })

  return { x, y }
}

export default useMouse
