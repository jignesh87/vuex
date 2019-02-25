<template>
	<div>
		<h1><label>Name RPL: </label>{{ name }}</h1>
    	<h4><label>Gender RPL: </label>{{ gender }}</h4>
	</div>
</template>
<script type="text/javascript">

	export default {
		name: "genderrepl", 
		data() {
			return {

			}
		},
		created() {
			
		},
		props: [
			"name","gender"
		]
		/*computed: {
			...mapGetters({
				name:'getName',
				gender:'getGender'
			})
		}*/
	}
</script>
<style type="text/css"></style>