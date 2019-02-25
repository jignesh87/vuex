<template>
	<div>
		<gender :name="name" :gender="gender"></gender>
		<genderrepl :name="name" :gender="gender"></genderrepl>
	</div>
</template>
<script type="text/javascript">
	import gender from '../components/Gender.vue'
	import genderrepl from '../components/Genderrepl.vue'
	import { mapGetters } from 'vuex'

	export default {
		name: 'home',
		data() {
			return {

			}
		},
		components: {
			"gender":gender,
			"genderrepl":genderrepl
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