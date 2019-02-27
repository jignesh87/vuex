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
            <transition name="lni-c-slide" >
                <div :key="curindex" >
                    <a :href="slide[curindex].route">
                        <span class="lni-c-slide-title">{{slide[curindex].title}}</span>
                        <p class="lni-c-slide-headline">{{slide[curindex].headline}}</p>
                        <div class="lni-c-slide-more">Learn More
                            <span class="lnicon--triangle--right"
                                aria-hidden="true">
                            </span>
                        </div>
                    </a>
                </div>       
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lni-slide',
    props: {
        slide: Array,
        curindex: Number,
    },
};</script>
