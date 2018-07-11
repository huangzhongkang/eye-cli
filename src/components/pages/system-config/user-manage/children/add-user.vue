<template>
  <div class="add-user-wrap">
    <div class="common-table-layout form-box">
      <div class="left must">
        <i class="fa fa-asterisk"></i>&nbsp;用户名：
      </div>
      <div class="right">
        <el-input @change="change_username" v-model="username" :class="[username_reg === true? '': 'ipt_reg']" placeholder="输入用户名" class="input-style"></el-input>
        <span>6-18位英文、数字、下划线</span>
      </div>
    </div>
    <div class="common-table-layout form-box">
      <div class="left must">
        <i class="fa fa-asterisk"></i>&nbsp;用户简称：
      </div>
      <div class="right">
        <el-input @change="change_username_shorthand" v-model="username_shorthand" :class="[username_shorthand_reg === true? '': 'ipt_reg']" placeholder="输入用户简称" class="input-style"></el-input>
        <span>2-10位中文、英文、数字、下划线</span>
      </div>
    </div>
    <div class="common-table-layout form-box">
      <div class="left must">
        <i class="fa fa-asterisk"></i>&nbsp;登录密码：
      </div>
      <div class="right">
        <el-input @change="change_first_pass" :class="[first_pass_reg === true? '': 'ipt_reg']" type="password" v-model="first_pass" placeholder="输入登录密码" class="input-style">{{change_level}}</el-input>
        <span class="word">8-18位数字、大写字母、小写字母、特殊字符、必须包含其中3种类型</span>
        <div style="clear: both;"></div>
        <div class="intensity clearfix">
          <span class="pw-lv">密码强度：</span>
          <div class="level clearfix">
            <span class="flex" :class="[level === 1 ? 'level-style' : '']">弱</span>
            <span class="flex" :class="[level === 2 ? 'level-style2': '']">中</span>
            <span class="flex" :class="[level === 3 ? 'level-style3': '']">强</span>
          </div>
        </div>
      </div>
    </div>
    <div class="common-table-layout form-box">
      <div class="left must">
        <i class="fa fa-asterisk"></i>&nbsp;确认密码：
      </div>
      <div class="right">
        <el-input @change="change_last_pass" class="input-style" :class="[last_pass_reg === true? '': 'ipt_reg']" type="password" v-model="last_pass" placeholder="输入确认密码"></el-input>
      </div>
    </div>
    <div class="common-table-layout form-box">
      <div class="left must">
        <i class="fa fa-asterisk"></i>&nbsp;用户类型：
      </div>
      <div class="right">
        <el-select placeholder="请选择" v-model="select_val" class="input-style">
          <el-option
            v-for="item in data_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="common-table-layout form-box">
      <div class="left">
        用户权限：
      </div>
      <div class="right">
        <el-select placeholder="请选择" v-model="select_val" class="input-style">
          <el-option
            v-for="item in data_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="common-table-layout form-box">
      <div class="left must">
        <i class="fa fa-asterisk"></i>&nbsp;操作：
      </div>
      <div class="right">
        <span class="btn btn-primary btn-sm">添加用户</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "add-user",
    data () {
      return{
        level: '',
        username: '',
        username_reg: true,
        username_shorthand: '',
        username_shorthand_reg: true,
        first_pass: '',
        first_pass_reg: true,
        last_pass: '',
        last_pass_reg: true,
        data_options: [
          {
            value: '选项1',
            label: '所有权限'
          }, {
            value: '选项2',
            label: '审计权限'
          }
        ],
        select_val: '系统管理员',
      }
    },
    computed: {
      /* 密码强度样式 */
      change_level () {
        let reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{6,18}$/;
        // 正则强度判断
        let reg1 = /^[a-z]{6,18}$/;
        let reg2= /^([A-Z]){6,18}$/;
        let reg3= /^([0-9]){6,18}$/;
        let reg4= /^([_!@#$%^&*`~()-+=.]){6,18}$/;

        let reg5 = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
        let reg6 = /[A-Z].*[a-z]|[a-z].*[A-Z]/;
        let reg7 = /[A-Z].*[_!@#$%^&*`~()-+=.]|[a-z].*[_!@#$%^&*`~()-+=.]/;
        let reg8 = /[0-9].*[_!@#$%^&*`~()-+=.]|[_!@#$%^&*`~()-+=.].*[0-9]/;

        if (reg1.test(this.first_pass) || reg2.test(this.first_pass) || reg3.test(this.first_pass) || reg4.test(this.first_pass)) {
          this.level = 1;
        }
        if(reg5.test(this.first_pass) || reg6.test(this.first_pass) || reg7.test(this.first_pass) || reg8.test(this.first_pass)){
          this.level = 2;
        }
        if (reg.test(this.first_pass)) {
          this.level = 3;
        }
        if (this.first_pass.length<6) {
          this.level = 0;
        }
      }
    },
    methods: {
      /* 添加用户表单样式 */
      change_username () {
        let reg = /^[\w]{6,12}$/;
        if (reg.test(this.username)) {
          this.username_reg = true;
        } else {
          this.username_reg = false;
        }
      },
      change_username_shorthand () {
        let reg = /^[\w]{2,10}$/;
        if (reg.test(this.username_shorthand)) {
          this.username_shorthand_reg = true;
        } else {
          this.username_shorthand_reg = false;
        }
      },
      change_first_pass () {
        // 正则8-18位数字、大写字母、小写字母、特殊字符、必须包含其中3种类型
        let reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,18}$/;
        // 正则强度判断
        let reg2 = /^[a-z]{8,18}$/;
        let reg3= /^(?![A-Z]+$){8,18}$/;
        let reg4= /^(?![0-9]+$){8,18}$/;
        let reg5= /^(?![_!@#$%^&*`~()-+=]+$){8,18}$/;
        if (reg.test(this.first_pass)) {
          this.first_pass_reg = true;
        } else {
          this.first_pass_reg = false;
        }
        if (reg2.test(this.first_pass)) {
          this.username = this.first_pass;
        }
      },
      change_last_pass () {
        if (this.last_pass === this.first_pass) {
          this.last_pass_reg = true;
        } else {
          this.last_pass_reg = false;
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
.add-user-wrap{
  margin: 20px 0 0 0;
  .form-box{
    width: 100%;
    min-height: 45px;
    border: 1px solid #ddd;
    border-bottom: none;
    font-size: 14px;
    color: rgb(103, 106, 108);
    .left{
      width: 160px;
      padding: 0 10px 0 0;
      text-align: right;
      border-right: 1px solid #ddd;
    }
    .right{
      text-align: left;
      padding: 6px 6px 6px 10px;
      .input-style{
        width: 300px;
        margin: 0 10px 0 0;
      }
      .intensity{
        margin: 8px 0 4px;
        .pw-lv{
          float: left;
          line-height: 16px;
        }
        .level{
          float: left;
          span{
            float: left;
            width: 40px;
            height: 16px;
            padding: 2px 0;
            margin-right: 6px;
            line-height: 16px;
            background: #D0D0D0;
            border-radius: 2px;
          }
        }
      }
  }
    .must{
      color: #a94442;
    }
  }
  .form-box:nth-child(odd) {
    background-color: #f9f9f9;
  }
  .form-box:nth-last-child(1){
    border-bottom: 1px solid #ddd;
  }
}
/* 密码强度样式 */
.level-style{
  background: #CC0000!important;
}
.level-style2{
  background: #FFCC00!important;
}
.level-style3{
  background: #00CC00!important;
}
</style>