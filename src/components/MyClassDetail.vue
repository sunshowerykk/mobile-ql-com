<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">{{ courseVideo.course.course_name }}</span>
      </TopBack>
      <div class="detailImg">
        <div class="img-box">
          <div class="classname">
            <h5>{{ courseVideo.course.course_name }}</h5>
            <strong>{{ courseVideo.course.course_name }}</strong>
            <div class="school">
              <span>{{ courseVideo.teacher.unit}}</span>
              <span>{{ courseVideo.teacher.username}} 等</span>
            </div>
          </div>
        </div>
      </div>

      <!--<sticky>
        <tab :line-width=2 active-color="#DB2C1B">
          <tab-item selected>视频</tab-item>
          <tab-item >视频</tab-item>
        </tab>
      </sticky>-->
      <sticky>
        <tab active-color="#DB2C1B" default-color="#333333" :line-width="2" class="class-detail-tab-box">
          <tab-item selected @on-item-click="onItemClick">视频</tab-item>
          <tab-item @on-item-click="onItemClick">作业</tab-item>
          <tab-item @on-item-click="onItemClick">测验</tab-item>
          <tab-item @on-item-click="onItemClick">答疑</tab-item>
        </tab>
      </sticky>

      <transition name="fade" mode="out-in">
        <div v-if="indexActive == 0" key="0">

          <group title="" class="class-group">
            <cell
              class="cell-class"
              title="计算机基础知识"
              is-link
              :border-intent="false"
              :arrow-direction="showContent001 ? 'up' : 'down'"
              @click.native="showContent001 = !showContent001"
            ></cell>

            <template v-if="showContent001">
              <dl class="class-item">
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
              </dl>
            </template>

            <cell
              class="cell-class"
              title="计算机基础知识"
              is-link
              :border-intent="false"
              :arrow-direction="showContent002 ? 'up' : 'down'"
              @click.native="showContent002 = !showContent002"></cell>

            <template v-if="showContent002">
              <dl class="class-item">
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
              </dl>
            </template>

            <cell
              class="cell-class"
              title="计算机基础知识"
              is-link
              :border-intent="false"
              :arrow-direction="showContent003 ? 'up' : 'down'"
              @click.native="showContent003 = !showContent003"></cell>

            <template v-if="showContent003">
              <dl class="class-item">
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
                <dd>
                  <a href="#">
                    <div class="item clearfix">
                      <div class="left">
                        <span class="type">视频</span>
                        <span class="name">计算机基础知识</span>
                      </div>
                      <div class="right">
                        <span class="already">已学0%</span>
                        <span class="time"><i></i>1:20</span>
                      </div>
                    </div>
                  </a>
                </dd>
              </dl>
            </template>

          </group>
        </div>
        <div v-else-if="indexActive == 1" key="1">
          <div class="tab-pal">
            <div class="workDetail">
              <span>应交作业<strong class="must">18</strong>次，实交作业<strong class="real">12</strong>次</span>
            </div>
            <div class="submitDltList">
              <ul>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic">
                          <img src="../assets/img/img24.png"  />
                        </div>
                        <span class="tip">已通过</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic">
                          <img src="../assets/img/img24.png"  />
                        </div>
                        <span class="tip">待检查</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic upload">
                          <img src="../assets/img/img26.png"  />
                        </div>
                        <span class="tip">未通过</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic">
                          <img src="../assets/img/img24.png"  />
                        </div>
                        <span class="tip">已通过</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic">
                          <img src="../assets/img/img24.png"  />
                        </div>
                        <span class="tip">待检查</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic upload">
                          <img src="../assets/img/img26.png"  />
                        </div>
                        <span class="tip">未通过</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic">
                          <img src="../assets/img/img24.png"  />
                        </div>
                        <span class="tip">已通过</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic">
                          <img src="../assets/img/img24.png"  />
                        </div>
                        <span class="tip">待检查</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>计算机应用</h5>
                    <div class="workName clearfix">
                      <span class="fl">作业</span>
                      <strong class="fr">一本通38第五题</strong>
                    </div>
                    <div class="submitDlt clearfix">
                      <span class="fl">提交</span>
                      <div class="dlt fr">
                        <div class="pic upload">
                          <img src="../assets/img/img26.png"  />
                        </div>
                        <span class="tip">未通过</span>
                        <a href="#" class="viedo">视频讲解</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-else-if="indexActive == 2" key="2">
          <div class="tab-pal">
            <div class="workDetail">
              <span>应考<strong class="must">18</strong>次，已通关<strong class="real">12</strong>次</span>
            </div>
            <div class="submitDltList">
              <ul>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">查看答卷</a>
                      <span class="tip">已通关</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">查看答卷</a>
                      <span class="tip">已通关</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">进入测试</a>
                      <span class="tip un">未通关</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">查看答卷</a>
                      <span class="tip un">未通关</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-else-if="indexActive == 3" key="3">
          <div class="tab-pal">
            <div class="workDetail">
              <span>应考<strong class="must">18</strong>次，已通关<strong class="real">12</strong>次</span>
            </div>
            <div class="submitDltList">
              <ul>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">查看答卷</a>
                      <span class="tip">已通关</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">查看答卷</a>
                      <span class="tip">已通关</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">进入测试</a>
                      <span class="tip un">未通关</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <h5>第一单元<span>计算机应用</span></h5>
                    <div class="test">
                      <strong>计算机网络及应用基础</strong>
                      <a href="#" class="look">查看答卷</a>
                      <span class="tip un">未通关</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>

    </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Cell, Group } from 'vux'
  import service from "../http/services/personal";
    export default {
        name: "MyClassDetail",
      data(){
          return{
            id: '',
            indexActive: 0,
            course_id: '',
            showContent001: false,
            showContent002: false,
            showContent003: false,
            courseVideo: {
              course: '',
              teacher: ''
            },
            flagArray: [],
            flag: false
          }
      },
      created() {
          this.id = this.$route.params.id;
          console.log("id",this.id);
      },
      components: {
        Tab,
        TabItem,
        Cell,
        Group,
        Sticky
      },
      methods:{
        onItemClick(index){
          this.indexActive = index;
        },

        getCourseVideo() {
          service.personalService.courseVideo({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
            if (res.status === 200) {
              this.courseVideo.course = res.data.course;
              this.courseVideo.teacher = res.data.course.teacher;
              console.log(this.courseVideo);
            }
          })
        }
      },

      mounted: function () {
        this.getCourseVideo();
      }
    }
