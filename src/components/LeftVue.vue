<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="Name">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Click the links below to see examples. 
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.name h1,
.name h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .name h1,
  .name h3 {
    text-align: left;
  }
}
</style>
