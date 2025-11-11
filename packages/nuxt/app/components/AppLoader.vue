<template>
  <MkIcon class="sk-AppLoader" icon="lucide:loader-circle" />
</template>

<style lang="scss">
.sk-AppLoader {
  animation: loader-rotate 512ms ease-in-out infinite;

  @keyframes loader-rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
}
</style>
