<template>
  <div class="hello">
    <h1>{{ msg }}, welcome to Vue</h1>    
    <span v-if="seen">Now you see me</span>
    <p>{{ message }}</p>
    <input placeholder="Enter some text here..." class="w-1/2 px-2 border-2 border-solid border-black shadow-lg outline-none" v-model="message" />
    <div v-bind:title="message">
      Then hover your mouse over me for a few seconds...
    </div>
    <div> 
      <button 
        class="outline-none border-black border-2 border-solid mt-2 p-3 transition duration-300 ease-in-out shadow-lg focus:outline-none hover:bg-gray-100 hover:text-teal-600 hover:border-teal-600" 
        @click="reverseMessage" @mousedown="removeShadow" @mouseup="addShadow">
        Reverse Text
      </button>
    </div>
    <div :class="{ 'hidden': isInvisible } ">You can't see me</div>
    <div :style="styleObject">I am in the middle!</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    // Pass props here
    props: {
      msg: String,
      seen: Boolean,
    },
    // Get calculated data
    data() {
      return { 
        message: '',
        isInvisible: true,
        styleObject: {
          position: 'relative',
          left: '50%'
        }
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      },
      removeShadow(element) {
        element.target.classList.remove('shadow-lg')
      },
      addShadow(element) {
        element.target.classList.add('shadow-lg')
      }
    }
  }
</script>