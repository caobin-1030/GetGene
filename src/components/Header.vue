<template>
  <div class="header isFixed"  id="boxFixed">
    <div class="header1">
      <div class="logo">
        <img src="../../public/img/logo.png" alt="" srcset="">
      </div>
      <div class="Navigation">
        <ul>
          <li @click="toGene">{{ $t('lang.home')}}</li>
          <li >{{ $t('lang.doc')}}</li>
          <li >{{ $t('lang.comm')}}</li>
        </ul>
      </div>
      <div class="login">
        <button style="margin-right:10px"  @click="changeLaguages()">
          {{lang}}
        </button>
        <button style="margin-right:10px">
          {{ $t('lang.login')}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFixed:false,lang:'zh'
    }
  },
  mounted() {
    if(localStorage.getItem('lang')==null){
      localStorage.setItem('lang',this.lang)
    }else{
      this.$i18n.locale = localStorage.getItem('lang')
    }
  },
  methods: {
    changeLaguages () {
      this.lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = this.lang
      localStorage.setItem('lang',this.lang)
    },
    toGene(){
      const {href} =this.$router.resolve({
        path:'/Gene',
        query:{
          search1:'',page:1
        }
      })
      window.open(href,'_self')
    },
    
  },
}
</script>
<style scope>
  @import '../assets/css/reset.css';
  .header {
    width: 100%;
    background: #0A2540;
    height: 70px;
    line-height: 70px;
  }
  .header1 {
    width: 1200px;
    margin: 0 auto;
    height: 70px;
    display: flex;
    flex-direction: row;
  }
  .logo{
    width: 210px;
  }
  .logo>img {
    vertical-align: middle;
    margin-left: 32px;
  }
  .Navigation{
    width: 790px;
    margin-right: 70px;
  }
  .Navigation>ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: center;
    line-height: 70px;
  }
  .Navigation>ul>li{
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:#8EA0B1;
    margin:0 30px;
    height: 66px;
  }
  .Navigation>ul>li:hover{
    color: #ADBDCC;
    border-bottom: 2px solid #ADBCCB;
    cursor: pointer;
  }
  .login{
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
    line-height: 70px;
  }
  .login>button{
    color: #000;
    background: #fff;
    width: 84px;
    height: 33px;
    border: none;
    margin-top: 19px;
    border-radius: 2px;
  }
  .isFixed{
    width: 100%;
    height: 70px;
    position: fixed !important;
    z-index: 10100;
    top: 0;
  }
</style>