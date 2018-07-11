<template>
  <div>
    <!--添加组合规则-->
    <div v-if="Show_rule_addCombination" class="dialog-rule-operation">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="dialogVisibleCloseChild"
        width="80%">
        <div class="wrap border-table-wrap">
          <div class="common-table-layout">
            <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;规则类型：
            </div>
            <div class="right">
              <el-select v-model="select_val" class="select-style-300px"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;选择规则：
            </div>
            <div class="right">

            </div>
          </div>
          <div class="common-table-layout">
            <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;威胁等级：
            </div>
            <div class="right">
              <el-select v-model="select_val" class="select-style-300px"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;攻击是否成功：
            </div>
            <div class="right">
              <el-select v-model="select_val" class="select-style-300px"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;是否存在后门：
            </div>
            <div class="right">
              <el-select v-model="select_val" class="select-style-300px"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left must"><i data-v-a30cdbaa="" class="fa fa-asterisk"></i>&nbsp;规则分值：
            </div>
            <div class="right">
              <el-select v-model="select_val" class="select-style-300px" placeholder="规则分值"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">修复方案：
            </div>
            <div class="right">
              <el-input type="textarea" placeholder="输入修复方案" class="textarea-style-300px"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">备注：
            </div>
            <div class="right">
              <el-input type="textarea" placeholder="输入备注" class="textarea-style-300px"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left"></div>
            <div class="right"><span style="margin: 0;" class="btn btn-success btn-sm">添加组合匹配</span></div>
          </div>
        </div>
      </el-dialog>
    </div>

    <!--请求规则-->
    <div v-if="Show_rule_request" class="dialog-rule-operation">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="dialogVisibleCloseChild"
        width="80%">
        <div class="wrap border-table-wrap">
          <div class="common-table-layout">
            <div class="left">关键字：
            </div>
            <div class="right">
              <el-input type="textarea" class="textarea-style-300px" placeholder="输入关键字"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">规则类型：
            </div>
            <div class="right">
              <el-select v-model="select_val" class="select-style-300px"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">是否通用类：
            </div>
            <div class="right">
              <el-checkbox>请求规则通用</el-checkbox>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">使用的工具：
            </div>
            <div class="right">
              <el-select v-model="select_val" class="select-style-300px"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">状态值：
            </div>
            <div class="right">
              <el-input class="textarea-style-300px" placeholder="输入状态值"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">备注：
            </div>
            <div class="right">
              <el-input type="textarea" placeholder="输入备注" class="textarea-style-300px"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left"></div>
            <div class="right"><span style="margin: 0;" class="btn btn-success btn-sm">添加组合匹配</span></div>
          </div>
        </div>
      </el-dialog>
    </div>

    <!--添加攻击小类-->
    <div v-if="Show_attack_smallClass" class="dialog-rule-operation">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="dialogVisibleCloseChild"
        width="80%">
        <div class="wrap border-table-wrap">
          <div class="common-table-layout">
            <div class="left">攻击大类：
            </div>
            <div class="right">
              <el-select class="select-style-300px" v-model="select_val" placeholder="选择攻击大类"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">业务大类：
            </div>
            <div class="right">
              <el-select class="select-style-300px" v-model="select_val" placeholder="选择业务大类"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">危险等级：
            </div>
            <div class="right">
              <el-input class="input-style-300px" placeholder="请选择"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">攻击名称：
            </div>
            <div class="right">
              <el-input class="input-style-300px" placeholder="输入攻击名称：ACCESS注入"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">是否通用类：
            </div>
            <div class="right">
              <el-checkbox>是否通用类</el-checkbox>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">攻击过程描述：
            </div>
            <div class="right">
              <el-input type="textarea" class="textarea-style-300px" placeholder="发现[DIP]通过[ATT]方式连接[SIP]，共连接次数[ANUM]，连接过程可能会[ASTU]对我方造成影响"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">攻击名称：
            </div>
            <div class="right">
              <el-input class="input-style-300px" placeholder="输入攻击名称：ACCESS注入"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left"></div>
            <div class="right"><span style="margin: 0;" class="btn btn-success btn-sm">添加攻击小类</span></div>
          </div>
        </div>
      </el-dialog>
    </div>

    <!--添加攻击二类-->
    <div v-if="Show_attack_secondClass" class="dialog-rule-operation">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="dialogVisibleCloseChild"
        width="80%">
        <div class="wrap border-table-wrap">
          <div class="common-table-layout">
            <div class="left">攻击大类：
            </div>
            <div class="right">
              <el-select class="select-style-300px" v-model="select_val" placeholder="选择攻击大类"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">规则类型：
            </div>
            <div class="right">
              <el-input class="input-style-300px" placeholder="输入攻击二类名称"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left"></div>
            <div class="right"><span style="margin: 0;" class="btn btn-success btn-sm">添加攻击二类</span></div>
          </div>
        </div>
      </el-dialog>
    </div>

    <!--添加攻击大类-->
    <div v-if="Show_attack_bigClass" class="dialog-rule-operation">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="dialogVisibleCloseChild"
        width="80%">
        <div class="wrap border-table-wrap">
          <div class="common-table-layout">
            <div class="left">攻击大类：
            </div>
            <div class="right">
              <el-select class="select-style-300px" v-model="select_val" placeholder="选择攻击大类名称"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left"></div>
            <div class="right"><span style="margin: 0;" class="btn btn-success btn-sm">添加攻击大类</span></div>
          </div>
        </div>
      </el-dialog>
    </div>

    <!--添加业务大类-->
    <div v-if="Show_business_bigClass" class="dialog-rule-operation">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="dialogVisibleCloseChild"
        width="80%">
        <div class="wrap border-table-wrap">
          <div class="common-table-layout">
            <div class="left">业务大类：
            </div>
            <div class="right">
              <el-select class="select-style-300px" v-model="select_val" placeholder="选择业务大类名称"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left"></div>
            <div class="right"><span style="margin: 0;" class="btn btn-success btn-sm">添加业务大类</span></div>
          </div>
        </div>
      </el-dialog>
    </div>

    <!--规则工具-->
    <div v-if="Show_rule_tool" class="dialog-rule-operation">
      <el-dialog
        title=""
        :visible.sync="dialogVisible"
        :before-close="dialogVisibleCloseChild"
        width="80%">
        <div class="wrap border-table-wrap">
          <div class="common-table-layout">
            <div class="left">工具名称：
            </div>
            <div class="right">
              <el-input class="input-style-300px" placeholder="输入工具名称"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">工具用途：
            </div>
            <div class="right">
              <el-input class="input-style-300px" placeholder="输入工具用途"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">工具国家：
            </div>
            <div class="right">
              <el-select class="select-style-300px" v-model="select_val" placeholder="选择工具国家"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">工具使用语言：
            </div>
            <div class="right">
              <el-select class="select-style-300px" v-model="select_val" placeholder="选择工具使用语言"></el-select>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left">工具特征：
            </div>
            <div class="right">
              <el-input class="textarea-style-300px" type="textarea"></el-input>
            </div>
          </div>
          <div class="common-table-layout">
            <div class="left"></div>
            <div class="right"><span style="margin: 0;" class="btn btn-success btn-sm">添加规则工具</span></div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'dialogVisible',
      'Show_rule_addCombination',
      'Show_rule_request',
      'Show_attack_smallClass',
      'Show_attack_secondClass',
      'Show_attack_bigClass',
      'Show_business_bigClass',
      'Show_rule_tool'
    ],
    data() {
      return {
        select_val: ''
      }
    },
    methods: {
      submit() {
        this.dialogVisibleCloseChild();
      },
      dialogVisibleCloseChild() {
        Bus.$emit('dialogVisibleCloseChild', 'test'); // 传递操作模式状态控制变量的副本值
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    .common-table-layout {
      width: 100%;
      min-height: 45px;
      &:nth-of-type(odd) {
        background-color: rgb(249, 249, 249);
      }
      .left {
        padding: 0 10px 0 0;
        text-align: right;
      }
    }
  }
</style>
