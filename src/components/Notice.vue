<template>
    <div>
      公告
    </div>
</template>

<script>
    export default {
        name: "Notice",
      data(){
          return{
            id: 0
          }
      },
      created() {
          this.id = this.$route.params.id;
          console.log("id",this.id);
      }
    }
</script>

<style scoped>

</style>
