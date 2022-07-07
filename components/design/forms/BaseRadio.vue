<template>
  <label
    :id="id"
    class="baseRadio"
    :class="classes"
  >
    <slot />

    <input
      type="radio"
      :name="name"
      :checked="checked"
    >

    <span
      class="checkmark"
    />
  </label>
</template>

<script>
export default {
  props: {
    id: { type: String, default: null },
    name: { type: String, default: 'radio' },
    checked: { type: Boolean, default: false },

    // color variations
    primary: { type: Boolean, default: true },
    negative: { type: Boolean, default: false },
    light: { type: Boolean, default: false },

    // sizing
    wide: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    medium: { type: Boolean, default: false }
  },
  computed: {
    classes () {
      return {
        // color variations
        primary: this.primary,
        negative: this.negative,
        light: this.light,

        // sizing
        small: this.small,
        medium: this.medium
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.baseRadio {
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: $checkboxTextSize;
  line-height: 1.5rem;
  user-select: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  // color variations
  @mixin checkboxVariant ($background, $color, $border, $checkmark) {
    @if $inputOutlined == true {
      color: $color;

      input:checked ~ .checkmark {
        background: $background;
      }

      .checkmark {
        background: transparent;
        border: $border;

        &:after {
          left: .45rem;
          top: .2rem;
          border: solid $checkmark;
          border-width: 0 .2rem .2rem 0;
        }
      }

      &:hover input ~ .checkmark {
        background: $background;
      }
    } @else {
      color: $color;

      input:checked ~ .checkmark {
        background: $background;
      }

      .checkmark {
        background: rgba($background, .3);
        border: none;

        &:after {
          left: .5rem;
          top: .3rem;
          border: solid $checkmark;
          border-width: 0 .2rem .2rem 0;
        }
      }

      &:hover input ~ .checkmark {
        background: $background;
      }
    }
  }

  &.primary {
    @include checkboxVariant(
      $background: $checkboxColor,
      $color: $checkboxTextColor,
      $border: $checkboxBorder,
      $checkmark: colorContrast($checkboxColor)
    )
  }

  &.negative {
    @include checkboxVariant(
      $background: colorContrast($checkboxColor),
      $color: colorContrast($checkboxColor),
      $border: $checkboxBorderWidth solid rgba(colorContrast($checkboxColor), .5),
      $checkmark: $checkboxColor
    )
  }

  &.light {
    @include checkboxVariant(
      $background: themeColor("light"),
      $color: themeColor("light"),
      $border: $checkboxBorderWidth solid rgba(themeColor("light"), .5),
      $checkmark: colorContrast($checkboxColor)
    )
  }

  input {
    display: none;

    &:checked {
      ~ .checkmark {
        &:after {
          display: block;
        }
      }
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;

    &:after {
      content: "";
      position: absolute;
      display: none;
      width: .45rem;
      height: .75rem;
      transform: rotate(45deg);
    }
  }
}
</style>
