<template>
    <div>
        <div class="export flex">
            <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span class="button button-raised button-small button-primary button-pill dropdown-toggle">
            <span v-if="routePath === '当前报告'">导出威胁报告</span>
            <span v-if="routePath === '安全周报'">导出安全周报</span>
            <span v-if="routePath === '安全月报'">导出安全月报</span>
            <span v-if="routePath === '安全季报'">导出安全季报</span>
            <span v-if="routePath === '安全年报'">导出安全年报</span>
            <i class="fa fa-angle-down"></i>
          </span>
          </span>
                <el-dropdown-menu slot="dropdown" class="export-dropdown-menu">
                    <el-dropdown-item><i class="fa fa-file-zip-o"></i> 导出HTML</el-dropdown-item>
                    <el-dropdown-item><i class="fa fa-file-pdf-o"></i> 导出PDF</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div style="clear: both;"></div>
        <div v-if="routePath === '安全周报'" class="flex date">
            <p style="font-size:16px">
                第
                <el-select class="select-style-70px" v-model="select_val" placeholder="请选择">
                    <el-option
                            v-for="item in data_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                期 系统安全周报
                (<span style="font-size:16px;color: #FFBA43;">2018-07-02到2018-07-08</span>)
            </p>
        </div>
        <div v-if="routePath === '安全月报'" class="flex date">
            <p style="font-size:16px">
                第
                <el-select class="select-style-70px" v-model="select_val" placeholder="请选择">
                    <el-option
                            v-for="item in data_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                期 系统安全月报
                (<span style="font-size:16px;color: #FFBA43;">2018-07-02到2018-07-08</span>)
            </p>
        </div>
        <div v-if="routePath === '安全季报'" class="flex date">
            <p style="font-size:16px">
                第
                <el-select class="select-style-70px" v-model="select_val" placeholder="请选择">
                    <el-option
                            v-for="item in data_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                期 系统安全季报
                (<span style="font-size:16px;color: #FFBA43;">2018-07-02到2018-07-08</span>)
            </p>
        </div>
        <div v-if="routePath === '安全年报'" class="flex date">
            <p style="font-size:16px">
                第
                <el-select class="select-style-70px" v-model="select_val" placeholder="请选择">
                    <el-option
                            v-for="item in data_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                期 系统安全年报
                (<span style="font-size:16px;color: #FFBA43;">2018-07-02到2018-07-08</span>)
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "export-dropdown-menu",
        props: [
            'routePath'
        ],
        data () {
            return{
                select_val: '2',
                data_options: [
                    {
                        value: '选项1',
                        label: '1'
                    },
                    {
                        value: '选项2',
                        label: '2'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .export {
        min-height: 50px;
    }
    .date{
        margin-top: 20px;
    }
</style>