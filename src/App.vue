<template>
  <div id="app">
    <el-col :span="8">
      <h2>拖一个类型到编辑区</h2>
      <Logic />
    </el-col>
    <el-col :span="8">
      <h2>编辑区</h2>
    </el-col>
    <el-col :span="8">
      <h2>生成代码</h2>
        <codemirror ref="myCm"
              :value="value" 
              :options="cmOptions"/>
    </el-col>

  </div>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
import "codemirror/lib/codemirror.css";

import Logic from '@/components/Logic';

export default {
  name: 'app',
  components: {
    Logic
  },
  data(){
    return {
      value: JSON.stringify({a:'1', b: '2'}, false, 4),
      cmOptions: {
        readOnly: true,
        lineWrapping: true,
        tabSize: 4,
        mode: "text/javascript",
        lineNumbers: true,
        line: true
      }
    }
  }
}
</script>

<style>
body{
  margin:0;
}

#app {
  padding: 10px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2{
  font-weight: normal;
  font-size: 18px;
}
</style>
