<template>
  <a
    :id="id"
    :href="href"
    :class="classes"
    class="baseButton"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    id: { type: String, default: null },
    href: { type: String, default: '' },

    // color variations
    primary: { type: Boolean, default: true },
    secondary: { type: Boolean, default: false },
    white: { type: Boolean, default: false },
    gray: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },

    // sizing
    wide: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false }
  },
  computed: {
    classes () {
      return {
        // color variations
        'baseButton-primary': this.primary,
        'baseButton-secondary': this.secondary,
        'baseButton-white': this.white,
        'baseButton-gray': this.gray,
        'baseButton-plain': this.plain,

        // sizing
        'baseButton-wide': this.wide,
        'baseButton-small': this.small,
        'baseButton-medium': this.medium
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.baseButton {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: .75rem 1rem;
  font-size: .75rem;
  text-align: center;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &::first-letter {
    text-transform: uppercase;
  }

  // icon
  ::v-deep i {
    margin-right: .5rem;
    float: left;
  }

  // sizing
  &-wide {
    justify-content: center;
    width: 100%;
  }

  &-medium {
    display: flex;
    justify-content: center;
    width: 15rem;
    font-size: 1rem;

    @include media-queries(xs) {
      width: 100%;
    }
  }

  &-small {
    padding: .25rem .5rem;
  }

  // color variations
  @mixin colorState ($background, $backgroundHover, $color, $colorHover) {
    background: $background;
    color: $color;

    &:hover {
      background: $backgroundHover;
      color: $colorHover;
    }

    ::v-deep i {
      color: $color !important;

      &:hover {
        color: $colorHover !important;
      }
    }
  }

  &-primary {
    @include colorState ($primary, $primaryHover, $white, $white);
  }

  &-secondary {
    @include colorState ($secondary, $secondaryHover, $white, $white);
  }

  &-white {
    @include colorState ($white, $primaryHover, $primary, $primary);
  }

  &-gray {
    @include colorState ($gray, $grayHover, $typography, $typography);
  }

  &-plain {
    @include colorState (transparent, transparent, $typography, $primaryHover);
  }
}
</style>
