<template>
  <div class="message" :class="align">
    <div class="querist">
      <img :src="headImg" alt="" />
    </div>
    <div class="message-box" :style="messageStyle">
      <span class="querist-triangle" :style="triangleBdStyle">
        <em :style="triangleBgStyle"></em>
      </span>
      <div class="message-text">
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'MText',
  data () {
    return {
      show: false
    }
  },
  props: {
    mId: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    headImg: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    },
    bgColor: {
      type: String,
      default: ''
    },
    bdColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    messageStyle () {
      const style = {}
      if (this.bgColor) {
        style.backgroundColor = this.bgColor
      }
      if (this.color) {
        style.color = this.color
      }
      style.borderColor = this.bdColor || this.bgColor
      return style
    },
    triangleBdStyle () {
      const style = {}
      const color = this.bdColor || this.bgColor
      if (color) {
        if (this.align === 'right') {
          style.borderColor = 'transparent transparent transparent ' + color
        } else {
          style.borderColor = 'transparent ' + color + ' transparent transparent'
        }
      }
      return style
    },
    triangleBgStyle () {
      const style = {}
      if (this.bgColor) {
        if (this.align === 'right') {
          style.borderColor = 'transparent transparent transparent ' + this.bgColor
        } else {
          style.borderColor = 'transparent ' + this.bgColor + ' transparent transparent'
        }
      }
      return style
    }
  }
}
</script>
<style lang="scss" scoped>
.message{
  display: flex;
  color: #333;
  text-align: left;
  .message-box{
    box-sizing: border-box;
    position: relative;
    margin-right: 50px;
    padding: 0 10px;
    border-radius: 3px;
    background-color: #F9F9F9;
    border: 1px solid #f1f1f1;
  }
  .message-text{
    font-size: 16px;
    padding: 9px 0;
    line-height: 1.4;
    div{ // 超出10行隐藏
      display:-webkit-box; 
      overflow: hidden; 
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; 
    }
    
  }
  .querist{
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    img{
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  }
}
.querist-triangle{
  position: absolute;
  top: 10px; // 40\2 - 3 - 7
  width: 0;
  height: 0;
  border-style:solid;
  left: -8px;
  border-width: 8px 8px 8px 0;
  border-color: transparent  #f1f1f1 transparent transparent;
  em{
    position: absolute;
    top: -7px;
    left: 1px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 7px 7px 0;
    border-color: transparent #F9F9F9 transparent transparent;
  }
}
.message.right{
  flex-direction: row-reverse;
  .message-box{
    margin: 0 0 0 50px;
  }
  .querist-triangle{
    left: auto;
    right: -8px;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent #f1f1f1;
    em{
      left: -8px;
      border-width: 7px 0 7px 7px;
      border-color: transparent  transparent transparent #F9F9F9;
    }
  }
  .querist{
    margin-right: 0;
    margin-left: 10px;
  }
}
</style>
