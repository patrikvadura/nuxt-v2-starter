<template>
  <div>
    <Header
      :variant="'01'"
    />
    <div class="body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'

export default {
  name: 'Default',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.body {
  @include clamp($property:margin-top, $axis:null, $min:4, $max:6);
}
</style>
