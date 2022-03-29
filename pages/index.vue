<template>
  <div class="nuxtStarter">
    <Header
      :variant="'01'"
    />

    <div class="mt-5 pt-5">
      <h2>
        Welcome to your Nuxt v2 Starter
      </h2>

      <p>
        I recommend you take a look at the <a href="https://nuxtjs.org" class="link" target="_blank">Nuxt documentation</a>, whether you are new or have previous experience with the framework.
      </p>

      <BaseButton href="/" medium>
        <BaseIcon />
        Button
      </BaseButton>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.nuxtStarter {
  width: 100%;

  h2,
  .link {
    color: $primary;
  }
}
</style>
