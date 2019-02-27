<template>
	<div id="demo">
	  <button @mouseover="mouseover"
	    @mouseleave="mouseleave">
	   {{message}}
	  </button>
		<div class="lni-c-slide">
	        <div class="lni-c-slider" @mouseover="mouseover" @mouseleave="mouseleave">
	            <transition name="lni-c-slide" >
	                <div class="text" :key="position">
	                    <span class="lni-c-slide-title">{{slide[position].title}}</span>
	                    <p class="lni-c-slide-headline">{{slide[position].headline}}</p>
	                </div>
	            </transition>
	        </div>
	    </div>
	</div>
</template>
<script type="text/javascript">

	export default {
		name: "trans", 
		data() {
			return {
				position:0,
			    show: true,
			    message:"Hover Me!",
			    inter:2000,
			    slide: [
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
		methods: {
			mouseover() {
		      this.message = 'Good!'
		      this.inter = 10000;
		    },    
		    mouseleave() {
		      this.message = 'Hover Me!'
		       this.inter = 3000;
		    }	
		},
		created() {
	        setInterval(()=>{  this.position = (this.position+1 < this.slide.length) ? this.position + 1 : 0; }, this.inter);
	        console.log("asdsdsa");
	    }
	}
</script>
<style type="text/css">
</style>