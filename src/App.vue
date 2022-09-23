<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LeftVue from "./components/LeftVue.vue";
import VueBlock from "./components/VueBlock.vue";
import StylingBlock from "./components/StylingBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";
import HeaderBlock from "./components/HeaderBlock.vue";
import RailsBlock from "./components/RailsBlock.vue";
</script>

<template>
<div class="wrapper">
  <HeaderBlock/>

      <RailsBlock/>
    <div class="block">
      <VueBlock/>
    </div>
      <StylingBlock/>
    <div class="block">
      <VueBlock/>
    </div>

<FooterBlock/>

</div>

</template>

<style scoped>

.page-header {
}

.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  }

</style>
