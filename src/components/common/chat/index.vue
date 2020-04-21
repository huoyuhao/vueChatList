<template>
  <div class="chat">
    <div v-for="(message, index) in chatData" :key="'message' + index">
      <p class="time" v-if="index === 0">{{ new Date(Number(message.time)).format('yyyy年M月d日 hh:mm:ss') }}</p>
      <p class="time" v-else-if="chatData[index].time - chatData[index-1].time > 1000 * 60 * 5">{{ new Date(Number(message.time)).format('yyyy年M月d日 hh:mm:ss') }}</p>
      <m-picture class="message"
        v-if="message.type === 'image'"
        :mId="message.id"
        :headImg="message.headImg"
        :align="message.isUser ? 'right' : ''"
        :content="message.content"
        @preview="preview"
        />
      <m-text class="message"
        v-else-if="message.type === 'text'"
        :mId="message.id"
        :headImg="message.headImg"
        :align="message.isUser ? 'right' : ''"
        :content="message.content"
        :bgColor="message.isUser ? '#98ff65' : ''"
        />
      <p v-else-if="message.type === 'system'" class="cancel">{{ message.content }}</p>
    </div>
    <van-image-preview v-model="show" :startPosition="index" :images="previewImg" @change="onChange" />
  </div>
</template>
<script type="text/javascript">
import mPicture from '../picture/index'
import mText from '../text/index'

export default {
  name: 'chat',
  components: {
    mPicture,
    mText
  },
  data () {
    return {
      show: false,
      index: 0,
      isGetPreview: false,
      previewImg: []
    }
  },
  props: {
    chatData: {
      type: Array,
      default: () => {
        return  []
      }
    },
  },
  methods: {
    preview (id) {
      if (!this.isGetPreview) {
        this.previewImg = this.getPreviewImg(id)
        this.isGetPreview = true
      }
      this.show = true
    },
    onChange(index) {
      this.index = index
    },
    getPreviewImg (id) { // 获取图片列表和开始索引
      let chatImg = this.chatData.filter(item => {
        if (item.type === 'image') {
          return true
        }
      })
      return chatImg.map((item, index) => {
        if (item.id === id) {
          this.index = index
        }
        return item.content
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.message{
  margin-top: 12px;
}
.cancel{
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>
