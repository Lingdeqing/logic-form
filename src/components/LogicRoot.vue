<template>
    <div class="root">
      <LogicUnit v-bind="model"/>
      <!-- <EditDialog /> -->

<el-col :span="12">
  <draggable :list="list1"  :options="{group: 'shared', animation: 150}">
      <div v-for="item in list1" :key="item.id" class="list">{{item.name}}</div>
  </draggable>
</el-col>
<el-col :span="12">
  <draggable :list="list2"  :options="{group: 'shared', animation: 150}" @dragover="allowDrop">
    <!-- <div ref="list2"> -->
      <div v-for="item in list2" :key="item.id" class="list">{{item.name}}</div>
    <!-- </div> -->
  </draggable>
</el-col>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import Sortable from 'sortablejs';
import LogicUnit from '@/components/LogicUnit';

export default {
  name: 'LogicRoot',
  components: {
    draggable,
    LogicUnit
  },
  mounted(){
// new Sortable(this.$refs.list1, {
//     group: 'shared', // set both lists to same group
//     animation: 150
// });

// new Sortable(this.$refs.list2, {
//     group: 'shared',
//     animation: 150
// });
  },
  data(){
    return {
      		list1:[{name:"John", id:1}, 
				{name:"Joao", id:2}, 
				{name:"Jean", id:3},
				{name:"Gerard", id:4} ],
		list2:[{name:"Juan", id:5}, 
				{name:"Edgard", id:6}, 
				{name:"Johnson", id:7} ],
      model: {
        op: 'eq',
        label: '等于',
        items: [
          {
            op: 'eq',
            label: '等于',
          },
          {
            op: 'gt',
            label: '大于',
          }
        ]
      }
    }
  },
  methods: {
    add: function(){
				this.list.push({name:'Juan'});
			},
			replace: function(){
				this.list=[{name:'Edgard'}]
			},
			clone: function(el){
				return {
					name : el.name + ' cloned'
				}
      },
      allowDrop:function (ev) {
          ev.preventDefault();
        }
  }
}
</script>

<style lang="less" scoped>
.list{
  color: #fff;
  line-height: 30px;
  height: 30px;
  background: pink;
  margin: 10px;
}
</style>


