<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LeftVue from "./LeftVue.vue";
</script>

<template>
  <div class="vueblock">
    <div class="leftblockvue">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <LeftVue msg="Aaron Robinson" />

        <nav>
          <RouterLink to="/">About Me</RouterLink>
          <RouterLink to="/VueSample">Projects</RouterLink>
          <a href="https://github.com/Attidd/">Sample Code</a>
        </nav>
      </div>
    </div>

  <RouterView />
  </div>
</template>

<style scoped>


.vueblock {
  display: grid;
  padding: 2rem;
  grid-template-columns: 2fr 1fr;
  padding: 0 2rem;
  }
.leftblockvue {
  line-height: 1.5;
  background-color: silver;
  min-height: 30vh;
  border: 2px solid #a2a9b1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background: var(--color-background-soft);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .leftblockvue {
    display: flex;
    place-items: center;
    margin-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 2rem;
  }

  .leftblockvue .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
