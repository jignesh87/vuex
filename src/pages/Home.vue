<template>
	<div>
		<!-- <gender :name="name" :gender="gender"></gender>
		<genderrepl :name="name" :gender="gender"></genderrepl> -->
		<carousel :carousel="carousel">
        </carousel>
	</div>
</template>
<script type="text/javascript">
	import gender from '../components/Gender.vue'
	import genderrepl from '../components/Genderrepl.vue'
	import carousel from '../components/LniCarousel.vue'
	import { mapGetters } from 'vuex'

	export default {
		name: 'home',
		data() {
			return {
				carousel: [
                    {
                        title: 'Jignesh',
                        headline: 'Designation: Fullstack Devloper ',
                        route: '#test',
                    }, {
                        title: 'Pratik',
                        headline: 'Designation:  Web Devloper',
                        route: '#test',
                    }, {
                        title: 'Dimpy',
                        headline: 'Designation:  Web Designer',
                        route: '#test',
                    },
                ],
			}
		},
		components: {
			"gender":gender,
			"genderrepl":genderrepl,
			"carousel":carousel,
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
<style type="text/css"></style>