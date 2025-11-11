<template>
  <div class="sk-ErrorLayout">
    <div class="sk-ErrorLayout-main">
      <div class="sk-ErrorLayout-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sk-ErrorLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-main {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

    &-container {
      display: flex;
      flex: 1 1 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: var(--app-container-width-size);
    }
  }
}
</style>
