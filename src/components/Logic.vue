<template>
  <el-card>
    <div slot="header">
      <span>{{label}}</span>
      <div class="tools">
        <i title="编辑" class="el-icon-edit" @click="edit"></i> 
        <i title="删除" class="el-icon-delete" @click="remove"></i>
      </div>
    </div>
    <div>
      <span class="id">id: </span>
      <span>{{id}}</span>
    </div>

    <EditDialog />
  </el-card>
</template>

<script>
import EditDialog from '@/components/EditDialog';

export default {
  components: {
    EditDialog
  },
  data(){
    return {
      id: 'eq',
      label: '等于'
    }
  },
  methods: {
    edit(){

    },
    remove(){
      this.$emit('remove', this);
    }
  }
}
</script>

<style lang="less" scoped>
.tools{
  float: right;
  i{
    cursor: pointer;
  }
  .el-icon-edit{
    color: rgb(64, 158, 255);
  }
  .el-icon-delete{
    margin-left: 5px;
    color: rgb(245, 108, 108);
  }
}
</style>


