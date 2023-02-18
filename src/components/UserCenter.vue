<template>
  <div id="user-center">
    <el-descriptions direction="vertical" style="margin-top:15px" title="我的个人信息" :column="3" :size="size" border>
      <template slot="extra">
        <el-button type="primary" size="small">修改</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ username }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          用户ID
        </template>
        {{ userid }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-lock"></i>
          用户权限
        </template>
        {{ permission }}
      </el-descriptions-item>
    </el-descriptions>
    <div
        style="font-size:16px;
        font-weight: 700;
        margin-top:15px;
        color: #303133">
      我发布的新闻</div>
    <el-table
        height="350"
        :data="tableData"
        style="width: 100%;margin-top:15px">
      <el-table-column
          prop="title"
          label="标题"
          width="180">
      </el-table-column>
      <el-table-column
          prop="read"
          label="浏览量"
          width="180">
      </el-table-column>
      <el-table-column
          sortable
          prop="time"
          label="发布时间">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="primary"
              @click="handleView(scope.$index, scope.row)">查看</el-button>
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "UserCenter",
  methods: {
    handleEdit(index,row) {
      console.log(index,row)
    },
    handleDelete(index,row) {
      console.log(index,row)
    },
    handleView(index) {
      console.log(index)
    }
  },
  props:{
    username: {
      type: String,
      default: "用户名"
    },
    userid: {
      type: String,
      default:"用户id"
    },
    newsList: [],
    permission: {
      type: String,
      default: '普通用户'
    }
  },
  data() {
    return {
      size: '',
      tableData: [
        {
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },
        {
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },
        {
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },
        {
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },
        {
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },{
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },{
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },{
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },{
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },{
          title: "新闻标题",
          time: '2012-07-26 13:15',
          read: 7273
        },
      ]
    }
  }
}
</script>

<style scoped>
#user-center {

}
</style>