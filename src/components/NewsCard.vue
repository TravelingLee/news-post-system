<template>
  <div id="news-pane">
    <div id="advertisement">广告位招租</div>
    <div style="height:220px;width:900px" v-for="(news,index) in newses" :key="index">
      <el-card :body-style="{ height:'220px',width:'900px' }" :key="index" class="box-card">
        <img src="../img/blockchain.jpg" style="width:280px;height:180px;position:absolute;left:25px;">
        <div class="news-text">
          <div class="title" style="cursor:pointer" @click="openDrawer(news)">{{ news.title }}</div>
          <div class="summary">{{ news.content }}</div>
          <div class="news-bottom">
            <div class="author">{{ news.author }}</div>
            ·
            <div class="time">{{ news.time }}</div>
            ·
            <div class="reading-volume">{{ news.like }}点赞</div>
          </div>
        </div>
      </el-card>
      <el-drawer
          :title="news.title"
          size="60%"
          :visible.sync="drawer"
          :direction="direction"
          :with-header="false"
          :before-close="handleClose">
        <div style="padding:25px">
          <div class="text-title">
            <h1>
              {{ targetNews.title }}
            </h1>
            <div class="article-info">
              <span id="time" class="content">{{targetNews.time}} · {{targetNews.author}}</span>
            </div>
          </div>
            <VueMarkdown :source="markdown"></VueMarkdown>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: "NewsPane",
  components: {
    VueMarkdown
  },
  data() {
    return {
      markdown:'# 这是一级标题',
      drawer: false,
      direction: 'rtl',
      targetNews:{},
      newses: [
        {
          title: "俊二叉任务",
          author: '作者',
          time: '2015-01-25',
          like: 6371,
          content: '新闻内容新闻内容新闻内容新闻内容',
          id: 'j98u3rhrweojfp',
          type: '新闻类型',
          keys: ['魔方', '益智', '比赛', 'WCA'],
          status: 'normal'
        },
        {
          title: "斯坦啊",
          author: '工人',
          time: '2014-01-16',
          like: 6371,
          content: '新闻内容新闻内容新闻内容新闻内容',
          id: 'j98u3rhrweojfp',
          type: '新闻类型',
          keys: ['魔方', '益智', '比赛', 'WCA'],
          status: 'normal'
        },
        {
          title: "男人不打挖恒",
          author: '能僧',
          time: '2011-07-09',
          like: 6371,
          content: '新闻内容新闻内容新闻内容新闻内容',
          id: 'j98u3rhrweojfp',
          type: '新闻类型',
          keys: ['魔方', '益智', '比赛', 'WCA'],
          status: 'normal'
        },
        {
          title: "绝红哈哥",
          author: '作者',
          time: '发布时间',
          like: 6371,
          content: '新闻内容新闻内容新闻内容新闻内容',
          id: 'j98u3rhrweojfp',
          type: '新闻类型',
          keys: ['魔方', '益智', '比赛', 'WCA'],
          status: 'normal'
        },
        {
          title: "卷桑格",
          author: '嘎发哥',
          time: '2013-08-02',
          like: 6371,
          content: '新闻内容新闻内容新闻内容新闻内容',
          id: 'j98u3rhrweojfp',
          type: '新闻类型',
          keys: ['魔方', '益智', '比赛', 'WCA'],
          status: 'normal'
        },
        {
          title: "刚AR嘎嘎",
          author: '恒后台',
          time: '2010-06-01',
          like: 6371,
          content: '新闻内容新闻内容新闻内容新闻内容',
          id: 'j98u3rhrweojfp',
          type: '新闻类型',
          keys: ['魔方', '益智', '比赛', 'WCA'],
          status: 'normal'
        },
        {
          title: "红嘎哈斯",
          author: '三扥感触',
          time: '2015-01-29',
          like: 6371,
          content: '新闻内容新闻内容新闻内容新闻内容',
          id: 'j98u3rhrweojfp',
          type: '新闻类型',
          keys: ['魔方', '益智', '比赛', 'WCA'],
          status: 'normal'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    openDrawer(news) {
      console.log(news)
      this.targetNews = news
      this.drawer = true
    },
    openDetails(news) {

    },
    handleClose(done) {
      console.log('关闭')
      done()
      // this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
    }
  }
}
</script>

<style scoped>
.news-text {
  position: relative;
  left: 300px;
  width: 600px;
  height: 180px;
}

#news-pane {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.box-card {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 12px;
  justify-content: center;
}

.title {
  text-align: left;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #111;
  display: -webkit-box;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 600px;
}

.summary {
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

.author {
  color: #666;
  font-weight: 600;
  font-size: 12px
}

.time {
  font-size: 12px;
  color: #666;
}

.reading-volume {
  font-size: 12px;
  color: #666;
}

.news-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  position: absolute;
  bottom: 15px
}

#advertisement {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 10px;
  left: 12px;
  width: 240px;
  height: 500px;
  background: white;
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
}
.article {
  color: #191919;
  font-size: 16px;
  line-height: 30px;
  padding-top: 5px;
  overflow: hidden;
}
.article-info {
  display:flex;
  flex-direction:row;
}
</style>