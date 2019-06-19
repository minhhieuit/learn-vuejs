<template>
  <div class="about">
    <h1>Vuex DEMO</h1>
    <input type="text" v-model="title" > <br>
    <input type="button" value="add" @click="addTaskMethod(title)">
    <input type="button" value="clear" @click="clearTask()">
    <br>
    <span>{{arrTask}}</span>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name:'todos-list',
  data(){
    return{
      title:'',
    }
  },
  computed:{
    ...mapGetters(['arrTask'])
  },
  methods:{
    ...mapActions(['addTask','clearTask']),
    addTaskMethod(title){
      this.addTask({title} );
      console.log({title} + " clgt")
      this.title = '';
    }
  }
}
</script>

