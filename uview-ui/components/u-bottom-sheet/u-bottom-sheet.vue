<template>
  <view v-if="showAsync" :class="['u-bottom-sheet-wrapper', classes.wrapper]">
    <view :class="['u-bottom-sheet-mask', classes.mask]" @click="handleClickMask()"></view>
    <view :class="['u-bottom-sheet-content', classes.content, maskClicked ? 'mask-clicked' : '']" :style="{ height: height ,maxHeight: height}">
      <slot name="default"></slot>
    </view>
  </view>
</template>

<script>
/**
 * 底部表单组件
 * @description 底部表单组件
 * @property {Object} classes 自定义 class，包含三个属性 {wrapper: '', content: '', mask: ''}，分别是最外层样式，内容区样式，遮罩层样式
 * @property {String} height 内容区高度(也可以经classes属性自行控制)
 * @property {Boolean} click-mask-to-close 是否点击遮罩层关闭表单，默认为 true
 * @event {Function} open 弹出层打开
 * @event {Function} close  弹出层关闭
 * @event {Function} mask-clicked 遮罩层被点击(仅 click-mask-to-close 属性为 false 时点击被触发) 
 * @example <u-bottom-sheet v-model="isVisible"> 表单内容</u-bottom-sheet>
 */
export default {
  name: 'u-bottom-sheet',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    classes: {
      type: Object,
      default: () => ({
				wrapper: '',
				content: '',
				mask: ''
			})
    },
    height: {
      type: String,
      default: '40vh'
    },
    clickMaskToClose: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    showAsync: false,
    maskClicked: false
  }),
  methods: {
    handleClickMask() {
      if (this.clickMaskToClose) {
        this.$emit('input', false)
      } else {
        this.maskClicked = true
        setTimeout(() => {
          this.maskClicked = false
        }, 100)
				this.$emit('mask-clicked')
      }
    }
  },
  watch: {
    value(val) {
      setTimeout(() => {
        this.showAsync = this.value
      }, 150)
      val ? this.$emit('open') : this.$emit('close')
    }
  },
  created() {
    setTimeout(() => {
      this.showAsync = this.value
    }, 150)
  }
}
</script>

<style lang="scss" scoped>
.u-bottom-sheet-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  .u-bottom-sheet-mask {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2333;
    transition: ease-in-out 0.3s ease-out 0.3s;
    transform: scale(1.2, 1.2);
  }
  .mask-clicked {
    transform: scale(1.05);
  }
  .u-bottom-sheet-content {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    z-index: 233333;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: ease-in-out 0.1s;
  }
}
</style>
