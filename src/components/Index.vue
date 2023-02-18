<template>
  <div id="root">
    <NewsCard style="width:100%;height:1200px"></NewsCard>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'

export default {
  components: {
    NewsCard
  },
  name: "Index",
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 40px;
}
.add-news {
  color:#409eff;
  position: absolute;
  right: 15px;
  top: 15px;
}
#root {
  display: flex;
  flex-direction: column;
}
</style>