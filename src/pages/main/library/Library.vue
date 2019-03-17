<template>
    <div class="font-box">
      <div class="setMeal recommdBooks">
        <div class="tit">
          <h3>推荐图书</h3>
        </div>
        <div class="list">
          <ul>
            <li v-for="book in books">
              <router-link :to="{'name': 'LibraryDetail', params:{id: book.id}}">
                <div class="inner clearfix">
                  <div class="img">
                    <img :src="book.pic">
                  </div>
                  <div class="info">
                    <h5>{{book.name}}</h5>
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
    </div>
</template>

<script>
  import service from '@/http/services/book.js'
    export default {
        name: "Library",
      data() {
          return {
            books:''
          }
      },

      methods: {
        initbooklist: function () {
          service.bookService.list().then(res => {
            if (res.status === 200) {
              // alert(res.data);
              console.log(res.data);
              this.books=res.data;
            }
          })
        },
      },
      mounted:function(){
        this.initbooklist();
      }
    }


</script>
