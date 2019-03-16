<!--套餐-->
<template>
    <div class="font-box">
      <div class="header">
        <div class="logo">
          <img src="../assets/img/logo.png" />
        </div>
        <router-link to="" class="toLogin">学员端</router-link>
      </div>

      <Navigation></Navigation>
      <div class="setMeal">
        <div class="tit">
          <h3>VIP套餐</h3>
        </div>
        <div class="list">
          <ul>
            <li>
              <router-link :to="{name: 'SetMealDetail', params:{ id:'1' }}">
                <div class="item">
                  <div class="type bg1">
                    <span class="classname">20考研数学-/三全程提分</span>
                    <dl class="clearfix">
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                    </dl>
                    <span class="classs">11门课程</span>
                  </div>
                  <div class="prisebox">
                    <span class="prise">￥1194</span>
                    <span class="bought"><i></i>990</span>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <div class="type bg2">
                    <span class="classname">20考研数学-/三全程提分</span>
                    <dl class="clearfix">
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                    </dl>
                    <span class="classs">11门课程</span>
                  </div>
                  <div class="prisebox">
                    <span class="prise">￥1194</span>
                    <span class="bought"><i></i>990</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <div class="type bg3">
                    <span class="classname">20考研数学-/三全程提分</span>
                    <dl class="clearfix">
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                      <dd>
                        <img src="../assets/img/img7.png" class="terImg"  />
                        <span>吴忠祥</span>
                      </dd>
                    </dl>
                    <span class="classs">11门课程</span>
                  </div>
                  <div class="prisebox">
                    <span class="prise">￥1194</span>
                    <span class="bought"><i></i>990</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "set_meal"
    }
</script>

<style>

</style>
