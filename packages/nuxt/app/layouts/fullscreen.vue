<template>
  <AppMobileContainer>
    <div class="sk-LayoutFullscreen">
      <header class="sk-LayoutFullscreen-header">
        <slot name="title" />
      </header>
      <main class="sk-LayoutFullscreen-main">
        <slot />
      </main>
    </div>
  </AppMobileContainer>
</template>

<style lang="scss">
.sk-LayoutFullscreen {
  display: flex;
  flex-direction: column;
  height: 100%;

  &-header {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    padding: var(--mk-size-6) var(--mk-size-4);
    font-family: var(--app-font-family-monospace);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  &-main {
    position: relative;
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--mk-size-4);
  }
}
</style>
