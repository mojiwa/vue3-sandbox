<template>
  <section class='w-full flex h-screen'>
      <article class='w-1/2'>
        <textarea class='w-full border h-full outline-none p-2' :value='text' @input="update"></textarea>
      </article>
      <article class='w-1/2 border bg-gray-200 p-2' v-html="markedText">        
      </article>
  </section>
</template>

<script>
import marked from 'marked';
import debounce from '../utilities/mixins/debouce';
export default {
    // mixins will merge the data from the mixin and this component... baller!
    mixins: [debounce],
    data() {
        return {
            text: '',        
        }
    },
    computed: {
        markedText() {
            return marked(this.text);
        }
    },
    methods: {
        update(e) {
            const task = () => (this.text = e.target.value);
            this.debounce(task, 500);
        },
    }
}
</script>

<style>

</style>