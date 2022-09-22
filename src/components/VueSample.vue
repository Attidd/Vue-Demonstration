<script setup lang="ts">
import IconDocumentation from "./icons/IconDocumentation.vue";
import IconTooling from "./icons/IconTooling.vue";
import VueSampleItem from "./VueSampleItem.vue";
</script>


<template>
  <VueSampleItem>
      <template #icon>
        <IconDocumentation /> 
      </template>
    <template #heading>Web Novel</template>
    <template #vuelink>
      <a
        href="https://github.com/Attidd/"
        target="_blank"
        rel="noopener"
        ><h3>LINK</h3></a>
    </template>
      I use Vue for my <a> Web novel's</a> reader page. The lightweight components allows it to load really quickly on phones even with lots of text.  Most importantly the readability allows it to remain consistent with Ruby on Rails design.
  </VueSampleItem>
  <VueSampleItem>
    <template #icon>
      <IconTooling/>
    </template>
    <template #heading>Github</template>
    <template #vuelink>
      <a
        href="https://github.com/Attidd/"
        target="_blank"
        rel="noopener"
        ><h3>LINK</h3></a>
    </template>
    Here's the link to the code for the Web Novel.  
    Documentation should list the libraries involved.
  </VueSampleItem>
    
</template>
