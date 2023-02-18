<template>
  <div class="comment-card">
    <el-card :body-style="{ height:'100px',width:'900px' }" v-for="index in 5" :key="index" class="box-card">
      <div class="comment-text">
        <div class="title">新闻标题：{{ title }}</div>
        <div class="content">评论内容：{{ content }}</div>
        <div class="comment-bottom">
          <div class="author">{{ publisher }}</div>
          ·
          <div class="time">{{ time }}</div>
        </div>
      </div>
      <div class="operation">
        <el-tooltip class="item" effect="dark" content="审核通过"><i @click="pass(index)" style="font-size:40px;color: #409EFF" class="el-icon-success"></i></el-tooltip>
        <el-tooltip class="item" effect="dark" content="删除评论"><i @click="remove(index)" style="font-size:40px;color: #F56C6C;margin-left: 36px" class="el-icon-delete-solid"></i></el-tooltip>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: "CommentCard",
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: '新闻标题'
    },
    publisher: {
      type: String,
      default: '发布者'
    },
    time: {
      type: String,
      default: '2012-07-26'
    },
    content: {
      type: String,
      default: '评论内容'
    },
    state: {
      type: String,
      default: '评论状态'
    }
  },
  methods: {
    pass(index) {
      console.log('通过审核',index)
    },
    remove(index) {
      console.log('移除评论',index)
    }
  }
}
</script>

<style scoped>
.operation {
  display: flex;
  flex-direction: row;
  position: relative;
  right: -750px;
  bottom: 65px;
  width: 120px;
  /*align-items: center;*/
  /*width: 120px;*/
  /*justify-content: center;*/
}
.box-card {
  display: flex;
  flex-direction: row;
  margin-top:15px;
}
.comment-card {
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.comment-text {
  display: flex;
  flex-direction: column;
  position:relative;
  left:15px;
  width: 300px;
  height: 100px;
}
.content {
  text-align: left;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #999;
  display: -webkit-box;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
  max-height: 20px;
  overflow: hidden;
  width: 600px;
}
.comment-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  left: 5px;
  position: absolute;
  bottom: 5px;
}
.item {
  margin: 4px;
}
</style>