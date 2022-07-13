<template>
  <div>
    <i
      class="BaseIcon uil"
      :class="'uil-' + icon"
      :style="{ fontSize: size, color: color }"
    />
  </div>
</template>

<script>
export default {
  props: {
    size: { type: String, default: '1.5rem' },
    icon: { type: String, default: 'check-circle' },

    // color variations
    color: { type: String, default: '#000' }
  }
}
</script>

<style lang="scss" scoped>
.BaseIcon {
  color: themeColor("black");
}
</style>
