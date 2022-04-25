<template>
  <div>
    <Header
      :variant="'01'"
    />
    <Nuxt />
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
