<template>
  <div>
    <Header></Header>
    <div class="contant">
      <div class="contant1">
        <div class="leftmemu">
          <el-menu
            @select='select'
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#0A2540"
            text-color="#fff"
            active-text-color="#00D4FF">
            <el-menu-item index="gene-0">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{ $t('lang.bie')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Alias</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-1">
              <div slot="title" style="line-height:56px!important">
                KEGG
              </div>
            </el-menu-item>
            <el-menu-item index="gene-2">
              <div slot="title" style="line-height:56px!important">GO</div>
            </el-menu-item>
            <el-menu-item index="gene-3">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.biao')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Gene expression</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-4">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.chayi')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Differential expression</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-5">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.xiangguang')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Correlation</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-8">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.shiyan')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Exprimental ceRNA</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-9">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.yuce')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">predict ceRNA</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-10">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.danbai')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Protein-protein</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-11">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.mianyi')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Gene immune</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-12">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.danhe')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">SNV</p>
              </div>
            </el-menu-item>
            <el-menu-item index="gene-13">
              <div slot="title">
                <p style="font-size:16px;margin-top:10px" :style="{'line-height':($i18n.locale=='zh'?'20px':'56px'),'margin-top':($i18n.locale=='zh'?'10px':'0px')}">{{$t('lang.shengcun')}}</p>
                <p v-if="$i18n.locale=='zh'" style="font-size:12px;color:#74839A">Survival</p>
              </div>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="rightinfo">
          <div class="baibg" style="margin-top:20px;">
            <div class="radio">
              <div :class="{ 'active': isActive }" :style="{width:($i18n.locale=='zh'?'111px':'200px')}" @click="radioChange">{{$t('lang.dan')}}</div>
              <div :class="{ 'active': !isActive }" :style="{width:($i18n.locale=='zh'?'111px':'200px')}" @click="radioChange">{{$t('lang.duo')}}</div>
            </div>
            <div class="radioIcon" v-if="isActive">
              <p>Enter gene name:</p>
              <p>The indicators in search box are "symbol" or "alias (newest symbol)".</p>
              <div>
                <div class="gene">
                  <el-select class="zhongliu" v-model="danlist" :multiple="!isActive" :placeholder="$i18n.locale=='zh'?'请选择肿瘤类型':'Please select tumor type'">
                    <el-option
                      v-for="item in iconList1"
                      :key="item.cancerNameEn"
                      :label="item.cancerNameEn"
                      :value="item.cancerNameEn">
                    </el-option>
                  </el-select>
                  <div class="genebut">AND</div>
                </div>
                <div class="gene">
                  <el-input class="zhongliu" v-model="searchContent" placeholder="e.g.PD-1"></el-input>
                  <div class="genebut">GoGet！</div>
                </div>
              </div>
            </div>
            <div class="radioIcon" v-if="!isActive">
              <p>Enter gene name:</p>
              <p>The indicators in search box are "symbol" or "alias (newest symbol)".</p>
              <div>
                <div class="gene">
                  <el-select class="zhongliu" v-model="duolist" multiple :placeholder="$i18n.locale=='zh'?'请选择肿瘤类型':'Please select tumor type'">
                    <el-option
                      v-for="item in iconList1"
                      :key="item.cancerNameEn"
                      :label="item.cancerNameEn"
                      :value="item.cancerNameEn">
                    </el-option>
                  </el-select>
                  <div class="genebut">AND</div>
                </div>
                <div class="gene">
                  <el-input class="zhongliu" v-model="searchContent" placeholder="e.g.PD-1"></el-input>
                  <div class="genebut">GoGet！</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baibg">
            <div class="genename">
              <div class="jieshao">
                <p style="font-size:30px;font-weight: 600;margin-top:3px">{{genesDetails.name}}<span v-if="genesDetails.geneType!=null">({{genesDetails.geneType}})</span></p>
                <p>{{genesDetails.desc}}</p>
                <p>{{genesDetails.summary}}</p>
                <p><span v-for="(item,i) of data1" :key="i"><span class="database">{{item.database}}：</span><span @click="toGenenames(item.url)" class="dataname">{{item.name}}</span><span class="xiegang" v-if="i!=data1.length-1"> / </span></span></p>
              </div>
              <div></div>
            </div>
          </div>
          
          <div class="content">
            
            <el-collapse v-model="activeNames"  @change="handleChange">
              <el-collapse-item :title="$t('lang.bie')" id="gene-0" name="1">
                <div class="bieming">
                  <div class="bieming1">
                    <div>
                      <p v-for="(item,i) of data2" :key="i">
                        {{item.name}}
                        <sup @click="toNcbi(item1[1])" style="cursor: pointer;" :title="item1[0]" v-for="(item1,i) of item.detailJson" :key="i">{{i+1}}</sup>
                      </p>
                    </div>
                    <div>
                      <p v-for="(item,i) of data3" :key="i">
                        {{item.name}}
                        <sup @click="toNcbi(item1[1])" style="cursor: pointer;" :title="item1[0]" v-for="(item1,i) of item.detailJson" :key="i">{{i+1}}</sup>
                      </p>
                    </div>
                    <div style="text-align: right">
                      <img style="width:100%;height:200px" :src="imgsrc4" alt="">
                      <div><img style="width:100%;height:40px" :src="imgsrc5" alt=""></div>
                    </div>
                  </div>
                  
                </div>
              </el-collapse-item>
              <el-collapse-item title="KEGG" id="gene-1" name="2">
                <div class="kegg">
                  <el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick" >
                    <el-tab-pane :label="$t('lang.pa')" :title="$t('lang.pa')" name="kegg" >
                      <el-table v-if="gene2KeggMapList!=undefined" height="200" :data="gene2KeggMapList.filter(data => !search1 || data.info.toLowerCase().includes(search1.toLowerCase()))"  border style="width: 100%">
                        <el-table-column  label="PathwayId" width="100">
                          <template slot-scope="scope">
                            <span @click="handleGoods(scope.row)" class="pathway" style="margin:0;cursor: pointer;">{{scope.row.pathwayid}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column prop="oneType" label="Type" width="200">
                        </el-table-column>
                        <el-table-column label="subType" prop="twoType" width="200">
                        </el-table-column>
                        <el-table-column prop="info">
                          <template slot="header" slot-scope="scope">
                            <div class="info">
                              <p>PathwayDesc</p><el-input v-model="search1" size="mini" placeholder="输入关键字搜索"/>
                            </div>
                          </template>
                        </el-table-column>
                      </el-table>
                      <div v-else>
                        <div style="width:500px;height:200px;text-align: center">
                          <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane :disabled="gene2KeggMapList==undefined" :label="$t('lang.reg')" class="tiaokong" name="kegg1" style="height:500px;">
                      <div class="tcga" v-loading="loading5"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="undata4!=undefined" class="xuezhe">
                          <div id="xue1" :style="{width: '500px', height: '500px'}"></div>
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div v-if="undata4!=undefined" class="guanxi" >
                          <table v-if="kegg2RelationTwo1.length>0" style="width:100%;  border:1px solid #dcdcdc">
                            <tr>
                              <td>Name1</td>
                              <td>Name2</td>
                              <td>Type</td>
                              <td>PathwayID</td>
                            </tr>
                            <tr v-for="(item,i) of kegg2RelationTwo1[0]" :key="i" @click="RoadVisualInfo(item.name1.split(':')[0],item.name2.split(':')[0],item.pathwayID)">
                              <td>{{item.name1.split(':')[1]}}</td>
                              <td>{{item.name2.split(':')[1]}}</td>
                              <td>{{item.type}}</td>
                              <td>{{item.pathwayID}}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane :disabled="gene2KeggMapList==undefined" :label="$t('lang.er')" name="kegg3">
                      <div class="tcga" v-loading="loading11"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(undata5)!='{}'" class="tonglu1">
                          <div id="tong11" :style="{width: '500px', height: '500px'}"></div>
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight">
                          <p class="xishu">{{$t('lang.dat')}}</p>
                          <el-select v-model="pathway2" filterable placeholder="请选择">
                            <el-option
                              v-for="item in pathwayvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">{{$t('lang.cm')}}：</p>
                          <el-select v-model="func" placeholder="请选择">
                            <el-option
                              v-for="item in funcvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu"><span>{{$t('lang.rvc')}}：</span><input type="number" class="innp" step="0.1" min="0" v-model="input5"></p>
                          <p class="xishu"><span>{{$t('lang.pvc')}}：</span><input type="number" class="innp" step="0.01" min="0" v-model="input6"></p>
                          <p class="xishu">
                            <el-button  type="primary" @click="Undate5()" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane :disabled="gene2KeggMapList==undefined" :label="$t('lang.epc')"  name="kegg2">
                      <div class="tcga" v-loading="loading3"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(undata2)!='{}'" class="tonglu">
                          <div id="tong1" :style="{width: '500px', height: '500px'}"></div>
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight">
                          <p class="xishu">{{$t('lang.dat')}}</p>
                          <el-select v-model="pathway" filterable multiple placeholder="请选择">
                            <el-option
                              v-for="item in pathwayvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">相关系数方法：</p>
                          <el-select v-model="func" placeholder="请选择">
                            <el-option
                              v-for="item in funcvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu"><span>{{$t('lang.rvc')}}：</span><input type="number" class="innp" step="0.1" min="0" v-model="input5"></p>
                          <p class="xishu"><span>{{$t('lang.pvc')}}：</span><input type="number" class="innp" step="0.01" min="0" v-model="input6"></p>
                          <p class="xishu">
                            <el-button  type="primary" @click="Undate2()" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-collapse-item>
              <el-collapse-item title="GO" id='gene-2' name="3">
                <div class="kegg">
                  <el-tabs :tab-position="tabPosition" @tab-click="handleClick2">
                    <el-tab-pane :label="$t('lang.fa')">
                      <el-table v-if="gene2GoList!=undefined" height="200px" :data="gene2GoList.filter(data => !search2 || data.name.toLowerCase().includes(search2.toLowerCase()))"  border style="width: 100%;height:200px">
                        <el-table-column prop="GOID" label="GOID" width="120">
                        </el-table-column>
                        <el-table-column label="NameSpace" prop="namespace" width="150">
                        </el-table-column>
                        <el-table-column prop="name">
                          <template slot="header" slot-scope="scope">
                            <div class="info">
                              <p>Name</p><el-input v-model="search2" size="mini" placeholder="输入关键字搜索"/>
                            </div>
                          </template>
                        </el-table-column>
                        <el-table-column prop="refDatabase" label="RrefDataBase" width="150">
                          <template slot-scope="scope">
                            <span @click="handleGoods1(scope.row)" class="pathway" style="margin:0;cursor: pointer;">{{scope.row.refDatabase}}</span>
                          </template>
                        </el-table-column>
                      </el-table>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('lang.BP')" name="gobp">
                      <div class="tcga" v-loading="loading4"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(undata3)!='{}'" class="biaodabp">
                          <div id="bp1" :style="{width: '500px', height: '500px'}"></div>
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <span id="b" style="display:none">BP</span>
                        <div class="generight">
                          <p class="xishu">{{$t('lang.dat')}}</p>
                          <el-select v-model="pathway1" filterable multiple placeholder="请选择">
                            <el-option
                              v-for="item in pathwayvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">相关系数方法：</p>
                          <el-select v-model="func1" placeholder="请选择">
                            <el-option
                              v-for="item in funcvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu"><span>{{$t('lang.rvc')}}：</span><input type="number" class="innp" step="0.1" min="0" v-model="input7"></p>
                          <p class="xishu"><span>{{$t('lang.pvc')}}：</span><input type="number" class="innp" step="0.01" min="0" v-model="input8"></p>
                          <p class="xishu">
                            <el-button  type="primary" @click="Undate3()" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('lang.CC')" name="gocc">
                      <div class="tcga" v-loading="loading4"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(undata3)!='{}'" class="biaodabp2">
                          <div id="bp2" :style="{width: '500px', height: '500px'}"></div>
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <span id="b" style="display:none">CC</span>
                        <div class="generight">
                          <p class="xishu">{{$t('lang.dat')}}</p>
                          <el-select v-model="pathway1" filterable multiple placeholder="请选择">
                            <el-option
                              v-for="item in pathwayvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">相关系数方法：</p>
                          <el-select v-model="func1" placeholder="请选择">
                            <el-option
                              v-for="item in funcvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu"><span>{{$t('lang.rvc')}}：</span><input type="number" class="innp" step="0.1" min="0" v-model="input7"></p>
                          <p class="xishu"><span>{{$t('lang.pvc')}}：</span><input type="number" class="innp" step="0.01" min="0" v-model="input8"></p>
                          <p class="xishu">
                            <el-button  type="primary" @click="Undate3()" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('lang.MF')" name="gomf">
                      <div class="tcga" v-loading="loading4"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(undata3)!='{}'" class="biaodabp3">
                          <div id="bp3" :style="{width: '500px', height: '500px'}"></div>
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <span id="b" style="display:none">MF</span>
                        <div class="generight">
                          <p class="xishu">{{$t('lang.dat')}}</p>
                          <el-select v-model="pathway1" filterable multiple placeholder="请选择">
                            <el-option
                              v-for="item in pathwayvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">相关系数方法：</p>
                          <el-select v-model="func1" placeholder="请选择">
                            <el-option
                              v-for="item in funcvalue"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu"><span>{{$t('lang.rvc')}}：</span><input type="number" class="innp" step="0.1" min="0" v-model="input7"></p>
                          <p class="xishu"><span>{{$t('lang.pvc')}}：</span><input type="number" class="innp" step="0.01" min="0" v-model="input8"></p>
                          <p class="xishu">
                            <el-button  type="primary" @click="Undate3()" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('lang.biao')" id="gene-3" name="4">
                <div class="kegg">
                  <el-tabs :tab-position="tabPosition" @tab-click="handleClick3">
                    <el-tab-pane label="TCGA" style="height:360px;">
                      <div class="tcga" v-loading="loading1"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;height:250px;">
                          <img :src="imgsrc" style="width:500px;height:250px" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight">
                          <span id="a" style="display:none">F</span>
                          <div class="jianyan">
                            <span>{{$t('lang.tm')}}：</span>
                            <el-radio-group v-model="radio">
                              <el-radio label="T检验">{{$t('lang.tt')}}</el-radio>
                              <el-radio label="秩和检验">{{$t('lang.rst')}}</el-radio>
                            </el-radio-group>
                          </div>
                          <div class="edg">
                            <span>{{$t('lang.xla')}}：</span>
                            <el-select v-model="value" placeholder="请选择">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="tuli1">
                            <span>{{$t('lang.lp')}}：</span>
                            <el-select v-model="value1" placeholder="请选择">
                              <el-option
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="color1">
                            <span>{{$t('lang.yar')}}：</span>
                            <input type="number" class="inp" min="0" v-model="input1">-<input class="inp" type="number" min="0" v-model="input2">
                          </div>
                          <div class="color1">
                            <span>{{$t('lang.bw')}}：</span>
                            <input type="number" max="1" min="0" class="inp" step="0.1" v-model="input">
                          </div>
                          <div class="color2">
                            <div style="width:120px">
                              <span>{{$t('lang.col')}}：</span>
                              <el-color-picker v-model="color"></el-color-picker>
                              <el-color-picker v-model="color1"></el-color-picker>
                            </div>
                            <p style="width:140px;text-align: right">
                              <el-button type="primary" @click="downloadtcga()" size="mini">{{$t('lang.dow')}}</el-button>
                              <el-button type="primary" @click="Undate()" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="CCLE">
                      <div class="tcga" v-loading="loading2"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(GT)!='{}'" style="width:500px;height:250px;">
                          <img :src="imgsrc2" style="width:500px;height:250px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight">
                          <div class="jianyan">
                            <span>{{$t('lang.tm')}}：</span>
                            <el-radio-group v-model="radio2">
                              <el-radio label="T">{{$t('lang.anova')}}</el-radio>
                              <el-radio label="F">Kruskal-Wallis</el-radio>
                            </el-radio-group>
                          </div>
                          <div class="jianyan">
                            <span>{{$t('lang.scattes')}}：</span>
                            <el-radio-group v-model="radio1">
                              <el-radio label="T">显示</el-radio>
                              <el-radio label="F">不显示</el-radio>
                            </el-radio-group>
                          </div>
                          <div class="edg">
                            <span>{{$t('lang.xla')}}：</span>
                            <el-select v-model="edg" placeholder="请选择">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="color1">
                            <span>{{$t('lang.yar')}}：</span>
                            <input type="number" class="inp" min="0" v-model="input3">-<input class="inp" type="number" min="0" v-model="input4">
                          </div>
                          <p style="width:180px;margin-top:20px;">
                            <el-button type="primary" @click="downloadgtex('CCLE')" :disabled="imgsrc2==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="Undate1('CCLE')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="GTEx">
                      <div class="tcga" v-loading="loading2"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(GT)!='{}'" style="width:500px;height:250px;">
                          <img :src="imgsrc2" style="width:500px;height:250px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight">
                          <div class="jianyan">
                            <span>{{$t('lang.tm')}}：</span>
                            <el-radio-group v-model="radio2">
                              <el-radio label="T">{{$t('lang.anova')}}</el-radio>
                              <el-radio label="F">Kruskal-Wallis</el-radio>
                            </el-radio-group>
                          </div>
                          <div class="jianyan">
                            <span>{{$t('lang.scattes')}}：</span>
                            <el-radio-group v-model="radio1">
                              <el-radio label="T">显示</el-radio>
                              <el-radio label="F">不显示</el-radio>
                            </el-radio-group>
                          </div>
                          <div class="edg">
                            <span>{{$t('lang.xla')}}：</span>
                            <el-select v-model="edg" placeholder="请选择">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="color1">
                            <span>{{$t('lang.yar')}}：</span>
                            <input type="number" class="inp" min="0" v-model="input3">-<input class="inp" type="number" min="0" v-model="input4">
                          </div>
                          <p style="width:180px;margin-top:20px;">
                            <el-button type="primary" @click="downloadgtex('GTEx')" :disabled="imgsrc2==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="Undate1('GTEx')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="TCGA+GTEx" style="height:360px;">
                      <div class="tcga" v-loading="loading1"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;height:250px;">
                          <img :src="imgsrc" style="width:500px;height:250px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <span id="a" style="display:none">F</span>
                        <div class="generight">
                          <div class="jianyan">
                            <span>{{$t('lang.tm')}}：</span>
                            <el-radio-group v-model="radio">
                              <el-radio label="T检验">{{$t('lang.tt')}}</el-radio>
                              <el-radio label="秩和检验">{{$t('lang.rst')}}</el-radio>
                            </el-radio-group>
                          </div>
                          <div class="edg">
                            <span>{{$t('lang.xla')}}：</span>
                            <el-select v-model="value" placeholder="请选择">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="tuli1">
                            <span>{{$t('lang.lp')}}：</span>
                            <el-select v-model="value1" placeholder="请选择">
                              <el-option
                                v-for="item in options1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="color1">
                            <span>{{$t('lang.yar')}}：</span>
                            <input type="number" class="inp" min="0" v-model="input1">-<input class="inp" type="number" min="0" v-model="input2">
                          </div>
                          <div class="color1">
                            <span>{{$t('lang.bw')}}：</span>
                            <input type="number" max="1" min="0" class="inp" step="0.1" v-model="input">
                          </div>
                          <div class="color2">
                            <div style="width:120px">
                              <span>{{$t('lang.col')}}：</span>
                              <el-color-picker v-model="color"></el-color-picker>
                              <el-color-picker v-model="color1"></el-color-picker>
                            </div>
                            <p style="width:140px;text-align: right">
                              <el-button type="primary" @click="downloadtcgt()" size="mini">{{$t('lang.dow')}}</el-button>
                              <el-button type="primary" @click="Undate()" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <!-- <el-tab-pane label="DownLoad">
                      <div class="download1">
                        <div>
                          <p>下载基因在泛癌中的表达水平：</p>
                          <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="输入为：一行一个基因"
                            v-model="fanai">
                          </el-input>
                        </div>
                        <div>
                          <p>数据类型：</p>
                          <el-radio-group v-model="shujuleixing">
                            <el-radio label="TCGA"></el-radio>
                            <el-radio label="GTEx"></el-radio>
                            <el-radio label="CCLE"></el-radio>
                          </el-radio-group>
                          <div style="margin-top:60px">
                            <el-button type="primary" :disabled="this.fanai==''" @click="fanaidownload()" size="mini">{{$t('lang.dow')}}</el-button>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="相关性分析">
                      <div v-loading="loading1"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view" class="xiangguanxing">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrcxiangguan" style="width:500px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div>
                          <p >请输入基因集：</p>
                          <el-input style="margin-top:10px" type="textarea" :rows="2" placeholder="请输入一行一个基因" v-model="geneji">
                          </el-input>
                          <p class="xishu">肿瘤类型：</p>
                          <el-select v-model="zhongliuleixing" clearable multiple collapse-tags placeholder="请选择">
                            <el-option
                              v-for="item in bianmas"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">方法：</p>
                          <el-select v-model="func" placeholder="请选择">
                            <el-option
                              v-for="item in funcs"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div class="yansezhi" style="margin-top:10px">
                            <div>
                              <div>
                                <p style="margin-right:7px">最小值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minp">
                              </div>
                              <div>
                                <p style="margin-right:7px">中间值：</p>
                                <input type="number" class="innp1"  min="-1" max="1" step="0.1" v-model="middlep">
                              </div>
                              <div>
                                <p style="margin-right:7px">最大值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="maxp">
                              </div>
                              <div>
                                <p>最小p值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minpp">
                              </div>
                            </div>
                            <div>
                              <div class="color21">
                                <p style="margin-right:7px">最小值颜色：</p>
                                <el-color-picker v-model="mincolor"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">中间值颜色：</p>
                                <el-color-picker v-model="middlecolor"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">最大值颜色：</p>
                                <el-color-picker v-model="maxcolor"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p>最小p值颜色：</p>
                                <el-color-picker v-model="minpcolor"></el-color-picker>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="xiangguanwidth"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="xiangguanheight"></p>
                          </div>
                          <div class="yanse111">
                            <p style="margin-top:10px;">
                              <el-button type="primary" @click="downloadXG('pdf')" :disabled="imgsrc11==''" size="mini">{{$t('lang.doi')}}</el-button>
                              <el-button type="primary" @click="downloadXG('txt')" :disabled="imgsrc11==''" size="mini">{{$t('lang.dot')}}</el-button>
                              <el-button type="primary" @click="XGUpdate()" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane> -->
                  </el-tabs>
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('lang.mianyi')" id="gene-11" name="12">
                <div class="kegg" :id="'gene-'+10">
                  <el-tabs :tab-position="tabPosition" @tab-click="handleClick10">
                    <el-tab-pane label="MSI">
                      <div class="tcga" v-loading="loading10"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc10" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianmaMSI" clearable style="width:100%" multiple collapse-tags placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="jianyan">
                            <p class="xishu">相关性方法：</p>
                            <el-select v-model="func11"  placeholder="请选择">
                              <el-option
                                v-for="item in funcs"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="color211"><p>{{$t('lang.col')}}：</p><el-color-picker v-model="msicolor"></el-color-picker></div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="MSIwidth"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="MSIheight"></p>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadMSI('MSI','pdf')" :disabled="imgsrc11==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="downloadMSI('MSI','txt')" :disabled="imgsrc11==''" size="mini">{{$t('lang.dot')}}</el-button>
                            <el-button type="primary" @click="MSIUpdate('MSI')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="新抗原">
                      <div class="tcga" v-loading="loading10"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc10" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianmaMSI" clearable style="width:100%" multiple collapse-tags placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="jianyan">
                            <p class="xishu">相关性方法：</p>
                            <el-select v-model="func11"  placeholder="请选择">
                              <el-option
                                v-for="item in funcs"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="color211"><p>{{$t('lang.col')}}：</p><el-color-picker v-model="msicolor"></el-color-picker></div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="MSIwidth"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="MSIheight"></p>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadMSI('Neoantigen','pdf')" :disabled="imgsrc11==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="downloadMSI('Neoantigen','txt')" :disabled="imgsrc11==''" size="mini">{{$t('lang.dot')}}</el-button>
                            <el-button type="primary" @click="MSIUpdate('Neoantigen')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="TMB">
                      <div class="tcga" v-loading="loading10"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc10" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianmaMSI" clearable style="width:100%" multiple collapse-tags placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="jianyan">
                            <p class="xishu">相关性方法：</p>
                            <el-select v-model="func11"  placeholder="请选择">
                              <el-option
                                v-for="item in funcs"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="color211"><p>{{$t('lang.col')}}：</p><el-color-picker v-model="msicolor"></el-color-picker></div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="MSIwidth"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="MSIheight"></p>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadMSI('TMB','pdf')" :disabled="imgsrc11==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="downloadMSI('TMB','txt')" :disabled="imgsrc11==''" size="mini">{{$t('lang.dot')}}</el-button>
                            <el-button type="primary" @click="MSIUpdate('TMB')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="免疫检查点">
                      <div v-loading="loading10"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view" class="xiangguanxing">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc10" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div>
                          <p class="xishu">肿瘤类型：</p>
                          <el-select v-model="zhongliuleixing10" clearable multiple collapse-tags placeholder="请选择">
                            <el-option
                              v-for="item in bianmas"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">方法：</p>
                          <el-select v-model="func10"  placeholder="请选择">
                            <el-option
                              v-for="item in funcs"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div class="fazhi">
                            <p>{{$t('lang.pvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.01" v-model="p10"></p>
                            <p>{{$t('lang.rvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="r10"></p>
                          </div>
                          <div class="yansezhi" style="margin-top:10px">
                            <div>
                              <div>
                                <p style="margin-right:7px">最小值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minp10">
                              </div>
                              <div>
                                <p style="margin-right:7px">中间值：</p>
                                <input type="number" class="innp1"  min="-1" max="1" step="0.1" v-model="middlep10">
                              </div>
                              <div>
                                <p style="margin-right:7px">最大值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="maxp10">
                              </div>
                              <div>
                                <p>最小p值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minpp10">
                              </div>
                            </div>
                            <div>
                              <div class="color21">
                                <p style="margin-right:7px">最小值颜色：</p>
                                <el-color-picker v-model="mincolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">中间值颜色：</p>
                                <el-color-picker v-model="middlecolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">最大值颜色：</p>
                                <el-color-picker v-model="maxcolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p>最小p值颜色：</p>
                                <el-color-picker v-model="minpcolor10"></el-color-picker>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="mianyiwidth10"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="mianyiheight10"></p>
                          </div>
                          <div class="yanse111">
                            <p style="margin-top:10px;">
                              <el-button type="primary" @click="downloadMY('checkpoints','pdf')" :disabled="imgsrc10==''" size="mini">{{$t('lang.doi')}}</el-button>
                              <el-button type="primary" @click="downloadMY('checkpoints','txt')" :disabled="imgsrc10==''" size="mini">{{$t('lang.dot')}}</el-button>
                              <el-button type="primary" @click="MYUpdate('checkpoints')" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="免疫微环境">
                      <div v-loading="loading10"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view" class="xiangguanxing">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc10" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div>
                          <p class="xishu">肿瘤类型：</p>
                          <el-select v-model="zhongliuleixing10" clearable multiple collapse-tags placeholder="请选择">
                            <el-option
                              v-for="item in bianmas"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">方法：</p>
                          <el-select v-model="func10"  placeholder="请选择">
                            <el-option
                              v-for="item in funcs"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div class="fazhi">
                            <p>{{$t('lang.pvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.01" v-model="p10"></p>
                            <p>{{$t('lang.rvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="r10"></p>
                          </div>
                          <div class="yansezhi" style="margin-top:10px">
                            <div>
                              <div>
                                <p style="margin-right:7px">最小值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minp10">
                              </div>
                              <div>
                                <p style="margin-right:7px">中间值：</p>
                                <input type="number" class="innp1"  min="-1" max="1" step="0.1" v-model="middlep10">
                              </div>
                              <div>
                                <p style="margin-right:7px">最大值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="maxp10">
                              </div>
                              <div>
                                <p>最小p值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minpp10">
                              </div>
                            </div>
                            <div>
                              <div class="color21">
                                <p style="margin-right:7px">最小值颜色：</p>
                                <el-color-picker v-model="mincolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">中间值颜色：</p>
                                <el-color-picker v-model="middlecolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">最大值颜色：</p>
                                <el-color-picker v-model="maxcolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p>最小p值颜色：</p>
                                <el-color-picker v-model="minpcolor10"></el-color-picker>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="mianyiwidth10"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="mianyiheight10"></p>
                          </div>
                          <div class="yanse111">
                            <p style="margin-top:10px;">
                              <el-button type="primary" @click="downloadMY('ESTIMATE','pdf')" :disabled="imgsrc10==''" size="mini">{{$t('lang.doi')}}</el-button>
                              <el-button type="primary" @click="downloadMY('ESTIMATE','txt')" :disabled="imgsrc10==''" size="mini">{{$t('lang.dot')}}</el-button>
                              <el-button type="primary" @click="MYUpdate('ESTIMATE')" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="免疫细胞评分">
                      <div v-loading="loading10"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view" class="xiangguanxing">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc10" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div>
                          <p class="xishu">肿瘤类型：</p>
                          <el-select v-model="zhongliuleixing10" clearable multiple collapse-tags placeholder="请选择">
                            <el-option
                              v-for="item in bianmas"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">方法：</p>
                          <el-select v-model="func10"  placeholder="请选择">
                            <el-option
                              v-for="item in funcs"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <el-radio-group v-model="XBPF" style="margin-top:10px;">
                            <el-radio label="Timer">Timer</el-radio>
                            <el-radio label="MCPcounter">MCPcounter</el-radio>
                          </el-radio-group>
                          <div class="fazhi">
                            <p>{{$t('lang.pvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.01" v-model="p10"></p>
                            <p>{{$t('lang.rvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="r10"></p>
                          </div>
                          <div class="yansezhi" style="margin-top:10px">
                            <div>
                              <div>
                                <p style="margin-right:7px">最小值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minp10">
                              </div>
                              <div>
                                <p style="margin-right:7px">中间值：</p>
                                <input type="number" class="innp1"  min="-1" max="1" step="0.1" v-model="middlep10">
                              </div>
                              <div>
                                <p style="margin-right:7px">最大值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="maxp10">
                              </div>
                              <div>
                                <p>最小p值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minpp10">
                              </div>
                            </div>
                            <div>
                              <div class="color21">
                                <p style="margin-right:7px">最小值颜色：</p>
                                <el-color-picker v-model="mincolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">中间值颜色：</p>
                                <el-color-picker v-model="middlecolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">最大值颜色：</p>
                                <el-color-picker v-model="maxcolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p>最小p值颜色：</p>
                                <el-color-picker v-model="minpcolor10"></el-color-picker>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="mianyiwidth10"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="mianyiheight10"></p>
                          </div>
                          <div class="yanse111">
                            <p style="margin-top:10px;">
                              <el-button type="primary" @click="downloadMY('pingfen','pdf')" :disabled="imgsrc10==''" size="mini">{{$t('lang.doi')}}</el-button>
                              <el-button type="primary" @click="downloadMY('pingfen','txt')" :disabled="imgsrc10==''" size="mini">{{$t('lang.dot')}}</el-button>
                              <el-button type="primary" @click="MYUpdate('pingfen')" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="免疫途径">
                      <div v-loading="loading10"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view" class="xiangguanxing">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc10" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div>
                          <p class="xishu">肿瘤类型：</p>
                          <el-select v-model="zhongliuleixing10" clearable multiple collapse-tags placeholder="请选择">
                            <el-option
                              v-for="item in bianmas"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">方法：</p>
                          <el-select v-model="func10"  placeholder="请选择">
                            <el-option
                              v-for="item in funcs"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div class="fazhi">
                            <p>{{$t('lang.pvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.01" v-model="p10"></p>
                            <p>{{$t('lang.rvc')}}：<input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="r10"></p>
                          </div>
                          <div class="yansezhi" style="margin-top:10px">
                            <div>
                              <div>
                                <p style="margin-right:7px">最小值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minp10">
                              </div>
                              <div>
                                <p style="margin-right:7px">中间值：</p>
                                <input type="number" class="innp1"  min="-1" max="1" step="0.1" v-model="middlep10">
                              </div>
                              <div>
                                <p style="margin-right:7px">最大值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="maxp10">
                              </div>
                              <div>
                                <p>最小p值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minpp10">
                              </div>
                            </div>
                            <div>
                              <div class="color21">
                                <p style="margin-right:7px">最小值颜色：</p>
                                <el-color-picker v-model="mincolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">中间值颜色：</p>
                                <el-color-picker v-model="middlecolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">最大值颜色：</p>
                                <el-color-picker v-model="maxcolor10"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p>最小p值颜色：</p>
                                <el-color-picker v-model="minpcolor10"></el-color-picker>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="mianyiwidth10"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="mianyiheight10"></p>
                          </div>
                          <div class="yanse111">
                            <p style="margin-top:10px;">
                              <el-button type="primary" @click="downloadMY('PMID28052254','pdf')" :disabled="imgsrc10==''" size="mini">{{$t('lang.doi')}}</el-button>
                              <el-button type="primary" @click="downloadMY('PMID28052254','txt')" :disabled="imgsrc10==''" size="mini">{{$t('lang.dot')}}</el-button>
                              <el-button type="primary" @click="MYUpdate('PMID28052254')" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('lang.danhe')" id="gene-12" name="13">
                <div class="kegg">
                  <el-tabs :tab-position="tabPosition" @tab-click="handleClick4">
                    <el-tab-pane label="TCGA突变模式">
                      <div class="tcga" v-loading="loading4"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc44" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianmamoshi" style="width:100%" placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadtubian('dot','pdf')" :disabled="imgsrc4==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <!-- <el-button type="primary" @click="downloadCOX('ROC','txt')" :disabled="imgsrc4==''" size="mini">{{$t('lang.dot')}}</el-button> -->
                            <el-button type="primary" @click="pinciUpdate('dot')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="TCGA突变频次">
                      <div class="tcga" v-loading="loading4"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px">
                          <img :src="imgsrc44" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianmapinci" style="width:100%" placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                            <p >请输入基因集：</p>
                            <el-input style="margin-top:10px" type="textarea" :rows="2" placeholder="请输入一行一个基因" v-model="geneji1">
                            </el-input>
                            <div>
                              <p style="margin-top:10px">图片宽度：<input type="number" v-model="tubianwidth"></p>
                              <p style="margin-top:10px">图片高度：<input type="number" v-model="tubianheight"></p>
                            </div>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadtubian('count','pdf')" :disabled="imgsrc4==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <!-- <el-button type="primary" @click="downloadCOX('ROC','txt')" :disabled="imgsrc4==''" size="mini">{{$t('lang.dot')}}</el-button> -->
                            <el-button type="primary" @click="pinciUpdate('count')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="DNA修复">
                      <div v-loading="loading4"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view" class="xiangguanxing">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc44" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div>
                          <p >请输入基因集：</p>
                          <el-input style="margin-top:10px" type="textarea" :rows="2" placeholder="请输入一行一个基因" v-model="geneji4">
                          </el-input>
                          <p class="xishu">肿瘤类型：</p>
                          <el-select v-model="zhongliuleixing4" clearable multiple collapse-tags placeholder="请选择">
                            <el-option
                              v-for="item in bianmas"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <p class="xishu">方法：</p>
                          <el-select v-model="func4"  placeholder="请选择">
                            <el-option
                              v-for="item in funcs"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <div class="yansezhi" style="margin-top:10px">
                            <div>
                              <div>
                                <p style="margin-right:7px">最小值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minp4">
                              </div>
                              <div>
                                <p style="margin-right:7px">中间值：</p>
                                <input type="number" class="innp1"  min="-1" max="1" step="0.1" v-model="middlep4">
                              </div>
                              <div>
                                <p style="margin-right:7px">最大值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="maxp4">
                              </div>
                              <div>
                                <p>最小p值：</p>
                                <input type="number" class="innp1" min="-1" max="1" step="0.1" v-model="minpp4">
                              </div>
                            </div>
                            <div>
                              <div class="color21">
                                <p style="margin-right:7px">最小值颜色：</p>
                                <el-color-picker v-model="mincolor4"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">中间值颜色：</p>
                                <el-color-picker v-model="middlecolor4"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p style="margin-right:7px">最大值颜色：</p>
                                <el-color-picker v-model="maxcolor4"></el-color-picker>
                              </div>
                              <div class="color21">
                                <p>最小p值颜色：</p>
                                <el-color-picker v-model="minpcolor4"></el-color-picker>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p style="margin-top:10px">图片宽度：<input type="number" v-model="xiangguanwidth4"></p>
                            <p style="margin-top:10px">图片高度：<input type="number" v-model="xiangguanheight4"></p>
                          </div>
                          <div class="yanse111">
                            <p style="margin-top:10px;">
                              <el-button type="primary" @click="downloadDNA('pdf')" :disabled="imgsrc44==''" size="mini">{{$t('lang.doi')}}</el-button>
                              <el-button type="primary" @click="downloadDNA('txt')" :disabled="imgsrc44==''" size="mini">{{$t('lang.dot')}}</el-button>
                              <el-button type="primary" @click="DNAUpdate()" size="mini">{{$t('lang.ren')}}</el-button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('lang.shengcun')" id="gene-13" name="14">
                <div class="kegg">
                  <el-tabs :tab-position="tabPosition" @tab-click="handleClick11">
                    <!-- <el-tab-pane label="COX">
                      <div class="tcga" v-loading="loading12"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc11" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianma" clearable style="width:100%" multiple collapse-tags placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="jianyan">
                            <p class="xishu">预后类型：</p>
                            <el-radio-group v-model="xitong">
                              <el-radio label="OS"></el-radio>
                              <el-radio label="DSS"></el-radio>
                              <el-radio label="DFI"></el-radio>
                              <el-radio label="PFI"></el-radio>
                            </el-radio-group>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadCOX('cox','pdf')" :disabled="imgsrc11==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="downloadCOX('cox','txt')" :disabled="imgsrc11==''" size="mini">{{$t('lang.dot')}}</el-button>
                            <el-button type="primary" @click="KMUpdate('cox')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane> -->
                    <el-tab-pane label="KM">
                      <div class="tcga" v-loading="loading12"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc11" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianmaKM" clearable style="width:100%" placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="jianyan">
                            <p class="xishu">预后类型：</p>
                            <el-radio-group v-model="xitong">
                              <el-radio label="OS"></el-radio>
                              <el-radio label="DSS"></el-radio>
                              <el-radio label="DFI"></el-radio>
                              <el-radio label="PFI"></el-radio>
                            </el-radio-group>
                            <p class="xishu"><span>Cutoff-High(%)：</span><input type="number" class="innp" step="1" min="0" max="100" v-model="CutoffHigh"></p>
                            <p class="xishu"><span>Cutoff-Low(%)：</span><input type="number" class="innp" step="1" min="0" max="100" v-model="CutoffLow"></p>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadCOX('km','pdf')" :disabled="imgsrc11==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="downloadCOX('km','txt')" :disabled="imgsrc11==''" size="mini">{{$t('lang.dot')}}</el-button>
                            <el-button type="primary" @click="KMUpdate('km')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="ROC">
                      <div class="tcga" v-loading="loading12"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="f5f5f5" id="view">
                        <div v-if="JSON.stringify(TC)!='{}'" style="width:500px;">
                          <img :src="imgsrc11" style="width:500px;margin-top:20px;" alt="">
                        </div>
                        <div v-else>
                          <div style="width:700px;height:300px;text-align: center">
                            <img style="margin-top:100px;height:150px" src="../../public/img/none.png" alt="">
                          </div>
                        </div>
                        <div class="generight1">
                          <div class="jianyan">
                            <p class="xishu">肿瘤类型：</p>
                            <el-select v-model="bianmaROC" clearable style="width:100%" placeholder="请选择">
                              <el-option
                                v-for="item in bianmas"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="jianyan">
                            <p class="xishu">预后类型：</p>
                            <el-radio-group v-model="xitong">
                              <el-radio label="OS"></el-radio>
                              <el-radio label="DSS"></el-radio>
                              <el-radio label="DFI"></el-radio>
                              <el-radio label="PFI"></el-radio>
                            </el-radio-group>
                          </div>
                          <p style="margin-top:20px;">
                            <el-button type="primary" @click="downloadCOX('roc','pdf')" :disabled="imgsrc11==''" size="mini">{{$t('lang.doi')}}</el-button>
                            <el-button type="primary" @click="downloadCOX('roc','txt')" :disabled="imgsrc11==''" size="mini">{{$t('lang.dot')}}</el-button>
                            <el-button type="primary" @click="KMUpdate('roc')" size="mini">{{$t('lang.ren')}}</el-button>
                          </p>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
export default {
  data() {
    return {
      isActive:true,steptwo:'',zhongliu:null,zhonglius:null,searchContent:'',gene1:'',geneId:"",geneId:{},Aliases:[],num:0,Descs:[],Descs1:[],Descs2:[],
      imgsrc4:'',imgsrc5:'',loading:false,gene2KeggMapList:[],gene2GoList:[],genesDetails:{},activeName: 'kegg',tabPosition: 'right',loading5:false,
      undata4:{},kegg2RelationTwo1:[],loading11:false,undata5:'',pathway2:'ACC',
      pathwayvalue:[{value:'ACC',label:'ACC'},{value:'BLCA',label:'BLCA'},{value:'BRCA',label:'BRCA'},{value:'CESC',label:'CESC'},{value:'CHOL',label:'CHOL'},{value:'COAD',label:'COAD'},{value:'DLBC',label:'DLBC'},{value:'ESCA',label:'ESCA'},{value:'GBM',label:'GBM'},{value:'HNSC',label:'HNSC'},{value:'KICH',label:'KICH'},{value:'KIRC',label:'KIRC'},{value:'KIRP',label:'KIRP'},{value:'LAML',label:'LAML'},{value:'LGG',label:'LGG'},{value:'LIHC',label:'LIHC'},{value:'LUAD',label:'LUAD'},{value:'LUSC',label:'LUSC'},{value:'MESO',label:'MESO'},{value:'OV',label:'OV'},{value:'PAAD',label:'PAAD'},{value:'PCPG',label:'PCPG'},{value:'PRAD',label:'PRAD'},{value:'READ',label:'READ'},{value:'SARC',label:'SARC'},{value:'SKCM',label:'SKCM'},{value:'SRAC',label:'SRAC'},{value:'STAD',label:'STAD'},{value:'TGCT',label:'TGCT'},{value:'THCA',label:'THCA'},{value:'THYM',label:'THYM'},{value:'UCEC',label:'UCEC'},{value:'UCS',label:'UCS'},{value:'UVM',label:'UVM'}],func:'pearson',funcs:[{value: 'pearson',label: 'pearson'},{value: 'kendall',label: 'kendall'},{value: 'spearman',label: 'spearman'}],funcvalue:[{value:'spearman',label:'spearman'},{value:'kendall',label:'kendall'},{value:'pearson',label:'pearson'}],
      undata2:{},input5:0.1,input6:0.05,loading3:false,pathway:['ACC'],search1: '',loading4:false,undata3:{},pathway1:['ACC'],func1:'pearson',input7:0.1,
      input8:0.05,search2: '',loading1:false,TC:{},GT:{},imgsrc:"",radio:'T检验',value:'45',options:[{value: '0',label: '0'},{value: '15',label: '15'},{value: '30',label: '30'},{value: '45',label: '45'},{value: '75',label: '75'},{value: '90',label: '90'}],value1:'tl',options1:[{value: 'tl',label: '左上角'},{value: 'bl',label: '左下角'},{value: 'tr',label: '右上角'},{value: 'br',label: '右下角'}],input1:0,input2:0,input:0.5,color:'#4285f4',color1:'#ff6b00',
      loading2:false,imgsrc2:'',radio1:'F',radio2:'F',edg:'45',input3:0,input4:0,fanai:'',shujuleixing:'GTEx',geneji:`BTLA
CD200
TNFRSF14
NRP1
LAIR1
TNFSF4
CD244
LAG3
ICOS
CD40LG
CTLA4
CD48
CD28
CD200R1
HAVCR2
ADORA2A
CD276
KIR3DL1
CD80
PDCD1
LGALS9
CD160
TNFSF14
IDO2
ICOSLG
TMIGD2
VTCN1
IDO1
PDCD1LG2
HHLA2
TNFSF18
BTNL2
CD70
TNFSF9
TNFRSF8
CD27
TNFRSF25
VSIR
TNFRSF4
CD40
TNFRSF18
TNFSF15
TIGIT
CD274
CD86
CD44
TNFRSF9`,zhongliuleixing:['GBM','OV','LUAD','LUSC','PRAD','UCEC','BLCA','TGCT','ESCA','PAAD','KIRP','LIHC','CESC','SARC','BRCA','THYN','MESO','COAD','STAD','SKCM','CHOL','KIRC','THCA','HNSC','LAML','READ','LGG','DLBC','KICH','UCS','ACC','PCPG','UVM'],
      bianmas:[{value: 'GBM',label: 'GBM'},{value: 'OV',label: 'OV'},{value: 'LUAD',label: 'LUAD'},{value: 'LUSC',label: 'LUSC'},{value: 'PRAD',label: 'PRAD'},{value: 'UCEC',label: 'UCEC'},{value: 'BLCA',label: 'BLCA'},{value: 'TGCT',label: 'TGCT'},{value: 'ESCA',label: 'ESCA'},{value: 'PAAD',label: 'PAAD'},{value: 'KIRP',label: 'KIRP'},{value: 'LIHC',label: 'LIHC'},{value: 'CESC',label: 'CESC'},{value: 'SARC',label: 'SARC'},{value: 'BRCA',label: 'BRCA'},{value: 'THYN',label: 'THYN'},{value: 'MESO',label: 'MESO'},{value: 'COAD',label: 'COAD'},{value: 'STAD',label: 'STAD'},{value: 'SKCM',label: 'SKCM'},{value: 'CHOL',label: 'CHOL'},{value: 'KIRC',label: 'KIRC'},{value: 'THCA',label: 'THCA'},{value: 'HNSC',label: 'HNSC'},{value: 'LAML',label: 'LAML'},{value: 'READ',label: 'READ'},{value: 'LGG',label: 'LGG'},{value: 'DLBC',label: 'DLBC'},{value: 'KICH',label: 'KICH'},{value: 'UCS',label: 'UCS'},{value: 'ACC',label: 'ACC'},{value: 'PCPG',label: 'PCPG'},{value: 'UVM',label: 'UVM'}],minp:-1,middlep:0,maxp:1,mincolor:'#0000ff',middlecolor:'#ffffff',maxcolor:'#ff0000',xiangguanwidth:500,xiangguanheight:600,tubianwidth:600,tubianheight:600,imgsrc11:'',minpp4:0.001,minpcolor4:'#00ff00',xiangguanwidth4:500,xiangguanheight4:600,minpcolor:'#00ff00',minpp:0.001,imgsrcxiangguan:"",bianmamoshi:'ACC',bianmapinci:'ACC',
      geneji1:`BTLA
CD200
TNFRSF14
NRP1
LAIR1
TNFSF4
CD244
LAG3
ICOS
CD40LG
CTLA4
CD48
CD28
CD200R1
HAVCR2
ADORA2A
CD276
KIR3DL1
CD80
PDCD1
LGALS9
CD160
TNFSF14
IDO2
ICOSLG
TMIGD2
VTCN1
IDO1
PDCD1LG2
HHLA2
TNFSF18
BTNL2
CD70
TNFSF9
TNFRSF8
CD27
TNFRSF25
VSIR
TNFRSF4
CD40
TNFRSF18
TNFSF15
TIGIT
CD274
CD86
CD44
TNFRSF9`,
geneji4:`MLH1
MSH2
MSH6
PMS2
EPCAM`,
      zhongliuleixing4:['GBM','OV','LUAD','LUSC','PRAD','UCEC','BLCA','TGCT','ESCA','PAAD','KIRP','LIHC','CESC','SARC','BRCA','THYN','MESO','COAD','STAD','SKCM','CHOL','KIRC','THCA','HNSC','LAML','READ','LGG','DLBC','KICH','UCS','ACC','PCPG','UVM'],func4:'pearson',minp4:-1,middlep4:0,maxp4:1,mincolor4:'#0000ff',middlecolor4:'#ffffff',maxcolor4:'#ff0000',minpp4:0.001,minpcolor4:'#00ff00',xiangguanwidth4:500,xiangguanheight4:550,imgsrc44:'',loading10:false,
      bianmaMSI:['GBM','OV','LUAD','LUSC','PRAD','UCEC','BLCA','TGCT','ESCA','PAAD','KIRP','LIHC','CESC','SARC','BRCA','THYN','MESO','COAD','STAD','SKCM','CHOL','KIRC','THCA','HNSC','LAML','READ','LGG','DLBC','KICH','UCS','ACC','PCPG','UVM'],func11:"pearson",msicolor:'#0000ff',MSIwidth:5,MSIheight:4,
      zhongliuleixing10:['GBM','OV','LUAD','LUSC','PRAD','UCEC','BLCA','TGCT','ESCA','PAAD','KIRP','LIHC','CESC','SARC','BRCA','THYN','MESO','COAD','STAD','SKCM','CHOL','KIRC','THCA','HNSC','LAML','READ','LGG','DLBC','KICH','UCS','ACC','PCPG','UVM'],func10:'pearson',minp10:-1,middlep10:0,maxp10:1,mincolor10:'#0000ff',middlecolor10:'#ffffff',maxcolor10:'#ff0000',minpp10:0.001,minpcolor10:'#00ff00',mianyiwidth10:500,mianyiheight10:550,p10:0.05,r10:0.1,XBPF:'Timer',imgsrc10:'',loading12:false,bianma:['GBM','OV','LUAD','LUSC','PRAD','UCEC','BLCA','TGCT','ESCA','PAAD','KIRP','LIHC','CESC','SARC','BRCA','THYN','MESO','COAD','STAD','SKCM','CHOL','KIRC','THCA','HNSC','LAML','READ','LGG','DLBC','KICH','UCS','ACC','PCPG','UVM'],xitong:'OS',bianmaKM:'GBM',
      CutoffHigh:50,CutoffLow:50,bianmaROC:"GBM",iconList1:[],iconList2:[],danlist:'ACC',duolist:['ACC'],gene111:'',lei:'',
      activeNames: ['1','2','3','4','12','13','14']
    }
  },
  components:{
    Header
  },
  computed: {
    data1: {
      get: function(){
        return this.Aliases; // 在这里把临时对象的值通过计算属性赋值给页面中用到的对象
      }
    },
    data2: {
      get: function(){
        return this.Descs1; // 在这里把临时对象的值通过计算属性赋值给页面中用到的对象
      }
    },
    data3: {
      get: function(){
        return this.Descs2; // 在这里把临时对象的值通过计算属性赋值给页面中用到的对象
      }
    },
    
  },
  mounted() {
    this.axios.get('/pubmed/getCancerAll').then(res=>{
      var a=JSON.parse(JSON.stringify(res.data.res.listCancer))
      a.shift()
      this.iconList1=a
      this.iconList2=res.data.res.listCancer
    })
  },
  updated() {
    this.createCytoscape()
    this.tongliguanxi()
    this.tongliguanxi1()
    this.bpxiangguan()
    this.bpxiangguan1()
    this.bpxiangguan2()
  },
  activated() {
    this.getRouterData()
    this.Searcher1()
    this.Undate()
    this.pinciUpdate('dot')
    this.MSIUpdate('MSI')
    this.KMUpdate('km')
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleClick2(tab, even){
      if(tab.name == 'gobp'){
        document.getElementById("b").innerText="BP"
        this.Undate3()
      }else if(tab.name == 'gocc'){
        document.getElementById("b").innerText="CC"
        this.Undate3()
      }else if(tab.name == 'gomf'){
        document.getElementById("b").innerText="MF"
        this.Undate3()
      }
    },
    handleClick3(tab, event){
      if(tab.label == 'TCGA+GTEx'){
        document.getElementById("a").innerText="T"
        this.Undate()
      }else if(tab.label == 'TCGA'){
        document.getElementById("a").innerText="F"
        this.Undate()
      }else if(tab.label == 'GTEx'){
        this.Undate1('GTEx')
      }else if(tab.label == 'CCLE'){
        this.Undate1('CCLE')
      }else if(tab.label == '相关性分析'){
        this.XGUpdate()
      }
    },
    handleClick4(tab, event){
      if(tab.label == 'TCGA突变频次'){
        this.pinciUpdate('count')
      }else if(tab.label == 'TCGA突变模式'){
        this.pinciUpdate('dot')
      }else if(tab.label == 'DNA修复'){
        this.DNAUpdate()
      }
    },
    handleClick10(tab, event){
      if(tab.label == 'MSI'){
        this.MSIUpdate('MSI')
      }else if(tab.label == '新抗原'){
        this.MSIUpdate('Neoantigen')
      }else if(tab.label == 'TMB'){
        this.MSIUpdate('TMB')
      }else if(tab.label == '免疫检查点'){
        this.MYUpdate('checkpoints')
      }else if(tab.label == '免疫微环境'){
        this.MYUpdate('ESTIMATE')
      }else if(tab.label == '免疫细胞评分'){
        this.MYUpdate('pingfen')
      }else if(tab.label == '免疫途径'){
        this.MYUpdate('PMID28052254')
      }
    },
    handleClick11(tab, event){
      if(tab.label == 'COX'){
        this.KMUpdate('cox')
      }else if(tab.label == 'KM'){
        this.KMUpdate('km')
      }else if(tab.label == 'ROC'){
        this.KMUpdate('roc')
      }
    },
    KMUpdate(re){
      this.loading12=true
      if(re == 'km'){
        this.axios.get(`/pubmed/getTCGASurvByGeneId`,{params:{
          geneId:this.Id,
          c:this.bianmaKM.toString(),
          m:this.xitong,
          p:re,
          u:this.CutoffHigh,
          d:this.CutoffLow,
          f:'png',
          v:400,w:'600'
        }}).then(result=>{
          this.TC=result.data
          if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
            this.imgsrc11=`data:image/png;base64,${result.data.fileBase64}`
          }
          if(result.status==200){
            this.loading12=false
          }
        })
      }else if(re == 'cox'){
        this.axios.get(`/pubmed/getTCGASurvByGeneId`,{params:{
          geneId:this.Id,
          c:this.bianma.toString(),
          m:this.xitong,
          p:re,
          f:'png',
          v:this.bianma.length*20+100,w:'600'
        }}).then(result=>{
          this.TC=result.data
          if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
            this.imgsrc11=`data:image/png;base64,${result.data.fileBase64}`
          }
          if(result.status==200){
            this.loading12=false
          }
        })
      }else if(re == 'roc'){
        this.axios.get(`/pubmed/getTCGASurvByGeneId`,{params:{
          geneId:this.Id,
          c:this.bianmaROC.toString(),
          m:this.xitong,
          p:re,
          f:'png',
          v:400,w:'800'
        }}).then(result=>{
          this.TC=result.data
          if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
            this.imgsrc11=`data:image/png;base64,${result.data.fileBase64}`
          }
          if(result.status==200){
            this.loading12=false
          }
        })
      }
      
    },
    MYUpdate(aa){
      var bb=''
      if(aa == 'pingfen'){
        bb = this.XBPF
      }else{
        bb = aa
      }
      this.loading10=true
      // var a = this.geneji.split(/[\n,]/g)
      // var s = a.toString()
      this.axios.get(`/pubmed/getTCGAimmucorByGeneID`,{params:{
        geneId:this.Id,
        c:this.zhongliuleixing10.toString(),
        y:bb,
        m:this.func10,
        t:this.p10,
        r:this.r10,
        n:this.minp10,
        d:this.middlep10,
        x:this.maxp10,
        p:this.minpp10,
        l:this.mincolor10.substring(1).toLowerCase(),
        q:this.middlecolor10.substring(1).toLowerCase(),
        z:this.maxcolor10.substring(1).toLowerCase(),
        a:this.minpcolor10.substring(1).toLowerCase(),
        f:'png',
        v: this.mianyiheight10,
        w: this.mianyiwidth10
      }}).then(result=>{
        this.TC=result.data
        if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
          this.imgsrc10=`data:image/png;base64,${result.data.fileBase64}`
        }
        if(result.status==200){
          this.loading10=false
        }
      })
    },
    MSIUpdate(aa){
      this.loading10=true
      // var a = this.geneji.split(/[\n,]/g)
      // var s = a.toString()
      this.axios.get(`/pubmed/getTcgaMsiTmbNgenCorByGeneID`,{params:{
        geneId:this.Id,
        c:this.bianmaMSI.toString(),
        m:this.func11,
        p:aa,
        d:this.msicolor.substring(1).toLowerCase(),
        f:'png',
        v: this.MSIheight,
        w: this.MSIwidth
      }}).then(result=>{
        this.TC=result.data
        if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
          this.imgsrc10=`data:image/png;base64,${result.data.fileBase64}`
        }
        if(result.status==200){
          this.loading10=false
        }
      })
    },
    DNAUpdate(){
      this.loading4=true
      // var a = this.geneji.split(/[\n,]/g)
      // var s = a.toString()
      this.axios.get(`/pubmed/getCustomGeneCor`,{params:{
        geneId:this.searchContent.toUpperCase(),
        c:this.zhongliuleixing4.toString(),
        j:this.geneji4,
        m:this.func4,
        n:this.minp4,
        d:this.middlep4,
        x:this.maxp4,
        p:this.minpp4,
        l:this.mincolor4.substring(1).toLowerCase(),
        q:this.middlecolor4.substring(1).toLowerCase(),
        z:this.maxcolor4.substring(1).toLowerCase(),
        a:this.minpcolor4.substring(1).toLowerCase(),
        f:'png',
        v: this.xiangguanheight4,
        w: this.xiangguanwidth4
      }}).then(result=>{
        this.TC=result.data
        if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
          this.imgsrc44=`data:image/png;base64,${result.data.fileBase64}`
        }
        if(result.status==200){
          this.loading4=false
        }
      })
    },
    pinciUpdate(aaaa){
      this.loading4=true
      var a = this.geneji.split(/[\n,]/g)
      if(aaaa == 'dot'){
        this.axios.get(`/pubmed/getTCGAMafPlotByGenes`,{params:{
          geneId:this.searchContent.toUpperCase(),
          c:this.bianmamoshi,
          m:aaaa,
          f:'png',
          v:'300',
          w:'750'
        }}).then(result=>{
          this.TC=result.data
          if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
            this.imgsrc44=`data:image/png;base64,${result.data.fileBase64}`
          }
          if(result.status==200){
            this.loading4=false
          }
        })
      }else{
        this.axios.get(`/pubmed/getTCGAMafPlotByGenes`,{params:{
          geneId:this.geneji1,
          c:this.bianmapinci,
          m:aaaa,
          f:'png',
          v: this.tubianwidth,
          w: this.tubianheight
        }}).then(result=>{
          this.TC=result.data
          if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
            this.imgsrc44=`data:image/png;base64,${result.data.fileBase64}`
          }
          if(result.status==200){
            this.loading4=false
          }
        })
      }
    },
    downloadtcga(){
      this.mess=true
      if(this.radio=='T检验'){
        this.m='T'
      }else{
        this.m='F'
      }
      this.axios.get(`/pubmed/getGenesPlotPancerDitByInfos`, {params:{
        genesId:this.Id,
        g:document.getElementById("a").innerText,
        m:this.m,
        s:this.input,
        u:this.color.substring(1),
        d:this.color1.substring(1),
        l:this.value1,
        a:this.value,
        y:this.input2,
        z:this.input1,
        type:'pdf'
      },responseType: 'blob'}).then(result=>{
        if(result.status ==200){
          this.mess=false
          const elink = document.createElement('a')
          const fileName = this.searchContent+'+TCGA'+'.pdf'
          elink.download = fileName
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(result.data)
          document.body.appendChild(elink)
          elink.click()
          URL.revokeObjectURL(elink.href) // 释放URL 对象
          document.body.removeChild(elink)
        }
      })
    },
    downloadgtex(re){
      this.mess=true
      this.axios.get(`/pubmed/getGenesPlotPancerTissueByInfos`,{params:{
        genesId:this.Id,
        m:this.radio2,
        a:this.edg,
        s:this.radio1,
        y:this.input3,
        z:this.input4,
        type:'pdf',
        db:re
      },responseType: 'blob'}).then(result=>{
        if(result.status ==200){
          this.mess=false
          const elink = document.createElement('a')
          const fileName = this.searchContent+'+'+re+'.pdf'
          elink.download = fileName
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(result.data)
          document.body.appendChild(elink)
          elink.click()
          URL.revokeObjectURL(elink.href) // 释放URL 对象
          document.body.removeChild(elink)
        }
      })
    },
    downloadXG(re){
      this.mess=true
      // var a = this.geneji.split(/[\n,]/g)
      // var s = a.toString()
      this.axios.get(`/pubmed/getCustomGeneCor`,{params:{
        geneId:this.searchContent.toUpperCase(),
        c:this.zhongliuleixing.toString(),
        j:this.geneji,
        m:this.func,
        n:this.minp,
        d:this.middlep,
        x:this.maxp,
        p:this.minpp,
        l:this.mincolor.substring(1).toLowerCase(),
        q:this.middlecolor.substring(1).toLowerCase(),
        z:this.maxcolor.substring(1).toLowerCase(),
        a:this.minpcolor.substring(1).toLowerCase(),
        f:re,
        v: this.xiangguanheight,
        w: this.xiangguanwidth
      },responseType: 'blob'}).then(result=>{
        if(result.status ==200){
          this.mess=false
          const elink = document.createElement('a')
          const fileName = this.searchContent+'.'+re
          elink.download = fileName
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(result.data)
          document.body.appendChild(elink)
          elink.click()
          URL.revokeObjectURL(elink.href) // 释放URL 对象
          document.body.removeChild(elink)
        }
      })
    },
    downloadtcgt(){
      this.mess=true
      if(this.radio=='T检验'){
        this.m='T'
      }else{
        this.m='F'
      }
      this.axios.get(`/pubmed/getGenesPlotPancerDitByInfos`, {params:{
        genesId:this.Id,
        g:document.getElementById("a").innerText,
        m:this.m,
        s:this.input,
        u:this.color.substring(1),
        d:this.color1.substring(1),
        l:this.value1,
        a:this.value,
        y:this.input2,
        z:this.input1,
        type:'pdf'
      },responseType: 'blob'}).then(result=>{
        if(result.data!=''){
          this.mess=false
          const elink = document.createElement('a')
          const fileName = this.searchContent+'+TCGA+GTEx'+'.pdf'
          elink.download = fileName
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(result.data)
          document.body.appendChild(elink)
          elink.click()
          URL.revokeObjectURL(elink.href) // 释放URL 对象
          document.body.removeChild(elink)
        }
      })
    },
    XGUpdate(){
      this.loading1=true
      // var a = this.geneji.split(/[\n,]/g)
      // var s = a.toString()
      this.axios.get(`/pubmed/getCustomGeneCor`,{params:{
        geneId:this.searchContent.toUpperCase(),
        c:this.zhongliuleixing.toString(),
        j:this.geneji,
        m:this.func,
        n:this.minp,
        d:this.middlep,
        x:this.maxp,
        p:this.minpp,
        l:this.mincolor.substring(1).toLowerCase(),
        q:this.middlecolor.substring(1).toLowerCase(),
        z:this.maxcolor.substring(1).toLowerCase(),
        a:this.minpcolor.substring(1).toLowerCase(),
        f:'png',
        v: this.xiangguanheight,
        w: this.xiangguanwidth
      }}).then(result=>{
        this.TC=result.data
        if(JSON.stringify(this.TC)!='{}' && result.data!=undefined){
          this.imgsrcxiangguan=`data:image/png;base64,${result.data.fileBase64}`
        }
        if(result.status==200){
          this.loading1=false
        }
      })
    },
    bpxiangguan() {
      var echarts1 = document.getElementById("bp1");
      // 绘制图表
      if(echarts1){
        let myChart = this.echarts.init(echarts1)
        myChart.clear();
        myChart.setOption({
          tooltip: {
            formatter: function (params) {
              var res='<div><p>R：'+params.data.R+'</p><p>P：'+params.data.P+'</p></div>' 
              return res;
            },
          },
          series: [{
            // edgeSymbol: ['arrow','' ],
            itemStyle: {                
              normal: {
                color:'#4574d1',
                lineStyle: {
                  color: '#99b2e5', //改变折线颜色
                  curveness: 0.3,
                },
                label: {
                  position: 'Right',
                  show: true,
                  textStyle: {
                    color: '#333'
                  }
                },
                nodeStyle: {
                  brushType: 'both',
                  borderColor: 'rgb(255,215,0)',
                  borderWidth: 1
                },
                linkStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.5,
                  }
                }
              },
            },
            focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            animation: false,
            name:"",
            type: 'graph',//关系图类型
            layout: 'circular',//引力布局
            circular: {
                rotateLabel: true
            },
            roam: true,//可以拖动
            useWorker: false,
            minRadius: 15,
            maxRadius: 25,
            gravity: 1.1,
            scaling: 1.1,
            data:this.nodes1,
            links:this.links1
          }]         
        })
        myChart.on('click', (param)=>{
          if (param.dataType == 'node' && param.name!=this.genesDetails.name) {
            this.tankuang=!this.tankuang
            this.loading10=true
            var qs=require('qs');
            this.axios.post(`/pubmed/getGenesCorGOTerm2ExpByInfo`, qs.stringify({
              genesId:this.Id,
              m:this.func1,
              s:this.pathway1.toString(),
              p:this.input8,
              n:document.getElementById("b").innerText,
              r:this.input7,
              t:param.data.Goid
            })).then(result=>{
              
              if(result.data.status==200){
                this.imgsrc6=`data:image/png;base64,${result.data.res.fileContent}`
                this.loading10=false
              }
            })
          }
        });
      }
      
    },
    bpxiangguan1() {
      var echarts1 = document.getElementById("bp2");
      // 绘制图表
      if(echarts1){
        let myChart = this.echarts.init(echarts1)
        myChart.clear();
        myChart.setOption({
          tooltip: {
            formatter: function (params) {
              var res='<div><p>R：'+params.data.R+'</p><p>P：'+params.data.P+'</p></div>' 
              return res;
            },
          },
          series: [{
            // edgeSymbol: ['arrow','' ],
            itemStyle: {                
              normal: {
                color:'#4574d1',
                lineStyle: {
                  color: '#99b2e5', //改变折线颜色
                  curveness: 0.3,
                },
                label: {
                  position: 'Right',
                  show: true,
                  textStyle: {
                    color: '#333'
                  }
                },
                nodeStyle: {
                  brushType: 'both',
                  borderColor: 'rgb(255,215,0)',
                  borderWidth: 1
                },
                linkStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.5,
                  }
                }
              },
            },
            focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            animation: false,
            name:"",
            type: 'graph',//关系图类型
            layout: 'circular',//引力布局
            circular: {
                rotateLabel: true
            },
            roam: true,//可以拖动
            useWorker: false,
            minRadius: 15,
            maxRadius: 25,
            gravity: 1.1,
            scaling: 1.1,
            data:this.nodes1,
            links:this.links1
          }]         
        })
        myChart.on('click', (param)=>{
          if (param.dataType == 'node' && param.name!=this.genesDetails.name) {
            this.tankuang=!this.tankuang
            this.loading10=true
            var qs=require('qs');
            this.axios.post(`/pubmed/getGenesCorGOTerm2ExpByInfo`, qs.stringify({
              genesId:this.Id,
              m:this.func1,
              s:this.pathway1.toString(),
              p:this.input8,
              n:document.getElementById("b").innerText,
              r:this.input7,
              t:param.data.Goid
            })).then(result=>{
              
              if(result.data.status==200){
                this.imgsrc6=`data:image/png;base64,${result.data.res.fileContent}`
                this.loading10=false
              }
            })
          }
        });
      }
      
    },
    bpxiangguan2() {
      var echarts1 = document.getElementById("bp3");
      // 绘制图表
      if(echarts1){
        let myChart = this.echarts.init(echarts1)
        myChart.clear();
        myChart.setOption({
          tooltip: {
            formatter: function (params) {
              var res='<div><p>R：'+params.data.R+'</p><p>P：'+params.data.P+'</p></div>' 
              return res;
            },
          },
          series: [{
            // edgeSymbol: ['arrow','' ],
            itemStyle: {                
              normal: {
                color:'#4574d1',
                lineStyle: {
                  color: '#99b2e5', //改变折线颜色
                  curveness: 0.3,
                },
                label: {
                  position: 'Right',
                  show: true,
                  textStyle: {
                    color: '#333'
                  }
                },
                nodeStyle: {
                  brushType: 'both',
                  borderColor: 'rgb(255,215,0)',
                  borderWidth: 1
                },
                linkStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.5,
                  }
                }
              },
            },
            focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            animation: false,
            name:"",
            type: 'graph',//关系图类型
            layout: 'circular',//引力布局
            circular: {
                rotateLabel: true
            },
            roam: true,//可以拖动
            useWorker: false,
            minRadius: 15,
            maxRadius: 25,
            gravity: 1.1,
            scaling: 1.1,
            data:this.nodes1,
            links:this.links1
          }]         
        })
        myChart.on('click', (param)=>{
          if (param.dataType == 'node' && param.name!=this.genesDetails.name) {
            this.tankuang=!this.tankuang
            this.loading10=true
            var qs=require('qs');
            this.axios.post(`/pubmed/getGenesCorGOTerm2ExpByInfo`, qs.stringify({
              genesId:this.Id,
              m:this.func1,
              s:this.pathway1.toString(),
              p:this.input8,
              n:document.getElementById("b").innerText,
              r:this.input7,
              t:param.data.Goid
            })).then(result=>{
              
              if(result.data.status==200){
                this.imgsrc6=`data:image/png;base64,${result.data.res.fileContent}`
                this.loading10=false
              }
            })
          }
        });
      }
      
    },
    tongliguanxi1() {
      var echarts1 = document.getElementById("tong11");
      // 绘制图表
      if(echarts1){
        let myChart = this.echarts.init(echarts1)
        myChart.clear();
        myChart.setOption({
          tooltip: {
            formatter: function (params) {
              var res='<div><p>R：'+params.data.R+'</p><p>P：'+params.data.P+'</p></div>' 
              return res;
            },
          },
          series: [{
            // edgeSymbol: ['arrow','' ],
            itemStyle: {                
              normal: {
                color:'#4574d1',
                lineStyle: {
                  color: '#99b2e5', //改变折线颜色
                  curveness: 0.3,
                },
                label: {
                  position: 'Right',
                  show: true,
                  textStyle: {
                    color: '#333'
                  }
                },
                nodeStyle: {
                  brushType: 'both',
                  borderColor: 'rgb(255,215,0)',
                  borderWidth: 1
                },
                linkStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.5,
                  }
                }
              },
            },
            focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            animation: false,
            name:"",
            type: 'graph',//关系图类型
            layout: 'circular',//引力布局
            circular: {
                rotateLabel: true
            },
            roam: true,//可以拖动
            useWorker: false,
            minRadius: 15,
            maxRadius: 25,
            gravity: 1.1,
            scaling: 1.1,
            data:this.nodes,
            links:this.links
          }]         
        })
        // myChart.on('click', (param)=>{
        //   if (param.dataType == 'node' && param.name!=this.genesDetails.name) {
        //     this.tankuang=!this.tankuang
        //     this.loading10=true
        //     var qs=require('qs');
        //     this.axios.post(`/pubmed/getGenesCorKEGGPathwya2ExpByInfo/`, qs.stringify({
        //       genesId:this.Id,
        //       m:this.func,
        //       s:this.pathway2,
        //       p:this.input6,
        //       r:this.input5,
        //       t:param.data.Id1
        //     })).then(result=>{
        //       if(result.data.status==200){
        //         this.imgsrc6=`data:image/png;base64,${result.data.res.fileContent}`
        //         this.loading10=false
        //       }
        //     })
        //   }
        // });
      }
      
    },
    tongliguanxi() {
      var echarts1 = document.getElementById("tong1");
      // 绘制图表
      if(echarts1){
        let myChart = this.echarts.init(echarts1)
        myChart.clear();
        myChart.setOption({
          tooltip: {
            formatter: function (params) {
              var res='<div><p>R：'+params.data.R+'</p><p>P：'+params.data.P+'</p></div>' 
              return res;
            },
          },
          series: [{
            // edgeSymbol: ['arrow','' ],
            itemStyle: {                
              normal: {
                color:'#4574d1',
                lineStyle: {
                  color: '#99b2e5', //改变折线颜色
                  curveness: 0.3,
                },
                label: {
                  position: 'Right',
                  show: true,
                  textStyle: {
                    color: '#333'
                  }
                },
                nodeStyle: {
                  brushType: 'both',
                  borderColor: 'rgb(255,215,0)',
                  borderWidth: 1
                },
                linkStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.5,
                  }
                }
              },
            },
            focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            animation: false,
            name:"",
            type: 'graph',//关系图类型
            layout: 'circular',//引力布局
            circular: {
                rotateLabel: true
            },
            roam: true,//可以拖动
            useWorker: false,
            minRadius: 15,
            maxRadius: 25,
            gravity: 1.1,
            scaling: 1.1,
            data:this.nodes,
            links:this.links
          }]         
        })
        myChart.on('click', (param)=>{
          if (param.dataType == 'node' && param.name!=this.genesDetails.name) {
            this.tankuang=!this.tankuang
            this.loading10=true
            var qs=require('qs');
            this.axios.post(`/pubmed/getGenesCorKEGGPathwya2ExpByInfo/`, qs.stringify({
              genesId:this.Id,
              m:this.func,
              s:this.pathway.toString(),
              p:this.input6,
              r:this.input5,
              t:param.data.Id1
            })).then(result=>{
              if(result.data.status==200){
                this.imgsrc6=`data:image/png;base64,${result.data.res.fileContent}`
                this.loading10=false
              }
            })
          }
        });
      }
      
    },
    Undate(){
      this.loading1=true
      var qs=require('qs');
      if(this.radio=='T检验'){
        this.m='T'
      }else{
        this.m='F'
      }
      this.axios.post(`/pubmed/getGenesPlotPancerDitByInfo`, qs.stringify({
        genesId:this.Id,
        g:document.getElementById("a").innerText,
        m:this.m,
        s:this.input,
        u:this.color.substring(1),
        d:this.color1.substring(1),
        l:this.value1,
        a:this.value,
        y:this.input2,
        z:this.input1
      })).then(result=>{
        this.TC=result.data.res
        if(JSON.stringify(this.TC)!='{}' && result.data.res!=undefined){
          this.imgsrc=`data:image/png;base64,${result.data.res.fileBase64}`
        }
        if(result.data.status==200){
          this.loading1=false
        }
      })
    },
    Undate1(re){
      this.loading2=true
      var qs=require('qs');
      this.axios.post(`/pubmed/getGenesPlotPancerTissueByInfo`, qs.stringify({
        genesId:this.Id,
        m:this.radio2,
        a:this.edg,
        s:this.radio1,
        y:this.input3,
        z:this.input4,
        db:re
      })).then(result=>{
        this.GT=result.data.res
        if(JSON.stringify(result.data.res)!='{}' && result.data.res!=undefined){
          this.imgsrc2=`data:image/png;base64,${result.data.res.fileBase64}`
        }
        if(result.data.status==200){
          this.loading2=false
        }
        this.loading2=false
      })
    },
    Undate2(){
      this.loading3=true
      this.nodes=[]
      var qs=require('qs');
      this.axios.post(`/pubmed/getGenesCorKEGGPathwya2ExpByInfo`, qs.stringify({
        genesId:this.Id,
        m:this.func,
        s:this.pathway.toString(),
        p:this.input6,
        r:this.input5,
      })).then(result=>{
        this.undata2=result.data.res
        if(JSON.stringify(result.data.res)!='{}'){
          var a=(result.data.res.fileContent).substring(1,result.data.res.fileContent.length-1);
          var b=a.split(',').slice(1,a.length)
          var aa=[]
          var nn={name:this.$route.query.search1}
          var mm=''
          for(var c of b){
            aa=c.split('\t')
            var e={}
            e.Id1=aa[0]
            e.R=aa[1]
            e.P=aa[2]
            e.name=aa[3]
            e.symbolSize=Math.ceil(Math.abs(aa[1])*40)
            mm=Math.floor(Math.abs(Math.log10(aa[2])))
            if(mm>6){
              mm=6
            }
            switch(mm){             
              case 0:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#2B32B2'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#eff3ff'
                }
              break;
              case 1:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#1488CC'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#c6dbef'
                }
              break;
              case 2:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#396afc'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#9ecae1'
                }
              break;
              case 3:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#2948ff'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#6baed6'
                }
              break;
              case 4:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#0052D4'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#3182bd'
                }
              break;
              case 5:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#6FB1FC'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#08519c'
                }
              break;
              case 6:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#003973'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#0e3076'
                }
              break;
            }
            this.nodes.push(e)
          }
          var compare = function (prop) {
            return function (obj1, obj2) {
              var val1 = obj1[prop];
              var val2 = obj2[prop];if (val1 < val2) {
                return -1;
              } else if (val1 > val2) {
                return 1;
              } else {
                return 0;
              }            
            } 
          }
          this.nodes.sort(compare("symbolSize"))
          this.nodes.unshift(nn)
          for(var ab in this.nodes){
            this.nodes[ab].id=ab
          }
          this.links = JSON.parse(JSON.stringify( this.nodes))
          for(var bb=0;bb<this.links.length;bb++){
            this.links[bb].source=bb
            this.links[bb].target=0
          }
          this.links[0].target=1
        }
        if(result.data.status==200){
          this.loading3=false
        }
      })
    },
    Undate3(){
      this.loading4=true
      this.nodes1=[]
      var qs=require('qs');
      this.axios.post(`/pubmed/getGenesCorGOTerm2ExpByInfo`, qs.stringify({
        genesId:this.Id,
        m:this.func1,
        s:this.pathway1.toString(),
        p:this.input8,
        n:document.getElementById("b").innerText,
        r:this.input7,
      })).then(result=>{
        this.undata3=result.data.res
        // console.log(this.undata3)
        if(JSON.stringify(result.data.res)!='{}'){
          var a=(result.data.res.fileContent).substring(1,result.data.res.fileContent.length-1);
          var b=a.split(',').slice(1,a.length)
          var aa=[]
          var nn={name:this.$route.query.search1}
          var mm=''
          for(var c of b){
            aa=c.split('\t')
            var e={}
            e.Goid=aa[0]
            e.R=aa[1]
            e.P=aa[2]
            e.name=aa[3]
            e.symbolSize=Math.ceil(Math.abs(aa[1])*40)
            mm=Math.floor(Math.abs(Math.log10(aa[2])))
            if(mm>6){
              mm=6
            }
            switch(mm){             
              case 0:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#2B32B2'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#eff3ff'
                }
              break;
              case 1:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#1488CC'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#c6dbef'
                }
              break;
              case 2:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#396afc'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#9ecae1'
                }
              break;
              case 3:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#2948ff'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#6baed6'
                }
              break;
              case 4:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#0052D4'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#3182bd'
                }
              break;
              case 5:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#6FB1FC'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#08519c'
                }
              break;
              case 6:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#003973'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#0e3076'
                }
              break;
            }
            this.nodes1.push(e)
          }
          var compare = function (prop) {
            return function (obj1, obj2) {
              var val1 = obj1[prop];
              var val2 = obj2[prop];if (val1 < val2) {
                return -1;
              } else if (val1 > val2) {
                return 1;
              } else {
                return 0;
              }            
            } 
          }
          this.nodes1.sort(compare("symbolSize"))
          this.nodes1.unshift(nn)
          for(var ab in this.nodes1){
            this.nodes1[ab].id=ab
          }
          this.links1 = JSON.parse(JSON.stringify( this.nodes1))
          for(var bb=0;bb<this.links1.length;bb++){
            this.links1[bb].source=bb
            this.links1[bb].target=0
          }
          this.links1[0].target=1
        }
        if(result.data.status==200){
          this.loading4=false
        }
      })
    },
    Undate4(){
      this.loading5=true
      this.axios.get(`/pubmed/getGenesRelationInfo`, {
        params:{genesId:this.Id}
      }).then(result=>{
        this.undata4=result.data.res
        if(JSON.stringify(result.data.res)!="{}" && result.data.res!=undefined){
          var host=result.data.res.hostGene
          var join=result.data.res.joinGene
          join.unshift(host)
          for(var a in join){
            join[a].id=a
          }
          this.f=join
          this.f[0].itemStyle={}
          this.f[0].itemStyle.color= '#FF6B00'
          this.ac = JSON.parse(JSON.stringify(join))
          for(var b=1;b<this.ac.length;b++){
            this.ac[b].source=b
            this.ac[b].target=0
          }
          this.ac[0].target=1
        }
        if(result.data.status==200){
          this.loading5=false
        }
      })
    },
    Undate5(){
      this.loading11=true
      this.nodes=[]
      var qs=require('qs');
      this.axios.post(`/pubmed/getGenesCorKEGGGene2ExpByInfo`, qs.stringify({
        genesId:this.Id,
        m:this.func,
        s:this.pathway2,
        p:this.input6,
        r:this.input5,
      })).then(result=>{
        this.undata5=result.data.res
        // console.log(this.undata5)
        if(JSON.stringify(result.data.res)!='{}'){
          var a=(result.data.res.fileContent).substring(1,result.data.res.fileContent.length-1);
          var b=a.split(',').slice(1,a.length)
          var aa=[]
          var nn={name:this.$route.query.search1}
          var mm=''
          for(var c of b){
            aa=c.split('\t')
            var e={}
            e.Id1=aa[0]
            e.R=aa[1]
            e.P=aa[2]
            e.name=aa[3]
            e.symbolSize=Math.ceil(Math.abs(aa[1])*40)
            mm=Math.floor(Math.abs(Math.log10(aa[2])))
            if(mm>6){
              mm=6
            }
            switch(mm){             
              case 0:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#2B32B2'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#eff3ff'
                }
              break;
              case 1:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#1488CC'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#c6dbef'
                }
              break;
              case 2:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#396afc'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#9ecae1'
                }
              break;
              case 3:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#2948ff'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#6baed6'
                }
              break;
              case 4:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#0052D4'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#3182bd'
                }
              break;
              case 5:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#6FB1FC'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#08519c'
                }
              break;
              case 6:
                if(aa[1]>0){
                  e.itemStyle={}
                  e.itemStyle.color= '#003973'
                }else{
                  e.itemStyle={}
                  e.itemStyle.color= '#0e3076'
                }
              break;
            }
            this.nodes.push(e)
          }
          var compare = function (prop) {
            return function (obj1, obj2) {
              var val1 = obj1[prop];
              var val2 = obj2[prop];if (val1 < val2) {
                return -1;
              } else if (val1 > val2) {
                return 1;
              } else {
                return 0;
              }            
            } 
          }
          this.nodes.sort(compare("symbolSize"))
          this.nodes.unshift(nn)
          for(var ab in this.nodes){
            this.nodes[ab].id=ab
          }
          this.links = JSON.parse(JSON.stringify( this.nodes))
          for(var bb=0;bb<this.links.length;bb++){
            this.links[bb].source=bb
            this.links[bb].target=0
          }
          this.links[0].target=1
        }
        if(result.data.status==200){
          this.loading11=false
        }
      })
    },
    createCytoscape() {
      var echarts1 = document.getElementById("xue1");
      // 绘制图表
      if(echarts1){
        let myChart = this.echarts.init(echarts1)
        myChart.clear();
        myChart.setOption({
          series: [{
            // edgeSymbol: ['arrow','' ],
            itemStyle: {                
              normal: {
                color:'#4574d1',
                lineStyle: {
                  color: '#99b2e5', //改变折线颜色
                  curveness: 0.3,
                  // opacity:0.2
                },
                label: {
                  position: 'Right',
                  show: true,
                  textStyle: {
                    color: '#333'
                  }
                },
                nodeStyle: {
                  brushType: 'both',
                  borderColor: 'rgb(255,215,0)',
                  borderWidth: 1
                },
                linkStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.5,
                  }
                }
              },

            },
            focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
            animation: false,
            name:"",
            type: 'graph',//关系图类型
            layout: 'circular',//引力布局
            circular: {
                rotateLabel: true
            },
            roam: true,//可以拖动
            useWorker: false,
            gravity: 1.1,
            scaling: 1.1,
            data:this.f,
            links:this.ac
          }]         
        })
        myChart.on('click', (param)=>{
          if (param.dataType == 'node') {
            const {href}=this.$router.resolve({
              path: '/Monogenic',
              query: {
                search1:`${param.data.name}`,
                Id:`${param.data.geneID}`
              },
            })
            window.open(href,'_blank')
          }else{
            this.$set(this.kegg2RelationTwo1,0,param.data.morePathwayList)
          }
        });
      }
    },
    handleClick(tab, event){
      if(tab.name == 'kegg1'){
        this.isActive=true
        this.Undate4()
      }else if(tab.name =='kegg2'){
        this.Undate2()
      }else if(tab.name =='kegg3'){
        this.Undate5()
      }
    },
    handleGoods(a){
      if(this.num==0){
        var url=`https://www.kegg.jp/kegg-bin/show_pathway?${a.pathwayid}`
        window.open(url,'_block')
      }else{
        var url=`https://www.kegg.jp/kegg-bin/show_pathway?${a.pathwayid}+${this.num}`
        window.open(url,'_block')
      }
    },
    toNcbi(url){
      window.open(url,'_block')
    },
    select(index, indexPath){
      var gene = this.$el.querySelector('#'+index)
      console.log(index,gene)
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop 
      if(scrollTop<=90){
        var sc=gene.offsetTop-180
      }else{
        var sc=gene.offsetTop-90
      }
      window.scrollTo({
        top: sc,
        behavior: 'smooth' // 平滑滚动
      })
    },
    getRouterData(){
      this.searchContent=this.$route.query.search1
      this.Id=this.$route.query.Id
      this.gene111=this.$route.query.gene
      this.lei=this.$route.query.lei
      if(this.lei=='dan'){
        this.danlist=this.gene111
        this.isActive=true
      }else{
        this.duolist=this.gene111
        this.isActive=false
      }
    },
    Searcher1(){
      var qs=require('qs');
      this.axios.get(`/pubmed/getGenesInfo`, {
        params:{genesId:this.Id}
      }).then(result=>{
        this.gene1=result.data.res
        this.geneId=this.gene1.genesDetails.geneID
        if(result.data.res!=undefined && result.data.res.genesDetails!=undefined){
          this.genesDetails=result.data.res.genesDetails
          this.Aliases=result.data.res.genesDetails.gene2AliasesList
          
          if(this.Aliases==undefined){
            this.num=0
          }else{
            this.num=this.Aliases[1].name
          }
          this.Descs=result.data.res.genesDetails.gene2DescsList
          if(this.Descs!=undefined){
            this.Descs1=this.Descs.slice(1,9)
            this.Descs2=this.Descs.slice(9,17)
          }
          if(this.genesDetails.imgRstBase64!=undefined){
            this.imgsrc4=`data:image/png;base64,${this.genesDetails.imgRstBase64}`
          }else{
            this.imgsrc4=require('../../public/img/none.png')
          }
          
          this.imgsrc5=`data:image/png;base64,${this.genesDetails.imgBase64[0]}`
        }
        if(result.data.status==200){
          this.loading=false;
        }
      })
      this.axios.get(`/pubmed/getGenesKEGGInfo`, {
        params:{genesId:this.Id}
      }).then(result=>{
        if(JSON.stringify(result.data.res.genesDetails)!="{}" && result.data.res.genesDetails!=undefined){
          this.gene2KeggMapList=result.data.res.genesDetails
        }else{
          this.gene2KeggMapList=[]
        }
        if(result.data.status==200){
          this.loading=false;
        }
      })
      
      this.axios.get(`/pubmed/getGenesGoInfo`, {
        params:{genesId:this.Id}
      }).then(result=>{
        if(JSON.stringify(result.data.res.genesDetails)!="{}" && result.data.res.genesDetails!=undefined){
          this.gene2GoList=result.data.res.genesDetails.gene2GoList
        }else{
          this.gene2GoList=[]
        }
        if(result.data.status==200){
          this.loading=false;
        }
      })
      
    },
    radioChange(){
      this.isActive=!this.isActive
    },
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    }
  },
}
</script>
<style scope>
  .contant{
    width: 100%;
    background: #E5E5E5;
    margin-top: 70px;
  }
  .contant1{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }
  .leftmemu{
    width: 200px;
    background: #0A2540;
    box-shadow: inset -10px 0px 30px 10px rgba(85, 99, 159, 0.02);
    position: fixed !important;
    z-index: 10100;
    top: 70px;
  }
  .rightinfo{
    margin-left: 200px;
    width: 1000px;
    padding: 0 0 0 20px;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box; 
  }
  .radio{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .radio>div{
    width: 111px;
    height: 36px;
    line-height: 36px;
    color: #0A2540;
    font-size: 15px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }
  .active{
    background: #0A2540 !important;
    color: #fff !important;
  }
  .gene{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }
  .zhongliu{
    width: 462px;
    margin-right: 18px;
  }
  .radioIcon>p:nth-child(1){
    font-size: 13px;
    line-height: 19px;
    color: #373858;
    margin: 10px 0;
  }
  .radioIcon>p:nth-child(2){
    font-size: 12px;
    line-height: 17px;
    color: #A0A7C1;
    margin-bottom: 10px;
  }
  .genebut{
    height: 40px;
    line-height: 40px;
    background: #0A2540;
    border-radius: 4px;
    color: #F8F7FC;
    padding: 0 10px;
  }
  .content{
    width: 100%;
    border-radius: 10px;
  }
  .el-collapse{
    border-radius: 10px;
  }
  .gengename{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .jieshao{
    width: 540px;
  }
  .jieshao>p:nth-child(1){
    font-size: 15px;
    line-height: 150%;
    color: #0A2540;
    margin-bottom: 10px;
  }
  .jieshao>p:nth-child(2){
    font-size: 12px;
    line-height: 150%;
    color: #74839A;
    margin-bottom: 10px;
  }
  .jieshao>p:nth-child(3){
    font-size: 12px;
    line-height: 150%;
    color: #74839A;
    margin-bottom: 10px;
  }
  .jieshao>p:nth-child(4){
    font-size: 12px;
    line-height: 150%;
    color: #74839A;
    margin-bottom: 10px;
  }
  .bieming{
    width: 100%;
    margin-top: 30px;
  }
  .bieming>p{
    font-size: 15px;
    line-height: 150%;
    color: #0A2540;
    margin-bottom: 16px;
  }
  .bieming1{
    display: flex;
    flex-direction: row;
  }
  .bieming1>div{
    width: 33%;
    margin-right: 20px;
  }
  .bieming1>div:nth-child(1)>p{
    font-size: 12px;
    line-height: 150%;
    color: #74839A;
    margin:10px 0;
  }
  .bieming1>div:nth-child(2)>p{
    font-size: 12px;
    line-height: 150%;
    color: #74839A;
    margin:10px 0;
  }
  .kegg{
    margin-top: 20px;
    width: 100%;
  }
  .kegg>p:nth-child(1){
    font-size: 15px;
    line-height: 150%;
    color: #0A2540;
    margin-bottom: 16px;
  }
  .el-table td,.el-table th{
    padding: 0 !important;
    
  }
  .el-table .cell{
    line-height: 17px!important;
    font-size: 12px!important;
  }
  .el-tabs__item.is-active{
    color: #0A2540!important;
  }
  .el-tabs__active-bar{
    margin-top: 14px;
    margin-left: 9px;
    height: 0px!important;
    background-color: #fff!important;
    display:inline-block;
    width:0;
    height:0;
    border-top: 5px solid transparent;
    border-left: 5px solid #0A2540;
    border-bottom: 5px solid transparent;
  }
  .el-tabs__active-bar::after{
    content: '';
    position: absolute;
    top: -5px;
    left: -7px;
    border-top: 5px solid transparent;
    border-left: 5px solid white;
    border-bottom: 5px solid transparent;
  }
  .el-tabs__nav-wrap::after{
    width: 0px!important;
  }
  .el-tabs__item{
    color: #74839A;
  }
  .el-tabs__item:hover{
    color: #0A2540!important;
  }
  .el-tabs--left, .el-tabs--right{
    background: #fff;
  }
  .tiaokong{
    overflow: hidden;
  }
  .tcga{
    display: flex;
    flex-direction: row;
    font-size: 12px;
  }
  .tcga>>>.el-color-picker__trigger{
    width: 30px;
    height: 30px;
  }
  .guanxi{
    display: flex;
    flex-direction: row;
    overflow: auto;
    height:350px;
    margin-top: 100px;
  }
  .guanxi>table>tr{
    cursor: pointer;font-size: 12px;
  }
  table{
    border-spacing:0
  }
  table tr td{
    border:1px solid #dcdcdc;
    
  }
  .guanxi>table>tr>td{
    padding: 5px;
  }
  .el-button--primary{
    background: #0A2540!important;
    border-color: #0A2540!important;
  }
  .xishu{
    line-height: 40px;
  }
  .generight{
    margin-left: 20px;
  }
  .info{
    display: flex;
    flex-direction: row;
    line-height: 40px;
  }
  .info>p{
    margin: 0;
    margin-right: 10px;
  }
  .info>.el-input--mini{
    width: 150px;
  }
  .el-table__body-wrapper{
    height: 158px!important;
  }
  .el-tabs--right .el-tabs__header.is-right{
    background: #fff!important;
  }
  .tcga{
    background: #fff;
  }
  .jianyan{
    line-height: 40px;
  }
  .jianyan>>>.el-radio{
    line-height: 40px;
    margin-right: 10px;
  }
  .jianyan>>>.el-radio__input.is-checked .el-radio__inner{
    background: #3366cc;
    border-color: #3366CC;
  }
  .jianyan>>>.el-radio__input.is-checked+.el-radio__label{
    color: #3366CC;
  }
  .edg{
    display: flex;
    flex-direction: row;
    line-height: 40px;
  }
  .edg>>>.el-select{
    line-height: 40px;
    width: 120px;
    height: 20px;
  }
  .edg>>>.el-input__inner{
    height: 25px;
  }
  .tuli1{
    line-height: 40px;
  }
  .tuli1>>>.el-select{
    line-height: 40px;
    width: 120px;
    height: 20px;
  }
  .tuli1>>>.el-input__inner{
    height: 25px;
  }
  .color1{
    line-height: 40px;
  }
  .color2{
    display: flex;
    flex-direction: row;
    line-height: 40px;
  }
  .color2>div:first-child{
    line-height: 40px;
    vertical-align: middle;
  }
  .el-color-picker{
    height: 30px!important;
    vertical-align: middle!important;
    line-height: 40px!important;
  }
  .el-color-picker__trigger {
    width: 30px!important;
    height: 30px!important;
  }
  .inp {
    width: 40px;
    height: 20px;
    margin: 0 3px;
    margin-top: 12px;
  }
  .kegg>>>.el-select {
    line-height: 40px!important;
    width: 170px!important;
    height: 40px!important;
  }
  .kegg>>>.el-input__inner {
    height: 30px!important;width: 170px!important;
  }
  .download1{
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    background: #fff;
    overflow: hidden;
    padding-left: 10px;
    height: 220px;
  }
  .download1>div{
    width: 50%;
  }
  .download1>div>p{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .download1>div:nth-child(1){
    margin-right: 20px;
  }
  .download1>div:nth-child(2)>div>>>.el-button--primary{
    background: #3366cc;
    border-color: #3366CC;
  }
  .xiangguanxing{
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    background: #fff;
  }
  .xiangguanxing>div:nth-child(1){
    width: 500px;
  }
  .xiangguanxing>div:nth-child(2){
    width: 280px;
    margin-left: 20px;
  }
  .yansezhi{
    display: flex;
    flex-direction: row;
  }
  .yansezhi>div{
    width: 50%;
  }
  .yansezhi>div>div{
    display: flex;
    flex-direction: row;
    line-height: 30px;
  }
  
  .innp1 {
    width: 60px;
    height: 20px;
    margin: 0 3px;
    margin-top: 6px;
  }
  .el-collapse{
    box-shadow: 0px 2px 4px rgba(153, 154, 172, 0.7);
    
    background: #fff;
  }
  .el-collapse-item__header{
    font-size: 20px;
    padding: 0 10px;
    background-color: rgb(10, 37, 64);
    color: #fff;
  }
  .el-collapse-item__wrap{
    padding: 0 10px;
  }
  .baibg{
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(153, 154, 172, 0.7);
    border-radius: 10px;
    padding: 12px;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .leftmemu{
    border-radius: 0 0 10px 10px!important;
  }
  .el-menu-item{
    border-radius: 0 0 10px 10px!important;
  }
  .el-menu-item, .el-submenu__title{
    line-height: 20px!important;
    overflow: hidden;
  }
  .el-collapse>.el-collapse-item:nth-child(1)>div>.el-collapse-item__header{
    border-radius: 10px 10px 0px 0px;
  }
  .el-collapse>.el-collapse-item:last-child>div>.el-collapse-item__header{
    border-radius: 0px 0px 10px 10px;
  }
  .el-menu>.el-menu-item:last-child{
    border-radius: 0px 0px 10px 10px;
  }
  .el-menu{
    border-radius: 0px 0px 10px 10px;
  }
  .generight1{
    width: 280px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .is-right{
    width: 168px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>