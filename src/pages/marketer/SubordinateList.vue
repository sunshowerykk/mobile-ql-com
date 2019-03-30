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
            <span>{{item.name}}</span>
          </p>
          <p>
            <label>电话</label>
            <span>{{item.phone}}</span>
          </p>
          <p>
            <label>级别</label>
            <span>{{item.type}}</span>
          </p>
        </div>
        <div class="operate">
          <Button size="small" class="edit" @click="editSubordinate()">编辑</Button>
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
        subordinateData: [
          {
            id: 1,
            name: '张翼德',
            phone: '18811717989',
            type: '一级代理'
          },
          {
            id: 2,
            name: '张小吴',
            phone: '18811717989',
            type: '一级代理'
          },
          {
            id: 3,
            name: '李兰兰',
            phone: '18811717989',
            type: '一级代理'
          },
          {
            id: 4,
            name: '李老师',
            phone: '18811717989',
            type: '一级代理'
          },
        ]
      }
    },
    methods: {
      deleteSubordinate() {
        this.$confirm('是否确认删除?', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$Message.success('删除成功');
        }).catch(() => {});
      },
      addSubordinate () {
        this.$router.push('AddSubordinate');
      },
      editSubordinate () {
        this.$router.push('EditSubordinate');
      }
    }
  }
</script>

