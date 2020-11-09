<template>
  <section class='w-full flex h-screen'>
      <article class='w-1/2'>
        <textarea class='w-full h-full' v-model='text'></textarea>
      </article>
      <article class='w-1/2 border bg-gray-200' v-html="markedText">        
      </article>
  </section>
</template>

<script>
import marked from 'marked';
export default {
    data() {
        return {
            text: '',
        }
    },
    computed: {
        markedText() {
            return marked(this.text);
        }
    }
}
</script>

<style>

</style>