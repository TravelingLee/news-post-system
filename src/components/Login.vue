<template style="height: 100%;">
  <div :class="height" style="display:flex;flex-direction:row;justify-content:center;margin-top:35px">
    <el-card style="width:40%;display: flex; flex-direction:row;justify-content:center">
      <div id="logon">
        <label style="font-size: 22px;font-weight: bold;align-items: center;">登录</label>
        <el-input @focus="showTip" clearable class="input" v-model="username" placeholder="用户名"></el-input>
        <el-input @focus="showTip" clearable class="input" v-model="password" placeholder="密码" show-password></el-input>
        <el-button style="display: flex;flex-direction: row;justify-content: flex-start;" type="text" @click="changePass">忘记密码</el-button>
        <el-button :disabled="logon_disabled" v-loading="loading" @click="goToRegister">注		册</el-button>
        <el-button :disabled="logon_disabled" v-loading="loading" @click="logon">登		录</el-button>
      </div>
    </el-card>
    <el-dialog title="提示" :visible.sync="showDialog" width="30%">
			<span style="font-size: 15px;">
				{{tip}}
			</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'logon',
  data(){
    return {
      username:'',
      password:'',
      warn:'请输入注册信息',
      fontcolor:'common',
      loading:false,
      showDialog:false,
      logon_disabled:false,
      tip:'',
      height:'auto'
    }
  },
  methods:{
    goToRegister() {
      this.$router.push({path:'/register'})
    },
    logon(){
      if(this.username==''||this.password==''){
        this.tip = '用户名或密码不可为空'
        this.showDialog = true
        return
      }
      var _this = this
      //登录逻辑
      //请求参数
      this.loading = true
      var params = new URLSearchParams()
      params.append('name',this.username)
      params.append('password',this.password)
      this.axios.post('/user/login',params).then(res=>{
        console.log(res.data=='invalid')
        if(res.data=='invalid'){
          _this.tip = "用户名或密码有误\nIncorrect user name or password"
          this.loading = false
          _this.showDialog = true
          return
        }else {
          _this.$message({
            message:'登录成功！',
            type:'success'
          })
          this.loading = false
          _this.$router.push({
            name:'haveLogoned'
          })
        }
        _this.global.userId = res.data
      })
    },
    changePass(){
      this.tip = '密码忘了就忘了吧，没办法'
      this.showDialog = true
      console.log(this.global.userId)
    },
    checkEnsure(){
      if(this.username==''){
        this.warn = '用户名不可为空'
        this.fontcolor = 'red-color'
        return false
      }else if(this.password!=this.ensure&&this.password!=''){
        this.warn = '密码不匹配，请确认再重新输入！'
        this.fontcolor = 'red-color'
        return false
      }else if(this.password==''){
        this.warn = '密码不可为空'
        this.fontcolor = 'red-color'
        return false
      }else if(this.password==this.ensure&&this.password!=''){
        this.warn = ''
        this.fontcolor = 'common'
        return true
      }
    },
    showTip(){
      this.warn = '请输入注册信息'
      this.fontcolor = 'common'
    }
  },
  watch:{

  }
}
</script>

<style>
#logon {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  justify-content: space-around;
}
.input {
  width: 300px;
  justify-content: space-around;
  margin: 10px;
}
html,body {
  height: 100%;
  /* background-color: #F7F8FA; */
}
.common {
  color: black;
}
.red-color {
  color: red;
}
.percent {
  height: 100%;
}
.aoto {
  height: auto;
}
</style>