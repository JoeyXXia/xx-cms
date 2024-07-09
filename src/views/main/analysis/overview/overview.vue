<template>
  <div class="overview">
    <h2>overview</h2>
    <xx-card></xx-card>
    <xx-text-link></xx-text-link>
    <xx-descriptions></xx-descriptions>
    <xx-code></xx-code>
  </div>
</template>

<script setup lang="ts" name="overview">
import XxDescriptions from '@/base-ui/descriptions/descriptions.vue'
import XxTextLink from '@/base-ui/text-link/textLink.vue'
import XxCode from '@/base-ui/code/code.vue'
import XxCard from '@/base-ui/card/card.vue'
</script>

<style scoped>
.overview {
}
</style>
