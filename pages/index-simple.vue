<template>
  <div>
    <h1>
      Vítejte ve správci projektů
    </h1>

    <h4>
      Zadejte kód projektu:
    </h4>

    <form action="" target="_blank">
      <BaseInput id="query" name="query" placeholder="např. Q3xzk15Pskn" />

      <BaseButtonSubmit value="search" medium>
        Vyhledat
      </BaseButtonSubmit>
    </form>

    <script>
      $("form").submit(function(e){
      e.preventDefault();
      window.location.replace("http://projekty.patrikvadura.cz/"+$("#query").val());
      })
    </script>
  </div>
</template>

<script>
export default {
  layout: 'simple'
}
</script>

<style lang="scss" scoped>
form {
  @include flex($direction: column, $justify: center, $align: center);

  text-align: center;
}

::v-deep .baseInput {
  width: 20rem;
}
</style>
