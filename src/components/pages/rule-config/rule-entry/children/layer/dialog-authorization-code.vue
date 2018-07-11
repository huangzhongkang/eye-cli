<template>
  <div class="message-box-dialog">
    <el-dialog
      title="请输入操作模式授权码"
      :visible.sync="dialogVisible"
      :before-close="dialogVisibleCloseChild"
      width="340px">
      <textarea class="form-control message-box-textarea"></textarea>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleCloseChild">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    props: [
      'dialogVisible',
      'operation_status'
    ],
    data() {
      return {
        operation_status_dialog: false // 操作模式状态控制变量的副本，由子组件传递到父级通过验证此变量来改变父组件的操作模式状态
      }
    },
    methods: {
      submit() {
        this.operation_status_dialog = true;
        this.dialogVisibleCloseChild();
      },
      dialogVisibleCloseChild() {
        Bus.$emit('dialogVisibleCloseChild', this.operation_status_dialog); // 传递操作模式状态控制变量的副本值
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
