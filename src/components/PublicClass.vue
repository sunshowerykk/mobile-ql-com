<!--公开课-->
<template>
    <div>
      <div class="header">
        <div class="logo">
          <img src="../assets/img/logo.png" />
        </div>
        <router-link to="" class="toLogin">学员端</router-link>
      </div>
      <Navigation></Navigation>

      <div class="setMeal publicClass">
        <div class="tit">
          <h3>升本公开课</h3>
        </div>
        <div class="list">
          <div class="viedoCont" v-if="showVideo">
            <div class="cont">
              <div class="close-video-btn">
                <img src="../assets/img/close-video-btn.png"  @click="hideModal" >
              </div>
              <video class="video" id="video" :src="course_url" :poster="pic" controls="controls" autoplay>
              </video>
            </div>
          </div>
          <ul>
            <li v-for="cass in classes">
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
      </div>
      <template>
        <Modal
          v-model="buycourse"
          title="该课程尚未购买"
          @on-ok="courseorder"
          @on-cancel="cancel">
          <p>是否购买此课程？</p>
        </Modal>
      </template>
    </div>
</template>

<script>
  import service from '@/http/services/publicClass.js'
    export default {
        name: "PublicClass",
      data() {
        return {
          course_id:'',
          access_token:'',
          pic: '',
          course_url: '',
          showVideo: false,
          buycourse: false,
          classes: [{}],
        }
      },
      methods: {
        hideModal(){
          this.showVideo = false;
        },
        hideModalorder(){
          this.buycourse = false;
        },
        show(){
          this.showVideo = true;
        },
        showorder(){
          this.buycourse = true;
        },
        initclasslist: function () {
          service.publicClassService.list().then(res => {
            if (res.status === 200) {
              // alert(res.data);
              console.log(res.data);
              this.classes=res.data;
            }
          })
        },
        check (course_id,list_pic) {
          this.course_id = course_id;
          service.publicClassService.check({'course_id': course_id, 'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              console.log(res.data.status);
              if(res.data.status == 0) {
                this.warning();
              }
              if(res.data.status == 3) {
               this.showorder();
              }
              if(res.data.status == 4 || res.data.status==2 ) {
                  this.course_url = res.data.url;
                  this.pic = list_pic;
                  alert(res.message);
                  this.show();
              }
            }
          })
        },
        courseorder() {
            this.$router.push('/OpenCoursePayCenter/' + this.course_id);
        },
        warning () {
          this.$Message.warning('尚未登陆');
        },
      },
      mounted() {
        this.access_token = this.$cookies.get('access_token');
        // this.access_token = 'QTV6nXjOqjYH9xQAnb0teVDggGQMD87B';
        this.initclasslist();
      }
    }
</script>

<style scoped lang="less">
  .adresform_1 .btnmod {
    text-align: center;
  }

  .adresform_1 .btnmod .btn {
    border: none;
    border-radius: 0.1rem;
    width: 2rem;
    height: 0.88rem;
    font-size: 0.33rem;
    color: #fff;
    margin: 0 0.1rem;
  }

  .adresform_1 .btnmod .confirm {
    background: #db2c1b;
  }
  .alert_cont {
    position: fixed;
    top: 20%;
    left: 50%;
    width: 6rem;
    margin-left: -3rem;
    background: #fff;
    z-index: 101;
    border-radius: 0.1rem;
  }
  .close-video-btn {
    position: absolute;
    right: 10px;
    top: 18%;
    img {
      height: 30px;
    }
  }

  .viedoCont{
    z-index: 999;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    left: 0;
    .cont{
      width: 100%;
      height: 100%;
      .video {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .publicClass .list li {
    box-shadow: none;
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
  }

  .publicClass .list li .item {
    background: none;
    overflow: hidden;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
  }

  /*.publicClass .list li img{display:block;width:100%;height:3.6rem;}*/
  .publicClass .list .txt {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .publicClass .list .txt span {
    display: block;
    text-align: center;
  }

  .publicClass .list .txt strong {
    display: block;
    text-align: center;
    font-size: 0.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 10px;
  }

  .publicClass .list .classtype {
    padding-top: 1rem;
    font-size: 0.28rem;
  }

  .publicClass .list span.time {
    font-size: 0.24rem;
    margin-top: 10px;
  }

  .publicClass .list span.time i {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background: url(../assets/img/icon15_1.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
    vertical-align: top;
  }

  .publicClass .list li .viedo {
    height: 3.6rem;
  }
</style>
