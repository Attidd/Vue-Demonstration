<script setup lang="ts">
import DocumentationIcon from "./icons/IconDocumentation.vue";
import VueSampleItem from "./VueSampleItem.vue";
</script>


<template>
  <VueSampleItem>
      <template #icon>
        <DocumentationIcon /> 
      </template>
    <template #heading>Web Novel</template>
      I use Vue for my <a> Web novel's</a> reader page. The lightweight components allows it to load really quickly on phones even with lots of text.
  </VueSampleItem>
</template>
