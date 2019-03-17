<!--套餐详情-->
<template>
    <div class="font-box">
      <!-- <TopBack>
        <span slot="headerTxt">{{ packageDetail.package.name }}</span>
      </TopBack> -->
      <!--nav start-->
      <div class="detailImg">
        <div class="share" @click="showShare"></div>
        <div  class="indexBanner top_0124" >
          <div class="top">
            <span>2019年</span>
            <strong><i></i>山东<i></i></strong>
            <span>专升本</span>
          </div>
          <div class="type">
            <strong>《 {{ packageDetail.package.name }} 》</strong>
            <strong>VIP套餐班</strong>
          </div>
          <ul class="clearfix">
            <li>
              <a href="#">
                <div class="item">
                  <span>知识</span><span>精讲</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <span>同步</span><span>训练</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <span>通关</span><span>测试</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <span>即时</span><span>答疑</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--nav end-->

      <!--tabs-->
      <tab active-color="#DB2C1B" :line-width="2" class="custom-tab">
        <tab-item selected @on-item-click="onItemClick">介绍</tab-item>
        <tab-item @on-item-click="onItemClick">课程</tab-item>
      </tab>

      <!--tab content-->
      <transition-group name="fade" mode="out-in" tag="div">

        <div v-if="activeIndex == 0" key="0">
          <div class="tab-bd">
            <div class="tab-pal">
              <div class="courseLst">
                <h3>简介</h3>
                <div class="main" v-html="packageDetail.package.intro"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="courseLst" key="1" v-if="activeIndex == 1">
          <h3>课程</h3>
          <div class="list">
            <ul>
              <li v-for="course in packageDetail.course" :key="course.id">
                <router-link :to="{'name': 'ClassShare', params:{id: course.id}}">
                  <div class="item">
                    <h5>{{ course.name }}</h5>
                    <span class="prise">单价￥{{ course.discount }}</span>
                    <span class="classHours">课时{{ course.classrooms }}</span>
                    <i class="turn"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

      </transition-group>

      <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>

      <div class="botFixed" v-show="!pay">
        <div class="cont clearfix">
          <div class="left">
            <ul class="clearfix">
              <li>
                <a href="javascript:;">
                  <i class="consult"></i>
                  <span>咨询</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="collect" :class="{ on: collect}" @click="collect = !collect"></i>
                  <span>收藏</span>
                </a>
              </li>
              <li class="money">
                <a href="javascript:;">
                  <strong>￥{{ packageDetail.package.discount }}</strong>
                  <span><s>￥{{ packageDetail.package.price }}</s></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="right" v-if="packageDetail.package">
            <router-link :to="{'name': 'PayCenter', params:{info: packageDetail.package}}" class="btn">立即购买</router-link>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import  service from '@/http/services/package.js'
    export default {
      name: "SetMealDetail",
      data(){
        return{
          pid: 0,
          datas:['1','2'],
          activeIndex: 0,
          share: false,
          packageDetail: {
            package: '',
            course: ''
          },
          pay: false,
          collect: false,
        }
      },
      created() {
        this.pid = this.$route.params.pid;
        console.log("pid",this.$route.params.pid);
      },
      components: {
        Tab,
        TabItem
      },
      methods:{
        onItemClick(index){
          this.activeIndex = index;
        },
        changeShare(msg){
          this.share = msg;
        },
        showShare(){
          this.share = true;
        },

        getPackageDetail() {
          service.packageService.packageDetail({pid: this.pid}).then(res => {
            if (res.status === 200 && res.data.status === 0) {
              this.packageDetail.package = res.data.package;
              this.packageDetail.course = res.data.course;
              console.log(this.packageDetail);
            } else {
              alert('wrong!');
            }
          })
        }
      },

      mounted: function () {
        this.getPackageDetail();
      }
    }
</script>