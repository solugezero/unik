<template>
  <div class="header">
    <div class="header_inner">
      <NuxtLink to="/"><img src="@/assets/img/logo.png" alt="logo" class="header_inner__logo" /></NuxtLink>
      <div class="header_inner_buttons">
        <NuxtLink to="/sites"><ui-button>Сайты</ui-button></NuxtLink>
        <NuxtLink to="/"><ui-button>Файлы</ui-button></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background: #0b2d50;
  padding: 0 20px;

  &_inner {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    color: #fff;
    justify-content: space-between;

    &__logo,
    a {
      height: 100%;
    }

    &_buttons {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }
}
</style>
