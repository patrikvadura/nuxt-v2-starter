<template>
  <div class="nuxtStarter">
    <nuxt-link class="nuxtStarterLogo" to="/">
      <BaseLogo />
    </nuxt-link>

    <div class="pt-5">
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
export default {
}
</script>

<style lang="scss" scoped>
.nuxtStarter {
  padding: 3rem;

  &Logo {
    @include flex ($direction: null, $justify: center, $align: center);

    ::v-deep svg {
      width: 10rem;
    }
  }

  h2,
  .link {
    color: $primary;
  }
}
</style>
