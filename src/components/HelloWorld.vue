<template>
  <div class="hello">
    <chat :chatData="chatData"
          />
  </div>
</template>

<script>
import chat from './common/chat/index'

export default {
  name: 'HelloWorld',
  components: {
    chat
  },
  data () {
    return {
      chatData: [{
        id: '1',
        headImg: require('../assets/1.jpg'),
        time: '1586923200000', // 时间戳 2020-04-15 12:00:00
        type: 'text',
        content: '当前组件具体要求是什么？请详细说出。',
        isUser: false, // 是否是用户本身 可以通过对比当前消息的id和用户id是否相同来判断
      }, {
        id: '2',
        headImg: require('../assets/2.jpg'),
        time: '1586923206000',
        type: 'text',
        content: '写一个类似微信的渲染消息流的组件，支持不同类型：1.文本2.图片3.系统消息，例如加某个人到群组里，撤销消息要求考虑可扩展性，具体UI可以简单实现',
        isUser: true,
      }, {
        id: '3',
        headImg: require('../assets/2.jpg'),
        time: '1586923302000',
        type: 'system',
        content: '这是一条撤销消息内容',
        isUser: true,
      }, {
        id: '4',
        headImg: require('../assets/2.jpg'),
        time: '1586923402000',
        type: 'image',
        content: require('../assets/image1.jpg'),
        isUser: true,
      }, {
        id: '5',
        headImg: require('../assets/1.jpg'),
        time: '1586925202000',
        type: 'image',
        content: require('../assets/image2.jpg'),
        isUser: false,
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.hello{
  font-size: 16px;
  padding: 6px;
}
</style>
