<template>
  <MkTheApp>
    <NuxtPage />
  </MkTheApp>
  <NuxtRouteAnnouncer />
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'fr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
    },
  ],
});
</script>

<style lang="scss">
@use '@skgn/melkor/styles/scss' as melkor;
@import 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap';

:root {
  --mk-font-family: 'Roboto', -apple-system, 'BlinkMacSystemFont', ubuntu, sans-serif;
  --app-font-family-monospace: 'Roboto Mono', -apple-system, 'BlinkMacSystemFont', ubuntu, sans-serif;
  --app-safe-area-x-size: calc(50vw - (var(--mk-screen-sm-size) / 2));
}
</style>
