<template>
  <div>
    <Header />

    <div class="body">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'
import Footer from '~/components/footer/Footer.vue'

export default {
  name: 'Default',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.body {
  @include clamp($property: margin-top, $axis:null, $values: "4 , 6");
}
</style>