</script>

<style>
  .detailImg .img-box{
    position: relative;
    background: url("../assets/img/img12.png") no-repeat bottom center;
    background-size: 100% auto;
    padding: 5px 0 15px;
  }
  .detailImg .classname {
    width: 100%;
    font-size: 0.28rem;
    color: #fff;
  }

  .detailImg .classname strong {
    margin: 0.2rem;
  }

  .detailImg .classname .school {
    padding: 0 0.2rem 0.2rem;
  }

  .detailImg .classname .school span {
    margin-right: 0.2rem;
  }

  .detailImg .classname h5 {
    text-align: center;
    padding: 0 0.2rem;
    font-size: 0.6rem;
    color: #7fd7ff;
    font-weight: bold;
    text-shadow: 0.05rem 0.05rem 0.05rem #000;
    padding-bottom: 0.5rem;
  }

  .detailImg .classname h5 span {
    margin-left: 0.3rem;
  }
  .vux-tab-wrap.class-detail-tab-box{
    padding-top: 0.7rem;
  }
  .vux-tab-wrap.class-detail-tab-box .vux-tab-container{
    height: 0.7rem;
  }
  .vux-tab-wrap.class-detail-tab-box .vux-tab{
    height: 0.7rem;
  }
  .vux-tab-wrap.class-detail-tab-box  .vux-tab .vux-tab-item{
    line-height: 0.7rem;
  }
  .class-group > .weui-cells{
    margin-top: 0;
  }
  .class-group > .weui-cells:after{
    display: none;
  }
  .weui-cell.cell-class{
    background-color: #f5f5f5;
    height: 0.7rem;
    padding: 0 0.3rem 0 0.2rem;
    border-bottom: 1px solid #ECECEC;
  }
  .weui-cell.cell-class:before{
    display: none;
  }
  .class-item dd {
    background: #fff;
    padding: 0.2rem;
  }

  .class-item .left {
    float: left;
    width: 65%;
  }

  .class-item .right {
    float: right;
    width: 35%;
  }

  .class-item .type {
    display: inline-block;
    width: 0.5rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.2rem;
    color: #DB2C1B;
    border-radius: 0.1rem;
    border: 1px solid #DB2C1B;
    text-align: center;
  }

  .class-item .name {
    font-size: 0.26rem;
    color: #333;
    margin-left: 0.2rem;
  }

  .class-item .already {
    font-size: 0.24rem;
    color: #DB2C1B;
  }

  .class-item .time {
    display: inline-block;
    padding: 0 0.1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.24rem;
    color: #666;
    border: 1px solid #ccc;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
  }

  .class-item .time i {
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    background: url(../assets/img/icon25.png) no-repeat center;
    background-size: 0.25rem 0.25rem;
    margin-right: 0.1rem;
    vertical-align: top;
    margin-top: 0.04rem;
  }

  .class-item li.my_divon h5 {
    background: url(../assets/img/upBtn.png) no-repeat 97% #f5f5f5;
    background-size: 0.32rem 0.32rem;
  }

  .workDetail {
    height: 1.1rem;
    line-height: 1.1rem;
    background: #fff;
    text-align: center;
  }

  .workDetail span {
    font-size: 0.28rem;
    color: #333;
  }

  .workDetail strong {
    font-size: 0.4rem;
    color: #DB2C1B;
  }
  .submitDltList h5 {
    height: 0.88rem;
    line-height: 0.88rem;
    background: #f5f5f5;
    position: relative;
    font-size: 0.28rem;
    color: #9d9d9d;
    padding-left: 0.4rem;
  }
  .submitDltList h5:before {
    position: absolute;
    top: 0.33rem;
    left: 0.2rem;
    content: "";
    width: 0.05rem;
    height: 0.26rem;
    background: #DB2C1B;
  }

  .submitDltList h5 span {
    font-size: 0.22rem;
    margin-left: 0.2rem;
  }

  .submitDltList .fl {
    width: 10%;
  }

  .submitDltList .fr {
    width: 88%;
  }

  .submitDltList .workName {
    padding: 0.2rem;
    background: #fff;
    border-bottom: 1px solid #ECECEC;
  }

  .submitDltList .workName span {
    font-size: 0.24rem;
    color: #999;
  }

  .submitDltList .workName strong {
    font-size: 0.28rem;
    color: #333;
  }

  .submitDltList .submitDlt {
    padding: 0.2rem;
    background: #fff;
  }

  .submitDltList .submitDlt span.fl {
    font-size: 0.24rem;
    color: #999;
  }

  .submitDltList .submitDlt .pic {
    float: left;
    width: 2.5rem;
    cursor: pointer;
  }

  .submitDltList .submitDlt .pic img {
    display: block;
    width: 100%;
  }

  .submitDltList .submitDlt span.tip {
    font-size: 0.26rem;
    color: #999;
    margin-left: 0.3rem;
    margin-top: 0.25rem;
    display: inline-block;
  }

  .submitDltList .submitDlt .dlt {
    position: relative;
  }

  .submitDltList .submitDlt .viedo {
    display: inline-block;
    width: 1.6rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #DB2C1B;
    font-size: 0.28rem;
    color: #fff;
    border-radius: 0.3rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0;
    text-align: center;
  }

  .submitDltList .test {
    background: #fff;
    padding: 0.4rem 0.2rem;
    position: relative;
  }

  .submitDltList .test strong {
    font-size: 0.3rem;
    color: #333;
  }

  .submitDltList .test .look {
    display: inline-block;
    width: 1.6rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #DB2C1B;
    font-size: 0.28rem;
    color: #fff;
    border-radius: 0.3rem;
    position: absolute;
    top: 0.3rem;
    right: 0.2rem;
    text-align: center;;
  }

  .submitDltList .test .tip {
    position: absolute;
    top: 0.85rem;
    right: 0.7rem;
    font-size: 0.2rem;
    color: #999;
  }

  .submitDltList .test .un {
    color: #000;
  }
</style>
