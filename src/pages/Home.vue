<template>
	<div>
		<!-- <gender :name="name" :gender="gender"></gender>
		<genderrepl :name="name" :gender="gender"></genderrepl> -->
		<carousel :carousel="carousel">
        </carousel>
        <!-- <trans></trans> -->
	</div>
</template>
<script type="text/javascript">
	import gender from '../components/Gender.vue'
	import genderrepl from '../components/Genderrepl.vue'
	import carousel from '../components/LniCarousel.vue'
	import trans from '../components/Trans.vue'
	import { mapGetters } from 'vuex'

	export default {
		name: 'home',
		data() {
			return {
				carousel: [
                    {
                        title: 'Paid Sick Leave',
                        headline: 'Employees:  You now have paid sick leave!',
                        route: '#test',
                    }, {
                        title: 'File A Claim',
                        headline: 'Employers:  File a Claim Today!',
                        route: '#test',
                    }, {
                        title: 'Safety Training Available',
                        headline: 'Employers:  Free Safety Classes for all employees!',
                        route: '#test',
                    },
                ],
			}
		},
		components: {
			"gender":gender,
			"genderrepl":genderrepl,
			"carousel":carousel,
			"trans":trans,
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