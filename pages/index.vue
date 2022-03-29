<template>
  <div class="nuxtStarter">
    <nuxt-link
      class="nuxtStarterLogo"
      to="/"
      target="_blank"
    >
      <NuxtLogo />
    </nuxt-link>

    <div class="pt-5">
      <h2>
        Welcome to your Nuxt v2 Starter
      </h2>

      <p>
        I recommend you take a look at the <a href="https://nuxtjs.org" target="_blank">Nuxt documentation</a>, whether you are new or have previous experience with the framework.
      </p>
    </div>
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue'

export default {
  components: {
    NuxtLogo
  }
}
</script>

<style lang="scss" scoped>
.nuxtStarter {
  padding: 3rem;

  &Logo {
    @include flex ($direction: null, $justify: center, $align: center);
  }

  h2,
  a {
    color: $primary;
  }
}
</style>
