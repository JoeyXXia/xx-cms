<template>
  <div class="xx-code">
    <pre class="bg">
      <code :class="'language' + language" v-html="highlightedCode"/>
    </pre>
  </div>
</template>

<script setup lang="ts">
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { watchEffect, ref } from 'vue'

const props = defineProps({
  language: {
    type: String,
    default: 'html'
  },
  code: {
    type: String,
    default: ''
  }
})

const highlightedCode = ref<string>('')

watchEffect(() => {
  highlightedCode.value = hljs.highlight(props.code, {
    language: props.language
  }).value
})
</script>

<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
