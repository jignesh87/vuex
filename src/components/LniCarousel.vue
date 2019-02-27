<template>
    <div class="lni-c-carousel-wrapper" @mouseover="mouseover" @mouseleave="mouseleave">
        <!-- <div class="lni-c-carousel-container">
            <slide v-for="(slide, index) in carousel"
                :key="`${slide}_${index}`"
                :slide="slide"
                :class="`slide${index}`"
                >
            </slide>
        </div> -->
        <div class="lni-c-carousel-container" >
            <slide :slide="carousel" :curindex="position"></slide>
        </div>
        <ul class="lni-c-carousel-pagination">
            <li v-for="(slide, index) in carousel"
                :key="slide.id">
                <button :class="['lni-c-carousel-toggle',
                    {'--active': index == position}]"
                    @click="nextSlide(index)">
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
import slide from './Slide';
export default {
    name: 'lni-carousel',
    components: {
        'slide': slide,
    },
    data() {
        return {
            position: 0,
            inter:2000,
			playpause:null,
        };
    },
    props: {
        carousel: Array,
    },
    methods: {
        nextSlide(curindex) {
            this.position = curindex;
        },
       mouseover() {
            this.inter = 2000;
            clearInterval(this.playpause) 
        },    
        mouseleave() {
            this.inter = 2000;
            this.setClearInterval();
        },
        setClearInterval() {
            this.playpause = setInterval(()=>{  this.position = (this.position+1 < this.carousel.length) ? this.position + 1 : 0; }, this.inter);
        }
    },
    created() {
        this.setClearInterval();
    }
};
</script>
