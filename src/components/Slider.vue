<template>
    <div class='relative'>
        <div v-for='(color, index) in sliders' :key='color' class="absolute w-full">
            <transition name='fade'>
                <div         
                    v-if='currentSlide === index'
                    :class='color'
                    style='height: 350px'>
                </div>
            </transition>
        </div>
        <div class='w-full' style="height:340px">
            <div class='w-full absolute bottom-0 flex justify-center'>
                <div 
                    v-for='(slider, index) in sliders' :key='slider' 
                    :class='currentSlide === index ? "bg-gray-700" : "bg-gray-300"'
                    class='mx-2 w-4 h-4 rounded-full bg-black cursor-pointer shadow-lg'
                    @click="makeActive(index)" />
            </div>                    
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide+1;            
        }, 3000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    data() {
        return {
            currentSlide: 0,
            interval: '',
            sliders: ['bg-teal-600', 'bg-blue-600', 'bg-yellow-600'],
        }
    },
    methods: {
        makeActive(index) {
            this.currentSlide = index;
        },
    }    
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-enter-from {
        opacity: 0;
        transform: translateX(100%);
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }
</style>