<template>
	<div id="demo">
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
			    inter:2000,
				playpause:null,
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
		      this.inter = 2000;
			  clearInterval(this.playpause) 
		    },    
		    mouseleave() {
			   this.inter = 2000;
			   this.setClearInterval();
			},
			setClearInterval() {
				this.playpause = setInterval(()=>{  this.position = (this.position+1 < this.slide.length) ? this.position + 1 : 0; }, this.inter);
			}	
		},
		created() {
	        this.setClearInterval();
		},
		beforeDestroy() {
			clearInterval(this.playpause)
		}
	}
</script>
<style type="text/css">
</style>