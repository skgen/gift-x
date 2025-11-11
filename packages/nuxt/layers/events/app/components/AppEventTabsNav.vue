<template>
  <div class="sk-AppEventTabsNav">
    <AppTabLinks :active-tab="activeTab">
      <template #tab-0>
        <NuxtLink :to="`/event/${props.eventId}/wish-list/self`">
          Ma liste
        </NuxtLink>
      </template>
      <template #tab-1>
        <NuxtLink :to="`/event/${props.eventId}/wish-list/siblings`">
          Listes des autres
        </NuxtLink>
      </template>
    </AppTabLinks>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  eventId: string;
}

const props = defineProps<Props>();

const route = useRoute();

const activeTab = computed(() => {
  if (route.path === `/event/${props.eventId}/wish-list/siblings`) {
    return 1;
  }
  return 0;
});
</script>
