<template>
  <div class="sk-AppMobileContainer">
    <div class="sk-AppMobileContainer-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@use '@skgn/melkor/styles/mixins' as melkor;

.sk-AppMobileContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &-content {
    position: relative;
    width: var(--mk-screen-sm-size);
    max-width: 100vw;
    height: 100%;

    @include melkor.screen-from('sm') {
      border-inline: 1px solid var(--mk-border-color);
    }
  }
}
</style>
