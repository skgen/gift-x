<template>
  <NuxtLayout name="default" class="sk-AppDashboardPage">
    <template #title>
      Dashboard
    </template>
    <div class="sk-AppDashboardPage-container">
      <h2 class="sk-AppDashboardPage-name">
        Hello {{ me?.firstName }} !
      </h2>

      Tu souhaites te déconnecter ?
      <AppLogoutCta />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: [
    'auth',
  ],
});

const { me } = useSessionStore();
</script>

<style lang="scss">
.sk-AppDashboardPage {
  &-container {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    gap: var(--mk-size-4);
    align-items: center;
    justify-content: center;
  }

  &-name {
    font-size: 1.5rem;
  }
}
</style>
