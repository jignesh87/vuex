<template>
  <div id="app">
    <h1><label>Name: </label>{{ name }}</h1>
    <h4><label>Gender: </label>{{ gender }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
     /* name: this.$store.getters.getName,
      gender: this.$store.getters.getGender,*/
    }
  },
  created() {
   setTimeout(()=> {
    this.$store.commit('setGender',"Female");
    this.$store.commit('setName',"Sujata");
   } ,2000 ) 
  },
  computed: {
    ...mapGetters({
      name:'getName',
      gender:'getGender'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
