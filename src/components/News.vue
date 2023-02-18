<template>
  <div id="news">
    <div class="text-title">
      <h1>
        {{ title }}
      </h1>
      <div class="article-info">
        <span id="time" class="content">{{time}}</span>
        <span id="author" class="content">{{author}}</span>
      </div>
    </div>
    <article class="article">
      {{content}}
    </article>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    title: {
      type: String,
      default: '新闻标题'
    },
    time: {
      type: String,
      default: '2012-07-26'
    },
    author: {
      type: String,
      default: '作者'
    },
    content: {
      type: String,
      default: '这是内容这是内容这是内容这是内容这是内容这是内容'
    }
  }
}
</script>

<style scoped>
#time {
  font-size:100%
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
.article {
  color: #191919;
  font-size: 16px;
  line-height: 30px;
  padding-top: 5px;
  overflow: hidden;
}
</style>