<template>
  <div class="message" :class="align">
    <div class="querist">
      <img :src="headImg" alt="" />
    </div>
    <div class="message-image" @click="preview">
      <img :src="content" alt="" />
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'MPicture',
  data () {
    return {
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
  },
  methods: {
    preview () {
      this.$emit('preview', this.mId)
    }
  }
}
</script>
<style lang="scss" scoped>
.message{
  display: flex;
  color: #333;
  text-align: left;
  .message-image{
    width: 160px;
    img{
      width: 100%;
      border-radius: 4px;
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
.message.right{
  flex-direction: row-reverse;
  .querist{
    margin-right: 0;
    margin-left: 10px;
  }
}
</style>
