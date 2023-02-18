<template style="height: 100%;">
  <div :class="height" style="display:flex;flex-direction:row;justify-content:center;margin-top:35px">
    <el-card style="width:40%;display: flex; flex-direction:row;">
      <div id="logon">
        <label style="font-size: 22px;font-weight: bold;align-items: center;">注册</label>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item class="input" prop="account">
            <el-input style="width:300px" @focus="showTip" clearable v-model="ruleForm.account" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item class="input" prop="pass">
            <el-input type="password" style="width:300px" @focus="showTip" clearable v-model="ruleForm.password" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item class="input" prop="checkPass">
            <el-input type="password" style="width:300px" @focus="showTip" clearable v-model="ruleForm.checkPass" placeholder="确认密码" show-password></el-input>
          </el-form-item>
          <el-form-item class="input">
            <el-button style="width:300px" :disabled="logon_disabled" v-loading="loading" @click="submitForm('ruleForm')">注		册</el-button>
          </el-form-item>
        </el-form>
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
    var validateAccount = (rule,value,callback) => {
      if (value===''){
         callback(new Error('请输入账号')) 
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      console.log(value)
      console.log(this.ruleForm.password)
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm:{
        account:'',
        password: '',
        checkPass: ''
      },
      username:'',
      password:'',
      warn:'请输入注册信息',
      fontcolor:'common',
      loading:false,
      showDialog:false,
      logon_disabled:false,
      tip:'',
      height:'auto',
      rules: {
        account: [
          { validator:validateAccount,trigger: 'blur' }
        ],
        pass: [
          { validator:validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    logon(){

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