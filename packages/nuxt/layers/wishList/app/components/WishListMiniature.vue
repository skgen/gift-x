<template>
  <MkCard class="sk-WishListMiniature">
    <strong class="sk-WishListMiniature-name">Liste de {{ props.userFirstName }}</strong>
    <NuxtLink v-if="props.readRoute" :to="readRoute">
      <MkButton variant="outline">
        Voir la liste
        <MkIcon icon="lucide:clipboard-list" />
      </MkButton>
    </NuxtLink>
    <MkButton v-else variant="outline" disabled>
      Pas encore créée
      <MkIcon icon="lucide:clipboard-list" />
    </MkButton>
  </MkCard>
</template>

<script lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface Props {
  userFirstName: string;
  readRoute?: RouteLocationRaw;
}
</script>

<script lang="ts" setup>
const props = defineProps<Props>();
</script>

<style lang="scss">
.sk-WishListMiniature {
  display: flex;
  gap: var(--mk-size-2);
  align-items: center;
  justify-content: space-between;

  &-name {
    flex: 0 1 auto;
    font-size: 1.2rem;
  }
}
</style>
