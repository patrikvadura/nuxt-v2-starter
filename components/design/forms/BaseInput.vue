<template>
  <div
    class="baseInput"
  >
    <label
      :class="classes"
    >
      <slot />
    </label>

    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :class="classes"
    >
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, default: null },
    name: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },

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
        wide: this.wide,
        small: this.small,
        medium: this.medium
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.baseInput {
  @include flex($direction: column, $justify: null, $align: null);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  label {
    padding: .5rem 0;
    font-size: $inputTextSize;
    font-weight: $inputTextWeight;
    text-transform: $inputTextTransform;

    // color variations
    @mixin labelVariant ($color) {
      color: $color;
    }

    &.primary {
      @include labelVariant(
        $color: $inputTextColor
      )
    }

    &.negative {
      @include labelVariant(
        $color: colorContrast($inputColor)
      )
    }

    &.light {
      @include labelVariant(
        $color: themeColor("light")
      )
    }
  }

  input {
    padding: .5rem 1rem;
    font-size: $inputTextSize;
    font-weight: $inputTextWeight;
    text-transform: $inputTextTransform;
    border-radius: $inputBorderRadius;
    transition: all 300ms ease-in-out;

    // sizing
    &.wide {
      justify-content: center;
      width: 100%;
    }

    &.medium {
      @include flex($direction: null, $justify: center, $align: null);

      min-width: 15rem;
      font-size: $buttonTextSize * 1.25;

      @include media-queries-down(sm) {
        width: 100%;
      }
    }

    &.small {
      padding: .25rem .5rem;

      ::v-deep i {
        margin-right: .25rem;
        font-size: $buttonTextSize !important;
      }
    }

    // color variations
    @mixin inputVariant ($background, $color, $border) {
      @if $inputOutlined == true {
        color: $color;
        background: transparent;
        border: $border;

        &::placeholder {
          color: rgba($color, .3);
        }
      } @else {
        color: $color;
        background: rgba($background, .2);
        border: none;

        &::placeholder {
          color: rgba(colorContrast($color), .5);
        }
      }

      @if $inputShadow == true {
        @include shadow(themeColor("black"), .1)
      }
    }

    &.primary {
      @include inputVariant(
        $background: $inputColor,
        $color: $inputTextColor,
        $border: $inputBorder
      )
    }

    &.negative {
      @include inputVariant(
        $background: colorContrast($inputColor),
        $color: colorContrast($inputColor),
        $border: $inputBorderWidth solid rgba(colorContrast($inputColor), .5)
      )
    }

    &.light {
      @include inputVariant(
        $background: themeColor("light"),
        $color: $inputColor,
        $border: $inputBorderWidth solid rgba(themeColor("light"), .5)
      )
    }
  }
}
</style>
