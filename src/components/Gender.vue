<template>
	<div>
		<h1><label>Name: </label>{{ name }}</h1>
    	<h4><label>Gender: </label>{{ gender }}</h4>
	</div>
</template>
<script type="text/javascript">

	export default {
		name: "gender", 
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