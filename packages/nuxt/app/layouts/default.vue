<template>
  <AppMobileContainer>
    <div class="sk-LayoutDefault">
      <header class="sk-LayoutDefault-header">
        <div class="sk-LayoutDefault-header-nav">
          <MkButton icon variant="outline" @click="() => router.back()">
            <MkIcon icon="lucide:arrow-left" />
          </MkButton>
          <NuxtLink to="/">
            <MkButton icon variant="outline">
              <MkIcon icon="lucide:house" />
            </MkButton>
          </NuxtLink>
        </div>
        <h1 class="sk-LayoutDefault-header-title">
          <slot name="title" />
        </h1>
        <div v-if="sessionStore.me" class="sk-LayoutDefault-header-user">
          <NuxtLink to="/dashboard">
            <MkButton variant="outline">
              {{ name }}
              <MkIcon icon="lucide:bot" />
            </MkButton>
          </NuxtLink>
        </div>
      </header>
      <slot name="subheader" />
      <main class="sk-LayoutDefault-main">
        <slot />
      </main>
      <div v-if="$slots.fab" class="sk-LayoutDefault-fab">
        <slot name="fab" />
      </div>
      <!-- <div
        ref="dashboard"
        class="sk-LayoutDefault-dashboard"
      >
        <AppLogoutCta />
      </div> -->
    </div>
  </AppMobileContainer>
</template>

<script lang="ts" setup>
const router = useRouter();

const sessionStore = useSessionStore();

const name = computed(() => {
  const baseName = sessionStore.me?.firstName;
  if (!baseName) {
    return null;
  }
  const maxLength = 10;
  if (baseName.length > maxLength) {
    return `${baseName.substring(0, maxLength)}...`;
  }
  return baseName;
});
</script>

<style lang="scss">
@use '@skgn/melkor/styles/mixins' as melkor;

.sk-LayoutDefault {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;

  &-header {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--mk-size-4);
    background-color: oklch(from var(--mk-core-background-color) l c h / 80%);
    backdrop-filter: blur(10px);
    border-block-end: 1px solid var(--mk-border-color);

    &-nav,
    &-user {
      flex: 1 1 100%;
    }

    &-nav {
      display: flex;
      gap: var(--mk-size-2);
      align-items: center;
    }

    &-user {
      display: flex;
      gap: var(--mk-size-2);
      align-items: center;
      justify-content: flex-end;

      svg {
        font-size: 1.2em;
      }
    }

    &-title {
      flex: 0 0 auto;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  &-main {
    position: relative;
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    padding: var(--mk-size-4);
  }

  &-fab {
    position: fixed;
    right: var(--mk-size-5);
    bottom: var(--mk-size-5);
    z-index: 10;

    @include melkor.screen-from-sm {
      right: calc(var(--app-safe-area-x-size) + var(--mk-size-5));
      bottom: var(--mk-size-5);
    }
  }
}
</style>
