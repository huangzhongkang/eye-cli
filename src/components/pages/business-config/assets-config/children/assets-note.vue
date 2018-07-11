<template>
  <div class="common-content assets-group-config">
    <h5 v-if="edit_assets_note === false" class="common-title">新增资产备注</h5>
    <h5 v-if="edit_assets_note === true" class="common-title">修改资产备注</h5>
    <div class="common-box clearfix">
      <div class="box">
        <div class="common-table-layout">
          <div class="left must">
            <i class="fa fa-asterisk"></i>&nbsp;资产IP：
          </div>
          <div class="right">
            <p class="alert alert-info">
              <i class="fa fa-info-circle"></i> 支持添加固定IP【例：1.2.3.4】、IP段【例：1.2.3.*】、IP组【例：1.2.3.4-1.2.3.10 中间用&nbsp;-&nbsp;相隔】、IP掩码【例：1.2.3.4/22】
            </p>
            <el-input v-model="assets_IP" class="input-style-400px" placeholder="输入固定IP / IP段 / IP组 / IP掩码 "
                      clearable></el-input>
          </div>
        </div>
        <div class="common-table-layout">
          <div class="left must">
            <i class="fa fa-asterisk"></i>&nbsp;资产备注：
          </div>
          <div class="right">
            <el-input v-model="assets_IP" class="input-style-400px" placeholder="输入资产备注 " clearable></el-input>
          </div>
        </div>
        <div class="common-table-layout">
          <div class="left">操作：</div>
          <div class="right">
            <div style="height: 0;overflow: hidden;">
              <div class="input-style-400px"></div>
            </div>
            <div v-if="edit_assets_note === false" @click="addAssetsNote" class="btn btn-success btn-sm">添加资产备注</div>
            <div v-if="edit_assets_note === true">
              <span @click="editAssetsNote" class="btn btn-success btn-sm">修改资产备注</span>
              <span @click="cancelAssetsNote" class="btn btn-danger btn-sm">取消修改</span>
            </div>
          </div>
        </div>
      </div>
      <div class="box flex">
        <div width="10%;" align="center">
          <span style="font-size:52px;color:#DDDDDD;">或</span>
        </div>
      </div>
      <div class="box">
        <blockquote>
          <p style="font-size:14px;line-height:24px;">
            1、上传文件必须为&nbsp;<code>xls</code>，<code>xlsx</code>&nbsp;格式。<br>
            2、上传文件大小不能超过&nbsp;<code>10M</code>。<br>
            3、<span id="descp_rule_helper" style="cursor:help;border-bottom: 1px dotted #777;">重复IP处理规则</span>
          </p>
        </blockquote>
        <div id="descp_rule_cont" style="display:none;">
          <div style="line-height:30px;">
            1、上传资产备注中资产IP分为段IP和单IP，不是某一具体IP均为段IP；<br/>
            2、空备注信息不录入系统；<br/>
            3、单IP会覆盖已录入的IP（段IP和单IP），当备注信息一致时不覆盖只更新时间信息；<br/>
            4、段IP不会覆盖已录入的单IP；<br/>
            5、段IP会和之前的段IP进行比较并下载成文件让用户处理；
          </div>
        </div>
        <div>
          <span class="btn btn-warning"><i class="fa fa-download"></i>&nbsp;下载模板文件......</span>
          <span class="btn btn-success"><i class="fa fa-upload"></i>&nbsp;上传资产备注文件......</span>
        </div>
      </div>
    </div>
    <h5 class="common-title">资产备注列表</h5>
    <div class="common-box">
      <tables></tables>
    </div>
  </div>
</template>

<script>
  import tables from './table/assets-note-table'
  export default {
    name: "assets-note",
    components: {
      tables
    },
    data() {
      return {
        assets_IP: '',
        assets_note: '',
        edit_assets_note: false
      }
    },
    methods: {
      /** loading **/
      loading() {
        const loading = this.$loading({
          lock: true,
          text: '处理中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.$message({
            message: '网站信息配置成功',
            type: 'success'
          });
        }, 1000);
      },

      /** 新增资产备注 **/
      addAssetsNote() {
        this.loading();
      },

      /** 修改资产备注 **/
      editAssetsNote() {
        this.loading();
      },

      /** 取消修改资产备注 **/
      cancelAssetsNote() {
        this.edit_assets_note = false;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>