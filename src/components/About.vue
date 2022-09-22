<script setup lang="ts">
import AboutItem from "./AboutItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <AboutItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Web Novel</template>

    I use Vue for my 
	<a>Web Novel's</a> reader page. The lightweight components allows it to load really quickly on phones even with lots of text. 
  </AboutItem>

  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>
    Experience with building modular and reuseable components. 
    <br />
    Familiarity with Vue router and connecting to an API to pull data.
    <br />
    Ability to write well-documented, efficient and clean Javascript code.
  </AboutItem>


</template>
