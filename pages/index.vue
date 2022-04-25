<template>
  <div class="wrap">
    <div class="mt-5 pt-5">
      <h2>
        Welcome to your Nuxt v2 Starter
      </h2>

      <p>
        I recommend you take a look at the <a href="https://nuxtjs.org" class="link" target="_blank">Nuxt documentation</a>, whether you are new or have previous experience with the framework.
      </p>

      <BaseButton href="/" medium>
        <BaseIcon />
        Button
      </BaseButton>
    </div>

    <h4 class="mt-5">
      Grid examples
    </h4>

    <h5>1 column grid</h5>

    <div class="grid">
      <div class="gridBox" />
    </div>

    <h5 class="mt-5">
      2 columns grid
    </h5>

    <div class="grid-2">
      <div class="gridBox" />
      <div class="gridBox" />
    </div>

    <h5 class="mt-5">
      3 columns grid
    </h5>

    <div class="grid-3">
      <div class="gridBox" />
      <div class="gridBox" />
      <div class="gridBox" />
    </div>

    <h5 class="mt-5">
      4 columns grid
    </h5>

    <div class="grid-4">
      <div class="gridBox" />
      <div class="gridBox" />
      <div class="gridBox" />
      <div class="gridBox" />
    </div>

    <h5 class="mt-5">
      5 columns grid
    </h5>

    <div class="grid-5">
      <div class="gridBox" />
      <div class="gridBox" />
      <div class="gridBox" />
      <div class="gridBox" />
      <div class="gridBox" />
    </div>

    <h5 class="mt-5">
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

    <h5 class="mt-5">
      Combine columns grid - 2 : 1
    </h5>

    <div class="grid-2">
      <div class="grid-4">
        <div class="gridBox" />
        <div class="gridBox" />
      </div>

      <div class="gridBox" />
    </div>

    <h5 class="mt-5">
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

    <h4 class="mt-5">
      Columns
    </h4>

    <h5>Column sizes</h5>

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
      <div class="col-5 gridBox">
        50%
      </div>
      <div class="col-5 gridBox">
        50%
      </div>
    </div>

    <h5>Combine</h5>

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
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
h2,
.link {
  color: $primary;
}

.gridBox {
  text-align: center;
  line-height: 10rem;
  height: 10rem;
  color: $white;
  background: rgba($primary, .5);

  &:nth-child(odd) {
    background: rgba($primary, 1);
  }
}
</style>
