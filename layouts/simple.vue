<template>
  <div>
    <div class="body">
      <BaseLogo />

      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Simple'
}
</script>

<style lang="scss" scoped>
.body {
  @include flex($direction: column, $justify: center, $align: center);

  height: 100%;
  min-height: 100vh;
  text-align: center;
  background: rgba(themeColor("primary"), .2);
}
</style>
