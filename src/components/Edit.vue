<template>
  <div id="edit">
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <div class="btn-group">
      <el-button @click="save" class="btn" plain type="primary">保 存</el-button>
      <el-button @click="publish" class="btn" type="primary">发 布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      text: ""
    }
  },
  methods:{
    publish() {
      console.log('publish',this.text)
    },
    save() {
      console.log('save',this.text)
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 10px;
}
.btn-group {
  position:absolute;
  right: 10px;
  bottom: 60px;
}
</style>