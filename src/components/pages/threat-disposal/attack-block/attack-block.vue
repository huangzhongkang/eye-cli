<template>
    <div>
        <div class="common-box">
            <el-tabs v-model="activeName" type="card">
                <!--攻击阻断-->
                <el-tab-pane name="first">
                    <span slot="label">攻击阻断</span>
                    <div class="tab-content">
                        <p class="alert alert-info" style="padding:5px;margin-bottom:5px;">
                            <i class="fa fa-info-circle"></i> 支持添加&nbsp;&nbsp;固定IP【例：1.2.3.4】、IP段【例：1.2.3.*】、IP掩码【例：1.2.3.4/22】
                        </p>
                        <div class="padding10-20 border-table-wrap">
                            <h1 class="purple-title">阻断IP操作</h1>
                            <el-input class="input-style-300px" placeholder="请输入阻断IP"></el-input>
                            <div style="width: 50%;">
                                <div class="common-table-layout">
                                    <div class="left">
                                        <span class="btn btn-info btn-xs">备注</span>
                                    </div>
                                    <div class="right">
                                        <el-input class="textarea-style-300px" type="textarea"></el-input>
                                    </div>
                                </div>
                            </div>
                            <div class="btn btn-primary btn-sm">添加阻断IP</div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "attack-block",
        data() {
            return{
                activeName: 'first'
            }
        }
    }
</script>

<style lang="scss" scoped>
.padding10-20{
    padding:10px 20px;
    .common-table-layout{
        width: 50%;
        height: 100px;
        margin: 20px 0;
        .left{
            width: 10%;
            text-align: center;
        }
        .right{
            width: 100%;
        }
    }
}
</style>