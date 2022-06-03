<template>
  <footer
    class="footer"
    :class="customClass"
  >
    <div class="wrap align-items-center">
      <div class="footerCopyright">
        &copy; Copyright 2022 Nuxt Framework v02
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    customClass: { type: String, default: 'customClass' }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @include flex($direction: column, $justify: center, $align: flex-start);
  @include clamp($property: height, $axis: null, $min: 4, $max: 6);

  width: 100%;
  margin: 2rem 0 0;
  padding: 0;
  text-transform: $footerCopyrightTextTransform;
  transition: all .3s ease-in-out;

  @if $footerStyle == border {
    border-top: $footerBorderSize solid $footerBorderColor;
  }

  @if $footerStyle == background {
    background: $footerBackgroundColor;
  }

  &Copyright {
    color: $footerCopyrightTextColor;
    font-size: $footerCopyrightTextSize;
    font-weight: $footerCopyrightTextWeight;
    text-transform: $footerCopyrightTextTransform;
  }
}

.customClass {
  //empty
}
</style>
