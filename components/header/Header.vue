<template>
  <header
    class="header"
    :class="'header-' + variant"
  >
    <div class="wrap">
      <nuxt-link to="/" class="headerLogo">
        <BaseLogo />
      </nuxt-link>

      <input id="navigationBtn" class="navigationBtn" type="checkbox">

      <label class="navigationIcon" for="navigationBtn">
        <span class="navIcon" />
      </label>

      <ul class="navigation">
        <li
          v-for="item in items"
          :key="item.id"
        >
          <a :href="item.href">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    variant: { type: String, default: '01' }
  },

  data () {
    return {
      items: [
        { title: 'Dokumentace', href: 'https://nuxtjs.org/' },
        { title: 'GitHub', href: 'https://github.com/nuxt' },
        { title: 'Sass', href: 'https://sass-lang.com/documentation' },
        { title: 'Icons', href: 'https://iconscout.com/unicons/explore/line' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include flex($direction:column, $justify:center, $align:center);
  @include clamp($property:height, $axis:null, $min:4, $max:6);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .navigation {
    @include flex ($direction: row, $justify: center, $align: flex-start);

    max-height: none;
    list-style: none;
    overflow: hidden;
    transition: max-height .2s ease-out;

    @include media-queries(xs) {
      flex-direction: column;
      width: 100%;
      height: 100%;
      max-height: 0;
    }

    li a {
      display: block;
      padding: .5rem 1rem;
      text-decoration: none;

      @include media-queries(xs) {
        padding: 1rem;
      }

      &:first-of-type {
        @include media-queries(xs) {
          margin-top: 1rem;
        }
      }
    }

    &Icon {
      position: relative;
      display: inline-block;
      float: right;
      padding: $spacer * 3 $spacer * 2;
      cursor: pointer;
      user-select: none;

      @include media-queries(sm) {
        display: none;
      }

      .navIcon {
        position: relative;
        display: block;
        background: $secondary;
        width: 1.5rem;
        height: 1px;
        transition: background .2s ease-out;

        &::before,
        &::after {
          background: $black;
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          transition: all .2s ease-out;
        }

        &::before {
          top: .5rem;
        }

        &::after {
          top: -.5rem;
        }
      }
    }
  }

  .navigationBtn {
    display: none;

    &:checked {
      ~ .navigation {
        max-height: 100vh;

        &Icon {
          .navIcon {
            background: transparent;

            &::before {
              transform: translate(0, -.5rem) rotate(-45deg);
            }

            &::after {
              transform: translate(0, .5rem)rotate(45deg);
            }
          }
        }
      }

      &:not(.steps) {
        .navIcon {
          &::before,
          &::after {
            top: 0;
          }
        }
      }
    }
  }

  //states
  &-01 {
    background: $white;
    text-transform: uppercase;

    @include shadow($black, .1);

    .topBar {
      background: $primary;
      color: $secondary;
      font-size: 1rem;
    }

    ul {
      background: $white;

      li a {
        font-size: 1rem;
        font-weight: $fontWeightRegular;
        color: $typography;
        border-top: .25rem solid transparent;
        transition: all .6s ease-in-out;

        &:hover {
          @include media-queries(sm) {
            border-top: .25rem solid $primary;
          }
        }
      }
    }

    .social {
      display: none;
    }

    .navigation {
      float: left;

      @include media-queries(sm) {
        float: right;
      }

      &Icon {
        .navIcon {
          background: $black;

          &::before,
          &::after {
            background: $black;
          }
        }
      }
    }
  }
}
</style>
