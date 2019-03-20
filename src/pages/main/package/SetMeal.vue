<!--套餐-->
<template>
    <div class="font-box">
      <div class="setMeal">
        <div class="tit">
          <h3>VIP套餐</h3>
        </div>
        <div class="list">
          <ul>
            <li v-for="course_package in packageList" :key="course_package.id">
              <router-link :to="{name: 'SetMealDetail', params:{ pid: course_package.id }}">
                <div class="item">
                  <div class="type bg1">
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
    </div>
</template>

<script>
    import  service from '@/http/services/package.js'
    export default {
      name: "set_meal",
      data() {
         return {
           packageList: ''
         }
      },

      methods: {

        getList() {
          service.packageService.packageList().then(res => {
            if (res.status === 200 && res.data.status == 0) {
              this.packageList = res.data.packages;
              console.log(this.packageList);
            } else {
              alert('wrong!');
            }
          })
        }

      },

      mounted: function () {
        this.getList();
      }
    }
</script>

<style>

</style>
