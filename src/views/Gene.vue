<template>
  
  <div>
    <Header></Header>
    <div class="SearchBackground">
      <div class="searchContent">
        <div class="preface">
          <div>
            <p>{{ $t('lang.qian')}}</p>
            <p>GetGene</p>
            <div :style="{'text-align':($i18n.locale=='zh'?'left':'justify')}" :title="$t('lang.introduce')">{{ $t('lang.introduce')}}</div>
            <div class="introduce">
              <div>
                <p>{{ $t('lang.kuai')}}</p>
                <p :title="$t('lang.kuai1')">{{ $t('lang.kuai1')}}</p>
              </div>
              <div>
                <p>{{ $t('lang.quan')}}</p>
                <p :title="$t('lang.quan1')">{{ $t('lang.quan1')}}</p>
              </div>
              <div>
                <p>{{ $t('lang.qiang')}}</p>
                <p :title="$t('lang.qiang1')">{{ $t('lang.qiang1')}}</p>
              </div>
              <div>
                <p>{{ $t('lang.ling')}}</p>
                <p :title="$t('lang.ling1')">{{ $t('lang.ling1')}}</p>
              </div>
            </div>
            <div class="quote" :style="{'height':($i18n.locale=='zh'?'100px':'120px')}" >
              <p>{{ $t('lang.yin')}}</p>
              <p>{{ $t('lang.zhu')}}</p>
            </div>
          </div>
        </div>
        <div class="explain">
          <div>
            <div class="explain1">
              <p><span>{{ $t('lang.shuoming')}}</span>{{ $t('lang.shuo1')}}</p>
              <p>STEP ONE</p>
              <div class="radio">
                <div :style="{width:($i18n.locale=='zh'?'111px':'200px')}" :class="{ 'active': !isActive }" @click="radioChange">{{ $t('lang.duo')}}</div>
                <div :style="{width:($i18n.locale=='zh'?'111px':'200px')}" :class="{ 'active': isActive }" @click="radioChange">{{ $t('lang.dan')}}</div>
                <div class="bangzhu" @click="open">?</div>
              </div>
              <div class="radioIcon" v-show="isActive">
                <div v-for="(item,i) of iconList1" :key="i" @click="danclk(item.cancerNameEn)">
                  <div :style="{background:(danlist==item.cancerNameEn?'#0A2540':'#737E88')}" :title="item.cancerNameCn+'  '+item.cancerNameEnQuan">
                    <img :src="item.url" alt="" style="vertical-align: middle;width:62px;height:62px" srcset="">
                  </div>
                  <p :style="{color:(danlist==i?'#0A2540':'#737E88')}">{{item.cancerNameEn}}</p>
                </div>
              </div>
              <div class="radioIcon" v-show="!isActive">
                <div v-for="(item,i) of iconList2" :key="i" @click="duoclk(item.cancerNameEn)">
                  <div :style="{background:(duolist.indexOf(item.cancerNameEn)!=-1?'#0A2540':'#737E88')}" :title="item.cancerNameCn+'  '+item.cancerNameEnQuan">
                    <img :src="item.url" alt="" style="vertical-align: middle;width:62px;height:62px" srcset="">
                  </div>
                  <p :style="{color:(duolist.indexOf(item.cancerNameEn)!=-1?'#0A2540':'#737E88')}">{{item.cancerNameEn}}</p>
                </div>
              </div>
              <el-select class="zhongliu" v-show="isActive" v-model="danlist" :placeholder="$i18n.locale=='zh'?'请选择肿瘤类型':'Please select tumor type'">
                <el-option
                  v-for="item in iconList1"
                  :key="item.cancerNameEn"
                  :label="item.cancerNameEn"
                  :value="item.cancerNameEn">
                </el-option>
              </el-select>
              <el-select class="zhongliu" v-show="!isActive" v-model="duolist" multiple @change="duoclk1" :placeholder="$i18n.locale=='zh'?'请选择肿瘤类型':'Please select tumor type'">
                <el-option
                  v-for="item in iconList2"
                  :key="item.cancerNameEn"
                  :label="item.cancerNameEn"
                  :value="item.cancerNameEn">
                </el-option>
              </el-select>
              <div class="shuoming">
                <p><span>{{ $t('lang.shuoming')}}</span>{{ $t('lang.shuo2')}}</p>
              </div>
              <p style="font-size: 30px;line-height: 150%;color: #0A2540;margin-top:24px">STEP TWO</p>
              <el-autocomplete
                class="steptwo" @input="searchContent==''?'':Fund()" @keyup.13.native="searcher()"
                v-model="searchContent"
                :fetch-suggestions="querySearch"
                placeholder="e.g.TP53/ENSG00000141510/P04637"
                :trigger-on-focus="false"
                @select="handleSelect;searcher()"
              ></el-autocomplete>
            </div>
            <div class="goget" @click="search2();searcher()">GoGet！</div>
            <div class="table">
              <el-table :data="genesList.filter(data => !search1 || data.name.toLowerCase().includes(search1.toLowerCase()))"  border style="width: 100%">
                <el-table-column label="Symbol" width="135">
                  <template slot-scope="scope">
                    <span @click="handleGoods(scope.row)" class="scopeName" style="margin:0;cursor: pointer;">{{scope.row.name}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="desc" label="Description" width="500">
                </el-table-column>
                <el-table-column prop="geneType">
                  <template slot="header" slot-scope="scope">
                    <el-input v-model="search1" size="mini" :placeholder="$i18n.locale=='zh'?'输入关键字搜索':'Input keyword search'"/>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                layout="prev, pager, next" 
                :total="this.result1">
              </el-pagination>
            </div>
          </div>
          <div>
            <div class="hort">
              <div>
                <div class="dian" style="background: #00D4FF;"></div>
                <p>{{ $t('lang.re')}}</p>
              </div>
              <div class="pd">
                <div v-for="(item,i) of 4" :key="i">PD-1</div>
              </div>
            </div>
            <div class="hort" style="margin-top:20px">
              <div>
                <div class="dian" style="background: #EB2F96;"></div>
                <p>{{ $t('lang.tong')}}</p>
              </div>
              <div class="tongji">
                <div id="tongji1" :style="{width: '270px', height: '984px'}"></div>
              </div>
            </div>
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
      isActive:false,danlist:'ACC',duolist:['ACC'],searchContent:'',result1:0,genesList:[],search1:'',currentPage:1,code:'?code=061VlpZz0I8drc1DDK1A0GHpZz0VlpZM&state=STATE',
      name:[],data:[],iconList1:[],iconList2:[]
    }
  },
  components:{
    Header
  },
  created() {
  },
  mounted() {
    this.axios.get('/pubmed/getCancerCount').then(res=>{
      var listCancer=res.data.res.listCancer
      listCancer.sort((a,b)=>{ return a.count-b.count})//升序
      for(var a of listCancer){
        this.name.push(a.TCGACode)
        this.data.push(a.count)
      }
      this.createCytoscape()
    })
    this.axios.get('/pubmed/getCancerAll').then(res=>{
      var a=JSON.parse(JSON.stringify(res.data.res.listCancer))
      a.shift()
      this.iconList1=a
      this.iconList2=res.data.res.listCancer
      var b=[]
      for(var a of this.iconList2){
        b.push(a.cancerNameEn)
      }
      this.duolist=b
    })
    
    setTimeout(function(){
      window.scrollTo({ 
        top: 700, 
        behavior: "smooth" 
    });
    },3000)
    
  },
  updated(){
    
  },
  activated(){
    this.getRouterData()
    
  },
  methods: {
    open() {
      var info=`ACC  Adrenocortical carcinoma  肾上腺皮质癌 
        BLCA  Bladder Urothelial Carcinoma  膀胱尿路上皮癌 
        BRCA  Breast invasive carcinoma  乳腺浸润癌 
        CESC  Cervical squamous cell carcinoma and endocervical adenocarcinoma  宫颈鳞癌和腺癌 
        CHOL  Cholangiocarcinoma  胆管癌 
        COAD  Colon adenocarcinoma  结肠癌 
        DLBC  Lymphoid Neoplasm Diffuse Large B-cell Lymphoma  弥漫性大B细胞淋巴瘤 
        ESCA  Esophageal carcinoma  食管癌 
        GBM  Glioblastoma multiforme  多形成性胶质细胞瘤 
        HNSC  Head and Neck squamous cell carcinoma  头颈鳞状细胞癌 
        KICH  Kidney Chromophobe  肾嫌色细胞癌 
        KIPAN  Pan-kidney cohort (KICH+KIRC+KIRP)  混合肾癌 
        KIRC  Kidney renal clear cell carcinoma  肾透明细胞癌 
        KIRP  Kidney renal papillary cell carcinoma  肾乳头状细胞癌 
        LAML  Acute Myeloid Leukemia  急性髓细胞样白血病 
        LGG  Brain Lower Grade Glioma  脑低级别胶质瘤 
        LIHC  Liver hepatocellular carcinoma  肝细胞肝癌 
        LUAD  Lung adenocarcinoma  肺腺癌 
        LUSC  Lung squamous cell carcinoma  肺鳞癌 
        MESO  Mesothelioma  间皮瘤 
        OV  Ovarian serous cystadenocarcinoma  卵巢浆液性囊腺癌 
        PAAD  Pancreatic adenocarcinoma  胰腺癌 
        PCPG  Pheochromocytoma and Paraganglioma  嗜铬细胞瘤和副神经节瘤 
        PRAD  Prostate adenocarcinoma  前列腺癌 
        READ  Rectum adenocarcinoma  直肠腺癌 
        SARC  Sarcoma  肉瘤 
        SKCM  Skin Cutaneous Melanoma  皮肤黑色素瘤 
        STAD  Stomach adenocarcinoma  胃癌 
        STES  Stomach and Esophageal carcinoma  胃和食管癌 
        TGCT  Testicular Germ Cell Tumors  睾丸癌 
        THCA  Thyroid carcinoma  甲状腺癌 
        THYM  Thymoma  胸腺癌 
        UCEC  Uterine Corpus Endometrial Carcinoma  子宫内膜癌 
        UCS  Uterine Carcinosarcoma  子宫肉瘤 
        UVM  Uveal Melanoma  葡萄膜黑色素瘤`
      this.$alert(info, '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    createCytoscape() {
      var echarts1 = document.getElementById("tongji1");
      // 绘制图表
      if(echarts1){
        if(this.$i18n.locale=='zh'){
          var a = '样本数量'
        }else{
          var a = 'Number of samples'
        }
        let myChart = this.echarts.init(echarts1)
        myChart.clear();
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            splitLine:{
              show:false
            },
          },
          yAxis: {
            splitLine:{
              show:false
            },
            type: 'category',
            data: this.name
          },
          series: [{
            name: a,
            type: 'bar',
            stack: '总量',
            itemStyle:{
              color: '#ADBDCC'
            },
            label: {
              show: true,
              position: 'right'
            },
            data: this.data
          },]         
        })
      }
    },
    searcher(){
      if(!this.searchContent){
        this.searchContent='tp53'
      }
      var qs=require('qs');
      this.axios.post(`/pubmed/searchGenesInfo`, qs.stringify({
        query:this.searchContent,
        page:this.currentPage
      })).then(result=>{
        // console.log(result.data.res)
        if(JSON.stringify(result.data.res)!="{}" && result.data.res!=undefined){
          this.genesList=result.data.res.genesList.searchData
          this.result1=result.data.res.genesList.searchTotal
          // console.log(this.result1)
          if(this.genesList.length==1){
            if(this.isActive){
              var a = this.danlist
              var b = 'dan'
            }else{
              var a = this.duolist
              var b = 'duo'
            }
            const {href}=this.$router.resolve({
              path: '/Monogenic',
              query: {
                search1:`${this.searchContent}`,
                Id:`${this.genesList[0].geneID}`,
                gene:a,
                lei:b
              },
            })
            window.open(href,'_blank')
          }
        }else{
          this.genesList=[]
        }
        if(result.data.status==200){
          this.loading=false;
        }
      })
    },
    handleCurrentChange(currentPage){
      if(typeof(currentPage)!='undefined' && currentPage!=1){
        this.currentPage = currentPage;
        this.searcher()
      }else if(currentPage==1){
        this.currentPage = 1
        this.searcher()
      }else {
        this.currentPage =this.$route.query.page*1 || 1
        currentPage=this.currentPage
        this.searcher()
      }
    },
    search2(){
      if(this.isActive){
        var a = this.danlist
        var b = 'dan'
      }else{
        var a = this.duolist
        var b = 'duo'
      }
      this.$router.push({
        path:'/Gene',
        query:{
          search1:this.searchContent,page:this.currentPage,gene:a,lei:b
        }
      })
    },
    handleSelect(){
    },
    querySearch(queryString, cb) {
      if(this.jus!='' || this.jus.length>0){
        var restaurants = this.jus;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      }
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },  
    Fund(){
      var qs=require('qs')
      this.$axios.get(`/pubmed/completionGenesSuggester`, {
        params:{
          query:this.searchContent
        },paramsSerializer: function(params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        },
      }).then(result=>{
        // console.log(result.data)
        if(result.data.res!=undefined){
          this.searchCompletion=result.data.res.completionList.searchCompletion;
          this.jus=[]
          for(let i=0;i<(this.searchCompletion).length;i++){
            this.jus.push({'value':this.searchCompletion[i]})
          }
        }
        if(result.data.status==500){
          this.$message({
            message: '不能为空',
            type: 'warning'
          });
        }
      }) 
      this.isShow = true
    },
    getRouterData(){
      this.searchContent=this.$route.query.search1
    },
    handleGoods(scope){
      const {href}=this.$router.resolve({
        path: '/Monogenic',
        query: {
          search1:`${this.searchContent}`,
          Id:`${scope.geneID}`
        },
      })
      window.open(href,'_blank')
    },
    radioChange(){
      this.isActive=!this.isActive
    },
    danclk(i){
      this.danlist=i
    },
    duoclk(i){
      if(i=='PanCancer'){
        if(this.duolist.indexOf(i)!=-1){
          this.duolist=[]
        }else{
          var b=[]
          for(var a of this.iconList2){
            b.push(a.cancerNameEn)
          }
          this.duolist=b
        } 
      }else{
        if(this.duolist.indexOf(i)!=-1){
          if(this.duolist.indexOf('PanCancer')!=-1){
            this.duolist=[]
          }else{
            this.duolist.splice(this.duolist.indexOf(i),1)
          }
          
        }else{
          this.duolist.push(i)
        }
      }
      
    },
    duoclk1(val){
      if(val.pop()=='PanCancer'){
        this.duolist=[]
        var b=[]
        for(var a of this.iconList2){
          b.push(a.cancerNameEn)
        }
        this.duolist=b
      }
    },
    handleGoods(scope){
      const {href}=this.$router.resolve({
        path: '/Monogenic',
        query: {
          search1:`${this.steptwo}`,
          Id:`${scope.geneID}`
        },
      })
      window.open(href,'_blank')
    },
  },
}
</script>
<style scoped>
  @import '../assets/css/reset.css';
  .SearchBackground{
    background: #F8F7FC;
    width: 100%;
  }
  .searchContent{
    width: 1200px;
    
    margin: 0 auto;
    margin-top: 100px;
  }
  .preface{
    width: 1200px;
    height: 580px;
    margin-top: 30px;
    
    background-image: url('../../public/img/prefaceBG.png');
    overflow: hidden;
  }
  .preface>div{
    padding: 24px 32px;
  }
  .preface>div>p:nth-child(1){
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #00D4FF;
    margin-bottom: 25px;
  }
  .preface>div>p:nth-child(2){
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 150%;
    color: #FFFFFF;
  }
  .preface>div>div:nth-child(3){
    width: 500px;
    height: 135px;
    font-size: 18px;
    line-height: 150%;
    color: #8EA0B1;
    margin-top: 16px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .introduce{
    display: flex;
    flex-direction: row;
    margin-top: 38px;
  }
  .introduce>div{
    width: 240px;
    margin-right: 20px;
    padding-left: 16px;
  }
  .introduce>div>p:nth-child(1){
    margin-left: -16px;
    padding-left: 16px;
    font-size: 22px;
    border-left: 1px solid #00D4FF;
    color: #FFFFFF;
    margin-bottom: 8px;
  }
  .introduce>div>p:nth-child(2){
    font-size: 15px;
    line-height: 150%;
    color: #8EA0B1;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .quote{
    width: 1200px;
    margin-left: -32px;
    margin-top: 30px;
    background: rgba(255, 255, 255, 0.3);
    height: 100px;
    padding: 16px 32px;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box; 
  }
  .quote>p:nth-child(1){
    font-size: 18px;
    line-height: 150%;
    color: #F8F7FC;
    margin-bottom: 15px;
  }
  .quote>p:nth-child(2){
    font-size: 15px;
    line-height: 150%;
    color: #F8F7FC;
  }
  .explain{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .explain>div:nth-child(1){
    width: 880px;margin-right: 20px;
  }
  .explain1{
    width: 880px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(153, 154, 172, 0.7);
    border-radius: 10px;
    
    padding: 24px 32px;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box; 
  }
  .explain1>p:nth-child(1){
    font-size: 13px;
    line-height: 150%;
    color: #FF4F0D;
  }
  .explain1>p:nth-child(1)>span{
    font-size: 18px;
    line-height: 150%;
    color: #373858;
    margin-right: 5px;
  }
  .shuoming>p{
    margin-top: 28px;
    font-size: 13px;
    line-height: 150%;
    color: #FF4F0D;
  }
  .shuoming>p>span{
    font-size: 18px;
    line-height: 150%;
    color: #373858;
    margin-right: 5px;
  }
  .explain>div:nth-child(2){
    width: 300px;
  }
  .explain1>p:nth-child(2){
    font-size: 30px;
    line-height: 150%;
    color: #0A2540;
    margin-top: 37px;
  }
  .radio{
    display: flex;
    flex-direction: row;
  }
  .radio>div{
    width: 111px;
    height: 36px;
    line-height: 36px;
    color: #0A2540;
    background: #fff;
    font-size: 15px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }
  .active{
    background: #0A2540 !important;
    color: #fff !important;
  }
  .radioIcon{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #F6F9FB;
    border: 1px solid #E7E7E7;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box; 
    border-radius: 2px;
    padding: 10px 0 ;
  }
  .radioIcon>div{
    margin-left: 10px;
  }
  .radioIcon>div>div{
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: #737E88;
    line-height: 62px;
    vertical-align: middle;
    text-align: center;
  }
  .radioIcon>div>p{
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #0A2540;
    margin:10px 0; 
  }
  .zhongliu{
    width: 100%;
    margin-top: 17px;
  }
  .steptwo{
    width: 100%;
    margin-top: 17px;
  }
  .goget{
    width: 100%;
    height: 42.97px;
    line-height: 42.97px;
    background: #0A2540;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    margin-top: 17px;
    cursor: pointer;
  }
  .goget:hover{
    background: #ADBDCC;cursor: pointer;
  }
  .goget:active{
    background: #fff;color: #000;
  }
  .table{
    width: 100%;
    background: #fff;
    margin-top: 20px;
    padding: 10px;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box; 
    box-shadow: 0px 2px 4px rgba(153, 154, 172, 0.7);
    border-radius: 10px;
  }
  .hort{
    width: 100%;
    padding: 10px 15px;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(153, 154, 172, 0.7);
    border-radius: 10px;
  }
  .hort>div{
    display: flex;
    flex-direction: row;
  }
  .dian{
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
    margin-top:9px
  }
  .hort>div>p{
    font-size: 16px;
    line-height: 150%;
    color: #0A2540;
  }
  .pd{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 25px 0;
  }
  .pd>div{
    width: 46px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 2px;
    color: #0A2540;
    margin-right: 12px;
  }
  .pd>div:hover{
    color: #00D4FF;
    cursor: pointer;
  }
  .bangzhu{
    margin-left: 10px;
    width: 36px!important;
    height: 36px!important;
    border-radius: 50%!important;
    text-align: center;
    line-height: 36px;
    background: #0A2540!important;
    color: #fff!important;
    font-size: 20px!important;
  }
  .el-message-box__message p{
    font-size: 12px!important;
  }
</style>