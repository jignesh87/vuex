<template>
    <div class="lni-c-slide">
        <!-- <a :href="slide.route">
            <span class="lni-c-slide-title">{{slide.title}}</span>
            <p class="lni-c-slide-headline">{{slide.headline}}</p>
            <div class="lni-c-slide-more">Learn More
                <span class="lnicon--triangle--right"
                    aria-hidden="true">
                </span>
            </div>
        </a> -->
        <div class="lni-c-slider" >
            <div v-for="(slide, index) in carousel" :key="index" >
                <transition name="lni-c-slide" v-if="index ==curindex">
                <a :href="slide.route">
                    <span class="lni-c-slide-title">{{slide.title}}</span>
                    <p class="lni-c-slide-headline">{{slide.headline}}</p>
                    <div class="lni-c-slide-more">Learn More
                        <span class="lnicon--triangle--right"
                            aria-hidden="true">
                        </span>
                    </div>
                </a>
                    </transition>
            </div>       
        </div>
    </div>
</template>
<script>
export default {
    name: 'lni-slide',
    props: {
        carousel: Array,
        curindex: Number,
        
    },
};</script>
