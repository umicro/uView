<template>
  <view class="dropdown-list-wapper u-flex u-flex-1">
    <view
      v-for="(drop, index) in dropdownListFromFather"
      :key="drop.name"
      :show="drop.show"
      class="u-selected-class u-dropdown-list"
      :style="{ zIndex: zIndex + 1 }"
    >
      <slot name="selectionbox">
        <view
          :style="{ height: top + 'rpx' }"
          class="drop-item u-flex u-justify-center"
          @click="handleDropClick(drop)"
        >
          <text :style="{ color: drop.show ? activeColor : '#999' }">
            {{ getTitle(drop.options) }}
          </text>
          <view
            class="u-animation"
            :class="[drop.show ? 'u-animation-show' : '']"
          >
            <u-icon
              v-if="drop.show"
              name="arrow-up-fill"
              :size="18"
              :color="activeColor"
            ></u-icon>
            <u-icon v-else name="arrow-down-fill" :size="18"></u-icon>
          </view>
        </view>
      </slot>
      <view
        class="u-dropdown-view"
        :class="[drop.show ? 'u-dropdownlist-show' : '']"
        :style="{
          background: bgcolor,
          height: drop.show ? 'auto' : 0,
          top: top + 'rpx'
        }"
      >
        <slot name="dropdownbox">
          <view class="u-selected-list">
            <view
              class="select-item u-flex u-align-center u-border-bottom u-align-between"
              :style="{ color: select.select ? activeColor : '#666666' }"
              @tap="handleSelected(select, drop.options)"
              v-for="(select, n) in drop.options"
              :key="n"
            >
              <text>{{ select.text }}</text>
              <u-icon
                v-if="select.select"
                class="select-icon"
                :color="activeColor"
                size="35"
                name="checkmark"
              ></u-icon>
            </view>
          </view>
        </slot>
      </view>
    </view>
    <u-mask
      duration="100"
      :show="dropdownShow"
      @click="closeMask"
      :z-index="zIndex"
    ></u-mask>
  </view>
</template>

<script>
const dropdownOption1 = [
  { id: 0, text: '类型', value: '', select: false },
  { id: 1, text: '全场券', value: 1, select: false },
  { id: 2, text: '品类券', value: 2, select: false },
  { id: 3, text: '单品券', value: 3, select: false },
  { id: 4, text: '业务券', value: 4, select: false }
]
const dropdownOption2 = [
  { id: 5, text: '状态', value: '', select: false },
  { id: 6, text: '可使用', value: 1, select: false },
  { id: 7, text: '已过期', value: 2, select: false }
]
const dropdownOption3 = [
  { id: 8, text: '优惠力度', value: '', select: false },
  { id: 9, text: '满100-20', value: 1, select: false },
  { id: 10, text: '满100-50', value: 2, select: false }
]

export default {
  props: {
    // 下拉框数据
    dropdownList: {
      type: Array,
      default: () => [
        { show: false, options: dropdownOption1 },
        { show: false, options: dropdownOption2 },
        { show: false, options: dropdownOption3 }
      ],
      required: true,
      validator: value =>
        value.every(item => Array.isArray(item.options) && item.options.length)
    },
    //背景颜色
    bgcolor: {
      type: String,
      default: 'none'
    },
    //top rpx 选择框高度也用这个值
    top: {
      type: Number,
      default: 90
    },
    // 菜单标题和选项的选中态颜色
    activeColor: {
      type: String,
      default: '#e7141a'
    },
    // mask和下拉列表的z-index
    zIndex: {
      type: [String, Number],
      default: 21
    }
  },
  data() {
    return {
      dropdownShow: false,
      dropdownListFromFather: this.dropdownList
    }
  },
  computed: {},
  methods: {
    getTitle(item = []) {
      const obj = item.find(v => v.select) || {}
      if (obj.select) {
        return obj.text
      } else {
        if (item[0]) {
          item[0].select = true
          return item[0].text
        }
      }
      return ''
    },
    handleDropClick(item) {
      if (item.show) {
        item.show = false
        this.dropdownShow = false
        return
      }
      this.dropdownListFromFather.map(item => {
        item.show = false
      })
      const t = setTimeout(() => {
        item.show = true
        this.dropdownShow = true
        clearTimeout(t)
      }, 100)
    },
    closeMask() {
      this.dropdownShow = false
      this.dropdownListFromFather.map(item => {
        item.show = false
      })
    },
    handleSelected(select, options) {
      options.map(item => {
        item.select = false
      })
      select.select = true
      this.closeMask()
      // 返回选中对象和下拉列表数组
      this.$emit('change', select, options)
    }
  },
  watch: {
    dropdownList: {
      handler(v) {
        this.dropdownListFromFather = v
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-list-wapper {
  position: relative;
}
.u-dropdown-view {
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  /* opacity: 0; */
  visibility: hidden;
  transition: height 0.5s ease-in-out;
  .u-selected-list {
    background-color: #fff;
    .select-item {
      color: #666666;
      font-size: 28rpx;
      padding: 30rpx 54rpx 30rpx 30rpx;
      margin-left: 30rpx;
    }
    .select-item.selectActive {
      color: #e7141a;
    }
  }
}

.u-dropdownlist-show {
  /* opacity: 1; */
  visibility: visible;
}
.u-dropdown-list {
  flex: 1;
  // z-index: 22;
  background: #fff;
  position: static;
}
.drop-item {
  justify-content: center;
  color: #999999;
  font-size: 30rpx;
  > text {
    margin-right: 10rpx;
  }
  /deep/ {
    .uicon {
      position: relative;
      top: -2rpx;
    }
  }
}
</style>
