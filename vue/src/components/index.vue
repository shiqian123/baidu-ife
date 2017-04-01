<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <ul>
      <li v-for="data in data" v-on:click="reverseMessage" >
        {{ data.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import data from '../data/data'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data: data.toDoData
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
