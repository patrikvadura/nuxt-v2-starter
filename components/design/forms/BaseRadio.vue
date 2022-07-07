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
    default: { type: Boolean, default: true },
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
        default: this.default,
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
  cursor: pointer;
  font-size: $checkboxTextSize;
  user-select: none;

  // size
  @mixin checkboxSizingVariant ($sizes, $sizesAfter, $positions) {
    $size: split-str($sizes, ','); // height, width
    $sizeAfter: split-str($sizesAfter, ','); // height, width
    $position: split-str($positions, ','); // left, top, left2, top2

    padding-left: unquote("calc((#{nth($size, 2)} * 1rem) * 1.5)");
    line-height: unquote("calc(#{nth($size, 1)} * 1rem)");

    &:not(:last-child) {
      margin-bottom: unquote("calc((#{nth($size, 1)} * 1rem) * .5)");
    }

    .checkmark {
      height: unquote("calc(#{nth($size, 1)} * 1rem)");
      width: unquote("calc(#{nth($size, 2)} * 1rem)");

      &:after {
        height: unquote("calc(#{nth($sizeAfter, 1)} * 1rem)");
        width: unquote("calc(#{nth($sizeAfter, 2)} * 1rem)");
      }
    }

    @if $inputOutlined == true {
      .checkmark {
        &:after {
          left: unquote("calc(#{nth($position, 1)} * 1rem)");
          top: unquote("calc(#{nth($position, 2)} * 1rem)");
        }
      }
    } @else {
      .checkmark {
        &:after {
          left: unquote("calc((#{nth($position, 1)} * 1rem) + 5%)");
          top: unquote("calc((#{nth($position, 2)} * 1rem) + 5%)");
        }
      }
    }
  }

  &.default {
    @include checkboxSizingVariant(
      $sizes: '1.5 , 1.5',
      $sizesAfter: ".75 , .45",
      $positions: ".45 , .2"
    )
  }

  &.small {
    @include checkboxSizingVariant(
      $sizes: '1 , 1',
      $sizesAfter: ".5 , .3",
      $positions: ".3 , .1"
    );

    .checkmark {
      &:after {
        border-width: 0 .15rem .15rem 0 !important;
      }
    }
  }

  &.medium {
    @include checkboxSizingVariant(
      $sizes: '2 , 2',
      $sizesAfter: ".75 , .45",
      $positions: ".65 , .4"
    )
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
    border-radius: 50%;

    &:after {
      content: "";
      position: absolute;
      display: none;
      transform: rotate(45deg);
    }
  }
}
</style>
