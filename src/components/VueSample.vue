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
    <template #vuelink>
      <a
        href="https://google.com"
        target="_blank"
        rel="noopener"
        ><h3> LINK </h3></a>
    </template>
      I use Vue for my <a> Web novel's</a> reader page. The lightweight components allows it to load really quickly on phones even with lots of text.  Most importantly the readability allows it to remain consistent with Ruby on Rails design.
  </VueSampleItem>
</template>
