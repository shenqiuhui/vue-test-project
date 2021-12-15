import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      require: true
    }
  },
  setup(props, { slots }) {
    return () => h(
      'h' + props.level, // 标签名
      {}, // prop 或 attribute
      slots.default() // z子节点
    )
  }
})
