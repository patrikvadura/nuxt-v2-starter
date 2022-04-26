<template>
  <header
    id="header"
    class="header"
    :class="customClass"
  >
    <div class="wrap">
      <nuxt-link to="/">
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
    customClass: { type: String, default: 'customClass' }
  },

  data () {
    return {
      items: [
        { title: 'Dokumentace', href: 'https://nuxtjs.org/' },
        { title: 'GitHub', href: 'https://github.com/nuxt' },
        { title: 'Nuxt', href: 'https://nuxtjs.org/docs/get-started/installation' },
        { title: 'Sass', href: 'https://sass-lang.com/documentation' },
        { title: 'Icons', href: 'https://iconscout.com/unicons/explore/line' }
      ]
    }
  },

  mounted () {
    window.onscroll = function () {
      scrollFunction()
    }

    function scrollFunction () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').classList.add('headerScroll')
      } else {
        document.getElementById('header').classList.remove('headerScroll')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include flex($direction: column, $justify: flex-start, $align: center);
  @include clamp($property: height, $axis: null, $min: 4, $max: 6);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background: $headerBackgroundColor;
  text-transform: $headerLinkTransform;
  z-index: 10;
  transition: all .3s ease-in-out;

  @if $headerShadow == true {
    @include shadow($black, .1);
  }

  .wrap {
    @include flex ($direction: row, $justify: space-between, $align: center);

    flex-wrap: wrap;
    height: 100%;
  }

  &Scroll {
    @include clamp($property: height, $axis: null, $min: 4, $max: 4);

    ::v-deep .logo svg {
      @include clamp($property: height, $axis: null, $min: 2, $max: 2);
    }
  }

  .navigation {
    @include flex ($direction: row, $justify: center, $align: flex-start);

    margin: 0;
    padding: 0 1rem;
    list-style: none;
    overflow: hidden;
    transition: all .3s ease-in-out;

    @include media-queries(xs) {
      @include flex ($direction: column, $justify: flex-start, $align: flex-start);

      display: none;
      width: 100%;
      background: $headerMobileNavBackgroundColor;

      @if $headerShadow == true {
        @include shadow($black, .1);
      }
    }

    li a {
      display: block;
      padding: .5rem 1rem;
      font-size: $headerLinkSize;
      font-weight: $headerLinkWeight;
      color: $headerLinkColor;
      text-decoration: none;
      border-top: $headerLinkBorderSize solid $headerLinkBorderColor;
      transition: all .6s ease-in-out;

      &:hover {
        border-top: $headerLinkBorderSize solid $headerLinkBorderColorHover;
      }

      @include media-queries(xs) {
        padding: 1rem;
      }
    }

    &Icon {
      padding: $spacer * 3 $spacer * 2;
      cursor: pointer;
      user-select: none;

      @include media-queries(sm) {
        display: none;
      }

      .navIcon {
        position: relative;
        display: block;
        background: $headerMobileNavIconColor;
        width: 1.5rem;
        height: 1px;
        transition: all .2s ease-out;

        &::before,
        &::after {
          background: $headerMobileNavIconColor;
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
        margin-top: 2rem;
        padding: 1rem;
        display: inherit;

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
}

.customClass {
  //empty
}
</style>
