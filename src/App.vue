<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './pages/Home.vue'
//import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
     /* name: this.$store.getters.getName,
      gender: this.$store.getters.getGender,*/
    }
  },
  created() {
   /*setTimeout(()=> {
    this.$store.commit('setGender',"Female");
    this.$store.commit('setName',"Sujata");
   } ,2000 ) */
  },
  computed: {
   /* ...mapGetters({
      name:'getName',
      gender:'getGender'
    })*/
  },
  components: {
    "home":home
  }
}
</script>

<style>
.lni-c-carousel-wrapper {
    display: flex;
    position: relative;
    padding: 40px;
    width: 670px;
    height: 364px;
}

.lni-c-carousel-container {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
}


.lni-c-carousel-pagination {
    align-items: center;
    flex-shrink: 0;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    list-style-type: none;
}

.lni-c-carousel-toggle {
    background-color: transparent;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: 3px solid black;
    flex: 1 1 auto;
    margin: 10px;
}

.lni-c-carousel-toggle.--active {
    border: none;
    background-color: darkblue;
    height: 18px;
    width: 18px;
    margin: 13px;
}

.lni-c-slide {
    flex: 1 0 100%;
    flex-basis: 80%;
    margin-right: 20px;
    height: 100%;  
}


.lni-c-slider {
    overflow: hidden;
    display: flex;
}

.lni-c-slide-leave-active,
.lni-c-slide-enter-active {
  transition: 0.5s;
}

.lni-c-slide-enter {
  transform: translate(100%, 0);
}

.lni-c-slide-leave-to {
  transform: translate(-100%, 0);
}

.lni-c-slide a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.lni-c-slide-title {
    font-family: 'Libre Franklin';
    font-size: 22px;
    color: map-get($palette, catalina-blue);
}

.lni-c-slide-headline {
    font-family: 'Libre Franklin';
    font-size: 46px;
    color: map-get($palette, catalina-blue);
}

.lni-c-slide-more {
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: $space/2;
    align-self: flex-end;
}

.lni-c-slide-more > span {
    color: black;
}
.slide1 { order: 1; }
.slide2 { order: 2; }
.slide3 { order: 3; }
.slide4 { order: 4; }
.slide5 { order: 5; }
</style>
