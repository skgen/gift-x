<template>
  <MkCard class="sk-AppAsyncData">
    <div>
      Status: <span :data-state="props.response.status.value">{{ props.response.status }}</span>
    </div>
    <template v-if="props.response.status.value === 'error' && props.response.error.value">
      <div>message: <em>{{ props.response.error.value.message }}</em></div>
      <MkCard><pre>{{ props.response.error.value.cause }}</pre></MkCard>
    </template>
    <template v-if="props.response.status.value === 'success' && props.response.data.value">
      <div>Data</div>
      <MkCard><pre>{{ props.response.data.value }}</pre></MkCard>
    </template>
    <div class="sk-AppAsyncData-actions">
      <MkButton variant="outline" @click="() => props.response.refresh()">
        Refresh
      </MkButton>
      <MkButton variant="outline" @click="() => props.response.execute()">
        Execute
      </MkButton>
      <MkButton variant="outline" @click="() => props.response.clear()">
        Clear
      </MkButton>
    </div>
  </MkCard>
</template>

<script lang="ts" setup>
interface Props {
  response: ReturnType<typeof useAsyncData>;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
.sk-AppAsyncData {
  display: flex;
  flex-direction: column;
  gap: var(--mk-size-1);

  pre {
    white-space: pre-wrap;
  }

  &-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--mk-size-1);
  }

  [data-state='success'] {
    color: var(--mk-success);
  }

  [data-state='error'] {
    color: var(--mk-error);
  }

  [data-state='idle'] {
    color: var(--mk-neutral);
  }

  [data-state='pending'] {
    color: var(--mk-info);
  }
}
</style>
