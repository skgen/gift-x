<template>
  <NuxtLayout name="default" class="sk-IndexPage">
    <template #title>
      Évenements
    </template>
    <div class="sk-IndexPage-container">
      <AppEvents />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: [
    'auth',
  ],
});
</script>
