<template>
  <label
    :id="id"
    class="container"
  >
    <slot />

    <input
      type="checkbox"
      checked="checked"
    >

    <span
      class="checkmark"
      :class="classes"
    />
  </label>
</template>

<script>
export default {
  props: {
    id: { type: String, default: null },

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
.container {
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: $checkboxTextSize;
  line-height: 1.5rem;
  user-select: none;

  input {
    display: none;

    &:checked {
      ~ .checkmark {
        background: $checkboxColor;

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
    background: rgba($checkboxColor, .5);
    border-radius: $checkboxBorderRadius;

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: .5rem;
      top: .3rem;
      width: .45rem;
      height: .75rem;
      border: solid colorContrast($checkboxColor);
      border-width: 0 .2rem .2rem 0;
      transform: rotate(45deg);
    }
  }

  &:hover input ~ .checkmark {
    background: $checkboxColor;
  }
}
</style>
