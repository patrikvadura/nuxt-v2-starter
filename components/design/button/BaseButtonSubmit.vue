<template>
  <button
    :id="id"
    :type="type"
    :value="value"
    :class="classes"
    class="baseButton"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    id: { type: String, default: null },
    type: { type: String, default: 'submit' },
    value: { type: String, default: '' },

    // color variations
    primary: { type: Boolean, default: true },
    secondary: { type: Boolean, default: false },
    white: { type: Boolean, default: false },
    gray: { type: Boolean, default: false },
    light: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },

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
        'baseButton-black': this.black,
        'baseButton-gray': this.gray,
        'baseButton-light': this.light,
        'baseButton-dark': this.dark,
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
  @include flex($direction: row, $justify: null, $align: center);

  padding: .5rem 1.5rem;
  text-align: center;
  font-size: $buttonTextSize;
  font-weight: $buttonTextWeight;
  text-decoration: $buttonTextDecoration;
  border-radius: $buttonBorderRadius;
  cursor: pointer;
  outline: none !important;
  box-shadow: none !important;
  transition: all 300ms ease-in-out;

  &:not(:only-child) {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &::first-letter {
    text-transform: uppercase;
  }

  &.disabled,
  &:disabled {
    opacity: .5;
    cursor: not-allowed;
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
    @include flex($direction: null, $justify: center, $align: null);

    padding: 1rem 1.5rem;
    min-width: 15rem;
    font-size: $buttonTextSize * 1.25;

    @include media-queries-down(sm) {
      width: 100%;
    }
  }

  &-small {
    padding: .25rem .5rem;

    ::v-deep i {
      margin-right: .25rem;
      font-size: $buttonTextSize !important;
    }
  }

  // color variations
  @mixin buttonVariant ($background) {
    color: colorContrast($background);

    @if $buttonOutlined {
      border: .25rem solid $background !important;
      background: transparent !important;

      &:hover {
        border: .25rem solid darken($background, 15%) !important;
      }
    } @else {
      border: none !important;
      background: $background !important;

      &:hover {
        background: darken($background, 15%) !important;
      }
    }

    ::v-deep i {
      color: colorContrast($background) !important;
    }
  }

  @each $color, $value in $themeColors {
    &-#{$color} {
      @include buttonVariant($value);
    }
  }
}
</style>
