<template>
  <el-card>
    <div slot="header">
      <div class="tools">
        <i title="编辑" class="el-icon-edit" @click="edit"></i> 
        <i title="删除" class="el-icon-delete" @click="remove"></i>
      </div>
      <h3>
        <span class="label">{{label}}</span>
        <span class="op">{{op}}</span>
      </h3>
    </div>
    <draggable :list="items" :options="{group: 'shared'}" class="items">
    <!-- <div class="items"> -->
      <LogicUnit v-for="(item, index) in items" :key="index" v-bind="item"/>
    <!-- </div> -->
    </draggable>
  </el-card>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'LogicUnit',
  props: {
    op: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    draggable,
  },
  data(){
    return {
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
.el-card + .el-card{
  margin-top: 10px;
}
.tools{
  float: right;
  line-height: 28px;
  i{
    cursor: pointer;
    vertical-align: -3px;
  }
  .el-icon-edit{
    color: rgb(64, 158, 255);
  }
  .el-icon-delete{
    margin-left: 5px;
    color: rgb(245, 108, 108);
  }
}
h3{
  margin: 0;
}
.op{
  margin-left: 10px;
  font-weight: normal;
}
.items{
  min-height: 100px;
  background-color: #f3f3f3;
  padding: 10px;
}
</style>


