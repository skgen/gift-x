<template>
  <MkCard class="sk-WishCard">
    <strong>{{ props.name }}</strong>

    <NuxtLink
      :to="props.singleRoute"
      class="sk-WishCard-link"
    >
      <MkButton variant="outline">
        Voir le souhait
      </MkButton>
    </NuxtLink>
  </MkCard>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

interface Props {
  name: string;
  singleRoute: RouteLocationRaw;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
.sk-WishCard {
  display: flex;
  gap: var(--mk-size-2);
  align-items: center;
  justify-content: space-between;

  &-link {
    flex: 0 0 auto;
  }
}
</style>
