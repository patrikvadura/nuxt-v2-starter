<template>
  <div>
    <div class="heading">
      <div class="wrap">
        <h1>
          Welcome to your Nuxt v2 Starter
        </h1>

        <p>
          I recommend you take a look at the <a href="https://nuxtjs.org" class="link" target="_blank">Nuxt documentation</a>, whether you are new or have previous experience with the framework.
        </p>

        <h4>
          Design elements / layouts
        </h4>

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
    </div>

    <div class="wrap">
      <h4 id="typography" class="mt-4">
        Typography
      </h4>

      <h1>H1 title</h1>
      <h2>H2 title</h2>
      <h3>H3 title</h3>
      <h4>H4 title</h4>
      <h5>H5 title</h5>
      <p>Paragraph</p>

      <hr class="mt-4">

      <h4 id="colors" class="mt-4">
        Colors
      </h4>

      <div class="colorExample__primary" />
      <div class="colorExample__secondary" />
      <div class="colorExample__positive" />
      <div class="colorExample__negative" />
      <div class="colorExample__white" />
      <div class="colorExample__black" />
      <div class="colorExample__gray" />
      <div class="colorExample__light" />
      <div class="colorExample__dark" />
      <div class="colorExample__typography" />

      <hr class="mt-4">

      <h4 id="buttons" class="mt-4">
        Buttons
      </h4>

      <h5>Size - small</h5>

      <div class="row">
        <BaseButton href="/" small>
          Button
        </BaseButton>

        <BaseButton href="/" secondary small>
          Button
        </BaseButton>

        <BaseButton href="/" light small>
          Button
        </BaseButton>

        <BaseButton href="/" white small>
          Button
        </BaseButton>
      </div>

      <div class="row mt-3">
        <BaseButton href="/" small>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" secondary small>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" light small>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" white small>
          <BaseIcon />
          Button
        </BaseButton>
      </div>

      <h5>Size - normal</h5>

      <div class="row">
        <BaseButton href="/">
          Button
        </BaseButton>

        <BaseButton href="/" secondary>
          Button
        </BaseButton>

        <BaseButton href="/" light>
          Button
        </BaseButton>

        <BaseButton href="/" white>
          Button
        </BaseButton>
      </div>

      <div class="row mt-3">
        <BaseButton href="/">
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" secondary>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" light>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" white>
          <BaseIcon />
          Button
        </BaseButton>
      </div>

      <h5>Size - medium</h5>

      <div class="row">
        <BaseButton href="/" medium>
          Button
        </BaseButton>

        <BaseButton href="/" secondary medium>
          Button
        </BaseButton>

        <BaseButton href="/" light medium>
          Button
        </BaseButton>

        <BaseButton href="/" white medium>
          Button
        </BaseButton>
      </div>

      <div class="row mt-3">
        <BaseButton href="/" medium>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" secondary medium>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" light medium>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton href="/" white medium>
          <BaseIcon />
          Button
        </BaseButton>
      </div>

      <h5>Size - medium</h5>

      <div class="row">
        <BaseButton href="/" small wide>
          <BaseIcon />
          Button
        </BaseButton>

        <BaseButton class="mt-3" href="/" secondary wide>
          <BaseIcon />
          Button
        </BaseButton>
      </div>

      <hr class="mt-4">

      <h4 id="buttons" class="mt-4">
        Forms
      </h4>

      <h5>Input</h5>

      <div class="grid-3">
        <div>
          <BaseInput placeholder="Placeholder">
            Label
          </BaseInput>

          <BaseInput placeholder="Placeholder" />
        </div>

        <div class="p-2 bg-primary">
          <BaseInput placeholder="Placeholder" negative>
            Label
          </BaseInput>

          <BaseInput placeholder="Placeholder" negative />
        </div>

        <div>
          <BaseInput placeholder="Placeholder" light>
            Label
          </BaseInput>

          <BaseInput placeholder="Placeholder" light />
        </div>
      </div>

      <h5>Checkbox</h5>

      <div class="grid-3">
        <div>
          <BaseCheckbox checked>
            Label
          </BaseCheckbox>

          <BaseCheckbox>
            Label
          </BaseCheckbox>
        </div>

        <div class="p-2 bg-primary">
          <BaseCheckbox checked negative>
            Label
          </BaseCheckbox>

          <BaseCheckbox negative>
            Label
          </BaseCheckbox>
        </div>

        <div>
          <BaseCheckbox checked light>
            Label
          </BaseCheckbox>

          <BaseCheckbox light>
            Label
          </BaseCheckbox>
        </div>
      </div>

      <h5>Radio</h5>

      <div class="grid-3">
        <div>
          <BaseRadio name="radio" small checked>
            Label
          </BaseRadio>

          <BaseRadio name="radio" small>
            Label
          </BaseRadio>
        </div>

        <div class="p-2 bg-primary">
          <BaseRadio name="radio2" small checked negative>
            Label
          </BaseRadio>

          <BaseRadio name="radio2" small negative>
            Label
          </BaseRadio>
        </div>

        <div>
          <BaseRadio name="radio3" small checked light>
            Label
          </BaseRadio>

          <BaseRadio name="radio3" small light>
            Label
          </BaseRadio>
        </div>
      </div>

      <div class="grid-3">
        <div>
          <BaseRadio name="radio4" checked>
            Label
          </BaseRadio>

          <BaseRadio name="radio4">
            Label
          </BaseRadio>
        </div>

        <div class="p-2 bg-primary">
          <BaseRadio name="radio5" checked negative>
            Label
          </BaseRadio>

          <BaseRadio name="radio5" negative>
            Label
          </BaseRadio>
        </div>

        <div>
          <BaseRadio name="radio6" checked light>
            Label
          </BaseRadio>

          <BaseRadio name="radio6" light>
            Label
          </BaseRadio>
        </div>
      </div>

      <div class="grid-3">
        <div>
          <BaseRadio name="radio7" medium checked>
            Label
          </BaseRadio>

          <BaseRadio name="radio7" medium>
            Label
          </BaseRadio>
        </div>

        <div class="p-2 bg-primary">
          <BaseRadio name="radio8" medium checked negative>
            Label
          </BaseRadio>

          <BaseRadio name="radio8" medium negative>
            Label
          </BaseRadio>
        </div>

        <div>
          <BaseRadio name="radio9" medium checked light>
            Label
          </BaseRadio>

          <BaseRadio name="radio9" medium light>
            Label
          </BaseRadio>
        </div>
      </div>

      <hr class="mt-4">

      <h4 id="grid" class="mt-4">
        Grid examples
      </h4>

      <h5>1 column grid</h5>

      <div class="grid">
        <div class="gridBox" />
      </div>

      <h5 class="mt-4">
        2 columns grid
      </h5>

      <div class="grid-2">
        <div class="gridBox" />
        <div class="gridBox" />
      </div>

      <h5 class="mt-4">
        3 columns grid
      </h5>

      <div class="grid-3">
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
      </div>

      <h5 class="mt-4">
        4 columns grid
      </h5>

      <div class="grid-4">
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
      </div>

      <h5 class="mt-4">
        5 columns grid
      </h5>

      <div class="grid-5">
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
      </div>

      <h5 class="mt-4">
        6 columns grid
      </h5>

      <div class="grid-6">
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
        <div class="gridBox" />
      </div>

      <h5 class="mt-4">
        Combine columns grid - 2 : 1
      </h5>

      <div class="grid-2">
        <div class="grid-4">
          <div class="gridBox" />
          <div class="gridBox" />
        </div>

        <div class="gridBox" />
      </div>

      <h5 class="mt-4">
        Combine columns grid - 3 : 2
      </h5>

      <div class="grid-2">
        <div class="grid-6">
          <div class="gridBox" />
          <div class="gridBox" />
          <div class="gridBox" />
        </div>

        <div class="grid-4">
          <div class="gridBox" />
          <div class="gridBox" />
        </div>
      </div>

      <h4 id="columns" class="mt-4">
        Columns
      </h4>

      <h5>Column sizes</h5>

      <div class="container">
        <div class="row">
          <div class="col-10 gridBox">
            100%
          </div>
          <div class="col-9 gridBox">
            90%
          </div>
          <div class="col-1 gridBox">
            10%
          </div>
          <div class="col-8 gridBox">
            80%
          </div>
          <div class="col-2 gridBox">
            20%
          </div>
          <div class="col-7 gridBox">
            70%
          </div>
          <div class="col-3 gridBox">
            30%
          </div>
          <div class="col-6 gridBox">
            60%
          </div>
          <div class="col-4 gridBox">
            40%
          </div>
          <div class="col-10 col-md-5 gridBox">
            50%
          </div>
          <div class="col-10 col-md-5 gridBox">
            50%
          </div>
        </div>
      </div>

      <h5>Row cols</h5>

      <div class="container">
        <div class="row-cols-3">
          <div class="col gridBox">
            auto
          </div>
          <div class="col gridBox">
            auto
          </div>
          <div class="col gridBox">
            auto
          </div>
          <div class="col gridBox">
            auto
          </div>
          <div class="col gridBox">
            auto
          </div>
        </div>
      </div>

      <h5>Combine</h5>

      <div class="container">
        <div class="row">
          <div class="col-3 gridBox">
            30%
          </div>
          <div class="col-3 gridBox">
            30%
          </div>
          <div class="col-4 gridBox">
            40%
          </div>
          <div class="col-2 gridBox">
            20%
          </div>
          <div class="col-2 gridBox">
            20%
          </div>
          <div class="col-2 gridBox">
            20%
          </div>
          <div class="col-2 gridBox">
            20%
          </div>
          <div class="col-2 gridBox">
            20%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Typography', href: '#typography' },
        { title: 'Buttons', href: '#buttons' },
        { title: 'Grid', href: '#grid' },
        { title: 'Columns & Rows', href: '#columns' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  padding: 3rem 0;
  background: themeColor("primary");

  h1,
  .link {
    color: themeColor("white");
  }
}

.navigation {
  @include flex($direction: row, $justify: flex-start, $align: center);

  padding: 0;
  list-style: none;

  li a {
    padding-right: 1rem;
    color: themeColor("white");
  }
}

.gridBox {
  text-align: center;
  line-height: 10rem;
  height: 10rem;
  color: themeColor("white");
  background: rgba(themeColor("primary"), .5);

  &:nth-child(odd) {
    background: rgba(themeColor("primary"), 1);
  }
}

@mixin colorExample($color) {
  background: $color;

  &:hover {
    background: darken($color, 15%);
  }
}

.colorExample {
  display: inline-block;
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  @each $color, $value in $themeColors {
    @if $color == "white" {
      &__#{$color} {
        @extend .colorExample;
        @include colorExample($value);
        @include shadow(themeColor("black"), .1);
      }
    } @else {
      &__#{$color} {
        @extend .colorExample;
        @include colorExample($value);
      }
    }
  }
}
</style>
