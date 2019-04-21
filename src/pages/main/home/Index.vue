<template>
    <div class="home-container" v-loading="loading">
      <!--轮播图-->
      <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide v-for="(slide, index) in ads" :key="index">
          <a :href="slide.url">
            <img :src="slide.img" alt="slide.title">
          </a>
        </swiper-slide>
        <div class="swiper-pagination banner-swiper" slot="pagination"></div>
      </swiper>

      <!--公告 notice start-->
      <div class="notice_box">
        <!--<router-link :to="{name: 'Notice',params:{id: 1}}">aaaa</router-link>-->
        <div class="w_new">
          <span>公告</span>
        </div>
        <div class="notice-swiper-box">
          <swiper :options="swiperNotice" class="swiper-notice">
            <swiper-slide v-for="(notice, index) in notices" :key="index">
              <a :href="notice.url">
                <div>{{ notice.theme }}
                  <!-- <span>活动时间：{{ notice.date }}</span> -->
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!--公告 notice end-->

      <!--资讯 start-->
      <div class="index-content information">
        <div class="tit">
          <h3>资讯</h3>
          <span @click="gotoList('information')">查看全部</span>
        </div>
        <div class="item" v-for = "info in information" :key="info.id">
          <router-link :to="{ name: 'InformationDetail',params: { id: info.id }}">
            <div class="left">
              <h5>{{ info.title }}</h5>
              <small>
                <span>{{ info.author }}</span>
              </small>
            </div>
            <div class="right">
              <img :src="info.pic" alt=""/>
            </div>
          </router-link>
        </div>
      </div>
      <!--资讯 end-->

      <!--套餐 start-->
      <div class="index-content setMeal">
        <div class="tit">
          <h3>VIP套餐</h3>
          <span @click="gotoList('setMeal')">查看全部</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="course_package in packages" :key="course_package.id">
              <router-link :to="{name: 'SetMealDetail', params:{ pid: course_package.id }}">
                <div class="item">
                  <div class="type">
                    <span class="classname">{{ course_package.name }}</span>
                    <dl class="clearfix">
                      <dd v-for="teacher in course_package.teacher" :key="teacher.id">
                        <img :src="teacher.pic" class="terImg"  />
                        <span>{{ teacher.name }}</span>
                      </dd>
                    </dl>
                    <span class="classs">{{ course_package.course_num }}门课程</span>
                  </div>
                  <div class="prisebox">
                    <span class="prise">￥{{course_package.price}}</span>
                    <span class="bought"><i></i>{{course_package.online}}</span>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!--精品课程 start-->
      <div class="index-content exCourse">
        <div class="tit">
          <h3>精品课程</h3>
          <span @click="gotoList('exCourse')">查看全部</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="course in courses" :key="course.id">
              <router-link :to="{'name': 'ClassShare', params:{id: course.id}}">
                <div class="item clearfix">
                  <div class="img_txt">
                    <img :src="course.list_pic"  />
                  </div>
                  <div class="info">
                    <h5>{{ course.course_name }}</h5>
                    <span class="by">{{ course.teacher }}</span>
                    <span class="alreay">已更新至<i>{{ course.classrooms }}</i>课时</span>
                    <div class="prise">
                      <span>{{ course.discount }}</span>
                      <span class="bought">
                        <i></i>
                        <span>{{ course.online }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--升本公开课 start-->
      <!-- <div class="index-content publicClass">
        <div class="tit">
          <h3>升本公开课</h3>
          <span>查看全部</span>
        </div>
        <div class="list">
          <div class="viedoCont" v-if="showVideo">
            <div class="cont">
              <div class="close-video-btn">
                <img src="../../../assets/img/close-video-btn.png"  @click="hideModal" >
              </div>
              <video class="video" id="video" :src="course_url" :poster="pic" controls="controls" autoplay>
              </video>
            </div>
          </div>
          <ul>
            <li v-for="cass in opens" :key="cass.id">
                <div class="item" @click="check(cass.id,cass.list_pic)">
                  <img :src="cass.list_pic">
                  <div class="txt" >
                    <span class="classtype">{{cass.course_name}}</span>
                    <strong class="tip">{{cass.intro}}</strong>
                    <span class="time">
                      <i></i>
                      <label>{{cass.duration}}</label>
                    </span>
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </div> -->
      <!-- 推荐图书 -->
      <div class="index-content recommdBooks">
        <div class="tit">
          <h3>推荐图书</h3>
          <span @click="gotoList('recommdBooks')">查看全部</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="book in books" :key="book.id">
              <router-link :to="{'name': 'LibraryDetail', params:{id: book.id}}">
                <div class="inner clearfix">
                  <div class="img">
                    <img :src="book.pic">
                  </div>
                  <div class="info">
                    <h5>{{book.name}}</h5>
                    <div class="intro">
                      {{book.intro}}
                    </div>
                    <div class="prise">
                      <strong>{{book.order_price}}预订价</strong>
                      <span><strike>￥{{book.price}}</strike>售价</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--python 弹窗 start-->
      <transition name="fade">
        <div class="recenLearning" v-show="recentLearningShow">
          <div class="cont">
            <span class="close" @click="recentLearningShow = !recentLearningShow"></span>
            <a href="#">
              <div class="pic">
                <img src="../../../assets/img/img4.png"  />
                <span>最近学习</span>
              </div>
              <div class="txt">
                <h5>语言程序设计</h5>
                <span>课程内容渐进式进行</span>
              </div>
              <span class="moreicon"></span>
            </a>
          </div>
        </div>
      </transition>
      <!--python 弹窗 end-->

    </div>
</template>

<script>
  // require styles
  import 'swiper/dist/css/swiper.css'
  import service from '@/http/services'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      name: "home",
      components:{
          swiper,
          swiperSlide
      },
      data() {
        return {
          swiperOption: {
            // some swiper options/callbacks
            // 所有的参数同 swiper 官方 api 参数
            // ...
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
            loop : true,
          },
          swiperNotice:{
            autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
            loop : true,
            direction : 'vertical',
          },
          token: this.$cookies.get('access_token'),
          // 是否显示最近在学
          recentLearningShow: false,
          // 幻灯片
          ads: [],
          // 公告
          notices: [],
          // 资讯
          information: [],
          // vip套餐
          packages: [],
          // 精品课程
          courses: [],
          // 公开课
          opens: [],
          // 推荐图书
          books: [],
          // 最近在学
          recentStudy: {},
          // 加载动画
          loading: true
        }
      },
      methods: {
        getHomeData() {
          service.homeService.getHomeData(this.token).then(res => {
            if (res.status === 200 && res.data.status === 0) {
              this.ads = res.data.data.ads;
              this.notices = res.data.data.notices;
              this.information = res.data.data.information;
              this.packages = res.data.data.packages;
              this.courses = res.data.data.courses;
              this.opens = res.data.data.opens;
              this.books = res.data.data.books;
              this.loading = false;
              if(this.token && this.recent) {
                this.recentStudy = this.recent
              }
            }
          })
        },
        gotoList(tag) {
          switch(tag) {
            case 'information':
              this.$router.push('informationList');
              break;
            case 'setMeal':
              this.$router.push('SetMeal');
              break;
            case 'exCourse':
              this.$router.push('ClassQuality');
              break;
            case 'recommdBooks':
              this.$router.push('Library');
              break;
          }
        }
      },
      mounted () {
        this.getHomeData();
      },
      computed: {
        swiper () {
          return this.$refs.mySwiper.swiper
        }
      }
    }
</script>
