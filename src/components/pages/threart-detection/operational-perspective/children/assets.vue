<template>
  <div class="">
    <div class="well clearfix table-search element-style">
      <div class="pull-right">
        <el-select class="select pull-left" v-model="value_tableSelect" placeholder="请选择">
          <el-option
            v-for="item in options_tableSelect"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input
          v-model="inputVal_tableSearch"
          class="input pull-left"
          placeholder="输入查询内容"
          clearable>
        </el-input>
        <div class="table-search-btn pull-left">
          <div class="btn btn-primary">搜索</div>
          <div class="btn btn-warning">重置</div>
        </div>
      </div>
    </div>
    <el-table
      class="element-table-style table-expand-style"
      :data="assetsTableDataWatch"
      row-key="id"
      :expand-row-keys="expands"
      @row-click="rowClick"
      style="width: 100%">
      <el-table-column width="1px" type="expand">
        <template slot-scope="scope">
          <div class="expand-wrap clearfix">
            <div class="expand-box col-lg-6">
              <div class="">
                <h1 class="expand-title">资产基本信息</h1>
              </div>
              <div class="expand-content">
                <div class="content-box">
                  <div class="common-table-layout">
                    <div class="left">IP地址：</div>
                    <div class="right">10.0.0.3</div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">使用者：</div>
                    <div class="right">
                      <el-popover
                        placement="top"
                        width="160"
                        trigger="click"
                        v-model="visible_expand_user[scope.$index]">
                        <div class="popover-title">修改机器名</div>
                        <div class="popover-content">
                          <el-input class=""></el-input>
                          <div class="flex">
                            <button class="button button-caution button-pill button-small button-radius" @click.stop().prevent()="clickExpand_user()"><i class="fa fa-trash"></i>&nbsp;删除</button>
                            <button class="button button-primary button-pill button-small button-radius" @click.stop().prevent()="clickExpand_user()"><i class="fa fa-save"></i>&nbsp;确定</button>
                            <button class="button button-inverse button-pill button-small button-radius" @click.stop().prevent()="clickExpand_user()"><i class="fa fa-close"></i>&nbsp;关闭</button>
                          </div>
                        </div>
                        <i @click.stop="clickEditIcon($event)" slot="reference" class="fa fa-edit table-edit-icon"></i>
                      </el-popover>
                    </div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">所属单位：</div>
                    <div class="right">
                      <el-popover
                        placement="top"
                        width="160"
                        trigger="click"
                        v-model="visible_expand_unit[scope.$index]">
                        <div class="popover-title">修改所属单位</div>
                        <div class="popover-content">
                          <el-select class="select" v-model="value_tableSelect" placeholder="请选择">
                            <el-option
                              v-for="item in options_tableSelect"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div style="text-align:center;margin-top: -8px;">
                            <span style="font-size:30px;color:#DDDDDD;">或</span>
                          </div>
                          <el-input class="" placeholder="添加单位新信息"></el-input>
                          <div class="flex">
                            <button class="button button-caution button-pill button-small button-radius" @click.stop().prevent()="clickExpand_unit()"><i class="fa fa-trash"></i>&nbsp;删除</button>
                            <button class="button button-primary button-pill button-small button-radius" @click.stop().prevent()="clickExpand_unit()"><i class="fa fa-save"></i>&nbsp;确定</button>
                            <button class="button button-inverse button-pill button-small button-radius" @click.stop().prevent()="clickExpand_unit()"><i class="fa fa-close"></i>&nbsp;关闭</button>
                          </div>
                        </div>
                        <i @click.stop="clickEditIcon($event)" slot="reference" class="fa fa-edit table-edit-icon"></i>
                      </el-popover>
                    </div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">描述信息：</div>
                    <div class="right">
                      <el-popover
                        placement="top"
                        width="160"
                        trigger="click"
                        v-model="visible_expand_desc[scope.$index]">
                        <div class="popover-title">修改描述信息</div>
                        <div class="popover-content">
                          <el-input class="" placeholder=""></el-input>
                          <div class="flex">
                            <button class="button button-caution button-pill button-small button-radius" @click.stop().prevent()="clickExpand_desc()"><i class="fa fa-trash"></i>&nbsp;删除</button>
                            <button class="button button-primary button-pill button-small button-radius" @click.stop().prevent()="clickExpand_desc()"><i class="fa fa-save"></i>&nbsp;确定</button>
                            <button class="button button-inverse button-pill button-small button-radius" @click.stop().prevent()="clickExpand_desc()"><i class="fa fa-close"></i>&nbsp;关闭</button>
                          </div>
                        </div>
                        <i @click.stop="clickEditIcon($event)" slot="reference" class="fa fa-edit table-edit-icon"></i>
                      </el-popover>
                    </div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">负责人员：</div>
                    <div class="right">
                      <el-popover
                        placement="top"
                        width="160"
                        trigger="click"
                        v-model="visible_expand_responsible[scope.$index]">
                        <div class="popover-title">修改负责人员</div>
                        <div class="popover-content">
                          <el-select class="select" v-model="value_tableSelect" placeholder="请选择">
                            <el-option
                              v-for="item in options_tableSelect"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div class="flex">
                            <button class="button button-caution button-pill button-small button-radius" @click.stop().prevent()="clickExpand_responsible()"><i class="fa fa-trash"></i>&nbsp;删除</button>
                            <button class="button button-primary button-pill button-small button-radius" @click.stop().prevent()="clickExpand_responsible()"><i class="fa fa-save"></i>&nbsp;确定</button>
                            <button class="button button-inverse button-pill button-small button-radius" @click.stop().prevent()="clickExpand_responsible()"><i class="fa fa-close"></i>&nbsp;关闭</button>
                          </div>
                        </div>
                        <i @click.stop="clickEditIcon($event)" slot="reference" class="fa fa-edit table-edit-icon"></i>
                      </el-popover>
                    </div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">资产位置：</div>
                    <div class="right">
                      <el-popover
                        placement="top"
                        width="160"
                        trigger="click"
                        v-model="visible_expand_assets[scope.$index]">
                        <div class="popover-title">修改资产位置</div>
                        <div class="popover-content">
                          <el-select class="select" v-model="value_tableSelect" placeholder="请选择">
                            <el-option
                              v-for="item in options_tableSelect"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div style="text-align:center;margin-top: -8px;">
                            <span style="font-size:30px;color:#DDDDDD;">或</span>
                          </div>
                          <el-input class="" placeholder="添加单位新位置"></el-input>
                          <div class="flex">
                            <button class="button button-caution button-pill button-small button-radius" @click.stop().prevent()="clickExpand_assets()"><i class="fa fa-trash"></i>&nbsp;删除</button>
                            <button class="button button-primary button-pill button-small button-radius" @click.stop().prevent()="clickExpand_assets()"><i class="fa fa-save"></i>&nbsp;确定</button>
                           <button class="button button-inverse button-pill button-small button-radius" @click.stop().prevent()="clickExpand_assets()"><i class="fa fa-close"></i>&nbsp;关闭</button>
                          </div>
                        </div>
                        <i @click.stop="clickEditIcon($event)" slot="reference" class="fa fa-edit table-edit-icon"></i>
                      </el-popover>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="expand-box col-lg-6">
              <div class="">
                <h1 class="expand-title">环境信息</h1>
              </div>
              <div class="expand-content">
                <div class="content-box">
                  <div class="common-table-layout">
                    <div class="left">域名信息：</div>
                    <div class="right">-</div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">操作系统：</div>
                    <div class="right">MAC</div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">最早发现时间：</div>
                    <div class="right">
                      <span class="label label-info">2018-03-11 20:23:22</span>
                    </div>
                  </div>
                  <div class="common-table-layout">
                    <div class="left">最新发现时间：</div>
                    <div class="right">
                      <span class="label label-info">2018-03-11 20:23:22</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="expand-box col-lg-12">
              <h1 class="expand-title">应用概要</h1>
              <div class="expand-content">
                <div class="content-box col-lg-4">
                  <h4 class="table-title">端口信息</h4>
                  <div class="common-table-layout table-head">
                    <div class="left">端口：</div>
                    <div class="right">服务描述</div>
                  </div>
                  <div class="no-data flex">
                    <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无数据
                  </div>

                </div>
                <div class="content-box col-lg-4">
                  <h4 class="table-title">应用信息</h4>
                  <div class="common-table-layout table-head">
                    <div class="left">服务描述</div>
                    <div class="right">版本</div>
                  </div>
                  <div class="no-data flex">
                    <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无数据
                  </div>
                </div>
                <div class="content-box col-lg-4">
                  <h4 class="table-title">关联信息</h4>
                  <div class="common-table-layout table-head">
                    <div class="left">关联IP：</div>
                    <div class="right">次数</div>
                  </div>
                  <div class="common-table-layout table-head table-body">
                    <div class="left">
                      <el-tooltip class="item" effect="dark" content="右键菜单" placement="bottom">
                        <span  @contextmenu.prevent="$refs.ctxMenu.open" class="show-context-menu">27.151.221.78</span>
                      </el-tooltip>
                      <context-menu id="context-menu" ref="ctxMenu">
                        <div class="context-menu">
                          <ul>
                            <li :class="[contextMenuIndex.indexOf('1') !== -1? 'context-menu-active': '']"><i class="fa fa-search"></i>查询</li>
                            <li :class="[contextMenuIndex.indexOf('2') !==  -1? 'context-menu-active': '']"><i class="fa fa-laptop"></i>资产关联</li>
                            <li :class="[contextMenuIndex.indexOf('3') !==  -1? 'context-menu-active': '']"><i class="fa fa-area-chart"></i>事件关联</li>
                            <li :class="[contextMenuIndex.indexOf('4') !==  -1? 'context-menu-active': '']"><i class="fa fa-globe"></i>威胁情报</li>
                            <li :class="[contextMenuIndex.indexOf('5') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-secret"></i>加入黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('6') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-times"></i>移除黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('7') !==  -1? 'context-menu-active': '']"><i class="fa fa-wrench"></i>工具集 <i class="fa fa-caret-right"></i></li>
                          </ul>
                        </div>
                      </context-menu>
                    </div>
                    <div class="right">45</div>
                  </div>
                  <div class="common-table-layout table-head table-body">
                    <div class="left">
                      <el-tooltip class="item" effect="dark" content="右键菜单" placement="bottom">
                        <span  @contextmenu.prevent="$refs.ctxMenu.open" class="show-context-menu">27.151.221.78</span>
                      </el-tooltip>
                      <context-menu id="context-menu2" ref="ctxMenu">
                        <div class="context-menu">
                          <ul>
                            <li :class="[contextMenuIndex.indexOf('1') !== -1? 'context-menu-active': '']"><i class="fa fa-search"></i>查询</li>
                            <li :class="[contextMenuIndex.indexOf('2') !==  -1? 'context-menu-active': '']"><i class="fa fa-laptop"></i>资产关联</li>
                            <li :class="[contextMenuIndex.indexOf('3') !==  -1? 'context-menu-active': '']"><i class="fa fa-area-chart"></i>事件关联</li>
                            <li :class="[contextMenuIndex.indexOf('4') !==  -1? 'context-menu-active': '']"><i class="fa fa-globe"></i>威胁情报</li>
                            <li :class="[contextMenuIndex.indexOf('5') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-secret"></i>加入黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('6') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-times"></i>移除黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('7') !==  -1? 'context-menu-active': '']"><i class="fa fa-wrench"></i>工具集 <i class="fa fa-caret-right"></i></li>
                          </ul>
                        </div>
                      </context-menu>
                    </div>
                    <div class="right">45</div>
                  </div>
                  <div class="common-table-layout table-head table-body">
                    <div class="left">
                      <el-tooltip class="item" effect="dark" content="右键菜单" placement="bottom">
                        <span  @contextmenu.prevent="$refs.ctxMenu.open" class="show-context-menu">27.151.221.78</span>
                      </el-tooltip>
                      <context-menu id="context-menu3" ref="ctxMenu">
                        <div class="context-menu">
                          <ul>
                            <li :class="[contextMenuIndex.indexOf('1') !== -1? 'context-menu-active': '']"><i class="fa fa-search"></i>查询</li>
                            <li :class="[contextMenuIndex.indexOf('2') !==  -1? 'context-menu-active': '']"><i class="fa fa-laptop"></i>资产关联</li>
                            <li :class="[contextMenuIndex.indexOf('3') !==  -1? 'context-menu-active': '']"><i class="fa fa-area-chart"></i>事件关联</li>
                            <li :class="[contextMenuIndex.indexOf('4') !==  -1? 'context-menu-active': '']"><i class="fa fa-globe"></i>威胁情报</li>
                            <li :class="[contextMenuIndex.indexOf('5') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-secret"></i>加入黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('6') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-times"></i>移除黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('7') !==  -1? 'context-menu-active': '']"><i class="fa fa-wrench"></i>工具集 <i class="fa fa-caret-right"></i></li>
                          </ul>
                        </div>
                      </context-menu>
                    </div>
                    <div class="right">45</div>
                  </div>
                  <div class="common-table-layout table-head table-body">
                    <div class="left">
                      <el-tooltip class="item" effect="dark" content="右键菜单" placement="bottom">
                        <span  @contextmenu.prevent="$refs.ctxMenu.open" class="show-context-menu">27.151.221.78</span>
                      </el-tooltip>
                      <context-menu id="context-menu4" ref="ctxMenu">
                        <div class="context-menu">
                          <ul>
                            <li :class="[contextMenuIndex.indexOf('1') !== -1? 'context-menu-active': '']"><i class="fa fa-search"></i>查询</li>
                            <li :class="[contextMenuIndex.indexOf('2') !==  -1? 'context-menu-active': '']"><i class="fa fa-laptop"></i>资产关联</li>
                            <li :class="[contextMenuIndex.indexOf('3') !==  -1? 'context-menu-active': '']"><i class="fa fa-area-chart"></i>事件关联</li>
                            <li :class="[contextMenuIndex.indexOf('4') !==  -1? 'context-menu-active': '']"><i class="fa fa-globe"></i>威胁情报</li>
                            <li :class="[contextMenuIndex.indexOf('5') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-secret"></i>加入黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('6') !==  -1? 'context-menu-active': '']"><i class="fa fa-user-times"></i>移除黑IP/黑域名</li>
                            <li :class="[contextMenuIndex.indexOf('7') !==  -1? 'context-menu-active': '']"><i class="fa fa-wrench"></i>工具集 <i class="fa fa-caret-right"></i></li>
                          </ul>
                        </div>
                      </context-menu>
                    </div>
                    <div class="right">45</div>
                  </div>
                  <!--   <div class="no-data flex">
                       <img src="@/assets/img/tan.png" alt="">&nbsp;&nbsp;暂无数据
                     </div>-->
                </div>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="IP地址"
        prop="IP">
      </el-table-column>
      <el-table-column
        label="使用者"
        prop="user">
        <template slot-scope="scope">
          <div>
            {{scope.row.user}}
          </div>
          <el-popover
            placement="top"
            width="160"
            trigger="click"
            v-model="visible_assetsEditTable_user[scope.$index]">
            <div class="popover-title">修改机器名</div>
            <div class="popover-content">
              <el-input class=""></el-input>
              <div class="flex">
                <button class="button button-caution button-pill button-small button-radius" @click.stop().prevent()="clickAssetsEditTable_user()"><i class="fa fa-trash"></i>&nbsp;删除</button>
                <button class="button button-primary button-pill button-small button-radius" @click.stop().prevent()="clickAssetsEditTable_user()"><i class="fa fa-save"></i>&nbsp;确定</button>
                <button class="button button-inverse button-pill button-small button-radius" @click.stop().prevent()="clickAssetsEditTable_user()"><i class="fa fa-close"></i>&nbsp;关闭</button>
              </div>
            </div>
              <i @click.stop="clickEditIcon($event)" v-if="scope.row.user === ''" slot="reference" class="fa fa-edit table-edit-icon"></i>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="域名"
        prop="domain">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
        <template slot-scope="scope">
          <el-popover
            placement="top"
            width="160"
            trigger="click"
            v-model="visible_assetsEditTable_desc[scope.$index]">
            <div class="popover-title">修改描述</div>
            <div class="popover-content">
              <el-input class=""></el-input>
              <div class="flex">
                <button class="button button-caution button-pill button-small button-radius" @click.stop().prevent()="clickAssetsEditTable_desc()"><i class="fa fa-trash"></i>&nbsp;删除</button>
                <button class="button button-primary button-pill button-small button-radius" @click.stop().prevent()="clickAssetsEditTable_desc()"><i class="fa fa-save"></i>&nbsp;确定</button>
                <button class="button button-inverse button-pill button-small button-radius" @click.stop().prevent()="clickAssetsEditTable_desc()"><i class="fa fa-close"></i>&nbsp;关闭</button>
              </div>
            </div>
            <i @click.stop="clickEditIcon($event)" slot="reference" class="fa fa-edit table-edit-icon"></i>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="MAC地址">
        <template slot-scope="scope">
          <div>{{scope.row.MAC.first}}</div>
          <div>{{scope.row.MAC.second}}</div>
        </template>
      </el-table-column>
      <el-table-column
        label="操作系统"
        prop="system">
      </el-table-column>
      <el-table-column
        label="应用服务"
        prop="service">
      </el-table-column>
      <el-table-column
        label="最新发现时间">
        <template slot-scope="scope">
          <div>{{scope.row.latestTime.first}}</div>
          <div>{{scope.row.latestTime.second}}</div>
          <div>{{scope.row.latestTime.third}}</div>
        </template>
      </el-table-column>
      <el-table-column
        label="单位/部门/负责人"
        prop="unit">
        <template slot-scope="scope">
          <div class="common-table-layout">
            <span class="left">单位:</span>
            <span class="right table-edit-icon"><i class="fa fa-edit"></i></span>
          </div>
          <div class="common-table-layout">
            <span class="left">部门:</span>
            <span class="right table-edit-icon"><i class="fa fa-edit"></i></span>
          </div>
          <div class="common-table-layout">
            <span class="left">负责人:</span>
            <span class="right table-edit-icon"><i class="fa fa-edit"></i></span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import contextMenu from 'vue-context-menu';
  export default {
    name: "assets",
    components: {
      'context-menu': contextMenu
    },
    data () {
      return{
        visibleContextMenu: false,
        contextMenuIndex: ['1','3'],
        expands: [],
        visible_assetsEditTable_user: [],
        visible_assetsEditTable_desc: [],
        visible_expand_user: [],
        visible_expand_unit: [],
        visible_expand_desc: [],
        visible_expand_responsible: [],
        visible_expand_assets: [],
        inputVal_tableSearch: '',
        options_tableSelect: [
          {
          value: '选项1',
          label: 'IP地址'
        }, {
          value: '选项2',
          label: 'MAC地址'
        }, {
          value: '选项3',
          label: '描述'
        }, {
          value: '选项4',
          label: '应用'
        }, {
          value: '选项5',
          label: '端口'
        }],
        value_tableSelect: 'IP地址',
        assetsTableData: [
          {
          id: 0,
          IP: '192.221.0.1',
          user: 'admin',
          domain: 'www.baidu.com',
          desc: '',
          MAC: {
            first: '10:51:72:54:ca:a4',
            second: 'HUAWEI TECHNOLOGIES CO.,LTD'
          },
          system: 'windows',
          service: '_',
          latestTime: {
            first: '2018-06-27 16:07:55',
            second: '星期三',
            third: '北京时间下午'
          },
          unit: {}
        },
          {
            id: 1,
            IP: '127.0.0.1',
            user: '',
            domain: 'www.baidu.com',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            MAC: {
              first: '10:51:72:54:ca:a4',
              second: 'HUAWEI TECHNOLOGIES CO.,LTD'
            },
            system: 'windows',
            service: '_',
            latestTime: {
              first: '2018-06-27 16:07:55',
              second: '星期三',
              third: '北京时间下午'
            },
            unit: {}
          },
          {
            id: 2,
            IP: '127.0.0.1',
            user: '',
            domain: 'www.baidu.com',
            desc: '',
            MAC: {
              first: '10:51:72:54:ca:a4',
              second: 'HUAWEI TECHNOLOGIES CO.,LTD'
            },
            system: 'windows',
            service: '_',
            latestTime: {
              first: '2018-06-27 16:07:55',
              second: '星期三',
              third: '北京时间下午'
            },
            unit: {}
          },
          {
            id: 3,
            IP: '127.0.0.1',
            user: 'admin',
            domain: 'www.baidu.com',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            MAC: {
              first: '10:51:72:54:ca:a4',
              second: 'HUAWEI TECHNOLOGIES CO.,LTD'
            },
            system: 'windows',
            service: '_',
            latestTime: {
              first: '2018-06-27 16:07:55',
              second: '星期三',
              third: '北京时间下午'
            },
            unit: {}
          }
        ]
      }
    },
    created () {
    },
    computed:{
      /** 模糊搜索 **/
      assetsTableDataWatch(){
        let inputVal_tableSearch=this.inputVal_tableSearch;
        if(inputVal_tableSearch){
          return  this.assetsTableData.filter(function(val){
            return Object.keys(val).some(function(key){
              return String(val[key]).toLowerCase().indexOf(inputVal_tableSearch) > -1
            })
          })
        }
        return this.assetsTableData;
      }
    },
    methods: {
      /** 邮件菜单 **/
      doSomething () {

      },
      /** 展开行设置 **/
      rowClick(row, event, column) {
        Array.prototype.remove = function (val) {
          let index = this.indexOf(val);
          if (index > -1) {
            this.splice(index, 1);
          }
        };
        if (this.expands.indexOf(row.id) < 0) {
          this.expands.push(row.id);
        } else {
          this.expands.remove(row.id);
        }
      },
      clickAssetsEditTable_user () {
        this.visible_assetsEditTable_user = [];
      },
      clickAssetsEditTable_desc () {
        this.visible_assetsEditTable_desc = [];
      },
      /** 表格编辑设置 **/
      clickEditIcon () {
        console.log(this.visible_assetsEditTable_user);
        this.visible_assetsEditTable_user = [];
        this.visible_assetsEditTable_desc = [];
        this.visible_expand_user = [];
        this.visible_expand_unit = [];
        this.visible_expand_desc = [];
        this.visible_expand_responsible = [];
        this.visible_expand_assets = [];
      },
      clickExpand_user () {
        this.visible_expand_user = [];
      },
      clickExpand_unit () {
        this.visible_expand_unit = [];
      },
      clickExpand_desc () {
        this.visible_expand_desc = [];
      },
      clickExpand_responsible () {
        this.visible_expand_responsible = [];
      },
      clickExpand_assets () {
        this.visible_expand_assets = [];
      }
    }
  }
</script>

<style lang="scss" scoped>
.table-search{
  margin-bottom: 5px;
  .select{
    width: 105px;
  }
  .input{
    width: 194px;
  }
  .table-search-btn{
    .btn{
      float: left;
    }
    .btn:nth-child(1){
      border-radius: 0;
    }
    .btn:nth-child(2){
      border-radius: 0 4px 4px 0;
    }
  }
}
.table-expand-style{
  .common-table-layout{
    width: 100%;
    .left{
      width: 40%;
      text-align: right;
      padding: 0 10px 0 0;
    }
    .right{
      width: 60%;
      text-align: left;
    }
  }
  .table-edit-icon{
    cursor: pointer;
  }
}
</style>
