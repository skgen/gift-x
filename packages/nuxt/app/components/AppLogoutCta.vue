<template>
  <MkButton variant="outline" @click="() => logout()">
    Me déconnecter
    <AppLoader v-if="pending" />
  </MkButton>
</template>

<script lang="ts" setup>
const { execute: logout, pending } = useLogout();
</script>
