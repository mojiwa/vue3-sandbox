<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-bind:title="msg">
      Hover your mouse over me for a few seconds...
    </span>
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    seen: Boolean
  }
}
</script>