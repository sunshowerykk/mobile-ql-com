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
                    <span class="time"><i></i>{{cass.duration}}</span>
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import service from '@/http/services/publicClass.js'
    export default {
        name: "PublicClass",
      data() {
        return {
          access_token:'',
          pic: '',
          course_url: '',
          showVideo: false,
          classes: [{}],
        }
      },
      methods: {
        hideModal(){
          this.showVideo = false;
        },
        show(){
          this.showVideo = true;
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
          service.publicClassService.check({'course_id': course_id, 'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              if(res.data.status != 4) {
                alert("未购买该课程或尚未登陆");
              } else {
                  this.course_url = res.data.url;
                  this.pic = list_pic;
                  alert(res.message);
                  this.show();
              }
            }
          })
        }
      },
      mounted() {
        this.access_token = this.$cookies.get('access_token');
        this.initclasslist();
      }
    }
</script>

<style scoped lang="less">
  .viedoCont{
    z-index:999;
    position: fixed;
    height: calc(~"100%" - 0.88rem);
    width: 100%;
    .cont{
      width: 100%;
      height: 100%;
      .video {
        width: 100%;
        height: 50%;
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
  }

  .publicClass .list .txt span {
    display: block;
    text-align: center;
  }

  .publicClass .list .txt strong {
    display: block;
    text-align: center;
    font-size: 0.4rem;
  }

  .publicClass .list .classtype {
    padding-top: 1rem;
    font-size: 0.28rem;
  }

  .publicClass .list span.time {
    font-size: 0.24rem;
  }

  .publicClass .list span.time i {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background: url(../assets/img/icon15_1.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
    vertical-align: top;
    margin-right: 0.1rem;
    margin-top: 0.08rem;
  }

  .publicClass .list li .viedo {
    height: 3.6rem;
  }
</style>
