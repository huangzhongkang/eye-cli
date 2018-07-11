<template>
  <div>
    <div class="introduction">
      <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
        <i class="fa fa-info-circle"></i> 支持添加&nbsp;&nbsp;固定IP【例：1.2.3.4】、IP段【例：1.2.3.*】、IP组【例：1.2.3.4-1.2.3.10 中间用&nbsp;-&nbsp;相隔】、IP掩码【例：1.2.3.4/22】
        <br>
        <i class="fa fa-info-circle"></i> 支持添加&nbsp;&nbsp;域名【例：xxxx.com】
      </p>
    </div>
    <div class="box">
      <h1 class="purple-title">允许资产/域名</h1>
      <div class="list">
        <el-input placeholder="支持添加IP或域名" class="input-style-300px"></el-input>
        <span class="btn btn-primary btn-sm">添加</span>
        <div class="message-none">
          暂无信息
        </div>
      </div>
    </div>
    <div class="box">
      <h1 class="purple-title">屏蔽资产/域名</h1>
      <div class="list">
        <el-input placeholder="支持添加IP或域名" class="input-style-300px"></el-input>
        <span class="btn btn-primary btn-sm">添加</span>
        <div class="message-none">
          暂无信息
        </div>
      </div>
    </div>
    <div class="box">
      <h1 class="purple-title">屏蔽攻击源</h1>
      <div class="list">
        <el-input placeholder="支持添加IP" class="input-style-300px"></el-input>
        <span class="btn btn-primary btn-sm">添加</span>
        <div class="message-none">
          暂无信息
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "global-assets"
  }
</script>

<style lang="scss" scoped>
  .box{
    margin-bottom: 50px;
    padding: 0 20px;
  }
  .purple-title {
    margin-bottom: 15px;
  }

  .message-none {
    margin-top: 10px;
    padding: 10px;
    color: red;
    border: 1px dashed #DDDDDD;
    background-color: #FFFFFF;
  }
</style>