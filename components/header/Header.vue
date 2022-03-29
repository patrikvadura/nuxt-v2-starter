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

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .topBar {
    padding: $spacer;
    text-align: center;
    width: 100%;
  }

  .wrap {
    @include clamp($property:padding, $axis:null, $min:1, $max:1.5);

    width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;

    li a {
      display: block;
      padding: 1rem;
      text-decoration: none;
    }
  }

  .navigation {
    clear: both;
    float: left;
    max-height: 0;
    transition: max-height .2s ease-out;

    @include media-queries(sm) {
      clear: none;
      float: right;
      max-height: none;
    }

    &Icon {
      cursor: pointer;
      display: inline-block;
      float: right;
      padding: $spacer * 3 $spacer * 2;
      position: relative;
      user-select: none;

      @include media-queries(sm) {
        display: none;
      }

      .navIcon {
        background: $black;
        display: block;
        height: .15rem;
        position: relative;
        transition: background .2s ease-out;
        width: 1rem;

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
          top: .25rem;
        }

        &::after {
          top: -.25rem;
        }
      }
    }
  }

  .navigationBtn {
    display: none;

    &:checked {
      ~ .navigation {
        margin-top: 2rem;
        max-height: 100vh;

        @include media-queries(sm) {
          margin-top: inherit;
        }

        .navIcon {
          background: transparent;

          &::before {
            transform: rotate(-45deg);
          }

          &::after {
            transform: rotate(45deg);
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
      @include flex ($direction: column, $justify: center, $align: flex-start);

      background: $white;

      @include media-queries(sm) {
        flex-direction: row;
      }

      li a {
        font-size: 1rem;
        font-weight: $fontWeightRegular;
        color: $typography;
        border-top: .25rem solid $secondary;
        opacity: .5;
        transition: all .6s ease-in-out;

        @include media-queries(sm) {
          border-top: .25rem solid transparent;
        }

        &:hover {
          opacity: 1;

          @include media-queries(sm) {
            border-top: .25rem solid $primary;
          }
        }
      }
    }

    .social {
      display: none;
    }

    .headerLogo {
      position: absolute;
      height: 3rem;
      // transform: translateY(unquote("clamp(#{1} * 1rem, calc(#{1} * 1rem + (#{3} - #{1}) * #{$calcWidth}), #{3} * 1rem)"));

      ::v-deep svg {
        height: 3rem;
      }
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

    .navigationBtn:checked ~ .navigation {
      margin-top: 4rem;
    }
  }
}
</style>
