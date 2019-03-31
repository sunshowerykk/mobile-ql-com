<template>
  <div class="subordinate-list">
    <TopBack>
      <span slot="headerTxt">下级管理</span>
    </TopBack>
    <div class="content">
      <div v-for="(item, index) in subordinateData" :key="index">
        <div class="info">
          <p>
            <label>姓名</label>
            <span>{{item.username}}</span>
          </p>
          <p>
            <label>电话</label>
            <span>{{item.phone}}</span>
          </p>
          <p>
            <label>级别</label>
            <span>{{item.role}}</span>
          </p>
        </div>
        <div class="operate">
          <Button size="small" class="edit" @click="editSubordinate(item.id)">编辑</Button>
          <Button size="small" class="delete" @click="deleteSubordinate(item.id)">删除</Button>
        </div>
      </div>
    </div>
    <div class="add-subordinate-btn" @click="addSubordinate()">添加新人</div>
  </div>
</template>

<script>
  import service_marketer from '@/http/services/marketer'
  export default {
    name: "SubordinateList",
    data () {
      return {
        subordinateData: [],
        role: ''
      }
    },
    mounted () {
      service_marketer.marketerService.subordinateList({
        'access-token': this.$cookies.get('access_token')
      }).then(res => {
        if (res.status === 200 && res.data.status === 0) {
          this.subordinateData = res.data.list;
          this.role = res.data.roleName;
        } else {
          this.$Message.error(res.data.message);
        }
      })
    },
    methods: {
      deleteSubordinate(id) {
        this.$confirm('是否确认删除?', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          service_marketer.marketerService.delSubordinate({
            'access-token': this.$cookies.get('access_token'),
            userid: id
          }).then(res => {
            if (res.status === 200 && res.data.status === 0) {
              this.$router.go(0);
              this.$Message.success('删除成功');
            } else {
              this.$Message.error(res.data.message);
            }
          })
        }).catch(() => {});
      },
      addSubordinate () {
        this.$router.push('AddSubordinate');
      },
      editSubordinate (id) {
        this.$router.push({
          name: 'EditSubordinate',
          params: {id: id}
        });
      }
    }
  }
</script>

